const { marked } = require("marked");
const algoliasearch = require("algoliasearch");
const glob = require("glob");
const fs = require("fs");

// Utils
// Reorder pages
const orderPages = (pages) => {
  const orderMap = {
    "learning-and-resources/sample-apps": 0,
    "core-concepts/connecting-to-data-sources": 1,
    "core-concepts/data-access-and-binding/displaying-data-read/": 2,
    "core-concepts/data-access-and-binding/capturing-data-write/": 3,
    "core-concepts/writing-code/": 4,
    "help-and-support/troubleshooting-guide/": 5,
    "learning-and-resources/how-to-guides/": 6,
    "reference/appsmith-framework/": 7,
  };
  pages.sort((pageA, pageB) => {
    const orderA = orderMap[pageA.path] || 999;
    const orderB = orderMap[pageB.path] || 999;
    return orderB - orderA;
  });
  pages = pages.map((item, index) => {
    return { ...item, defaultOrder: index };
  });
  return pages;
};

// Updates
// Update image urls
const updateImageUrls = (document) => {
  const prefix =
    "https://raw.githubusercontent.com/appsmithorg/appsmith-docs/main/website/static";
  // Regex matches image urls in the markdown
  document = document.replace(
    /(!\[.*?\]\()(.+?)(\))/g,
    function (match, openingBracket, url, closingBracket) {
      // We leave it is if it is an absolute url
      if (!url.startsWith("https:")) {
        return openingBracket + prefix + url + closingBracket;
      }
      return match;
    }
  );
  return document;
};
// Update links
const updateLinks = (document, path) => {
  // Matches links in markdown
  const regexMdLinks = /(?<!\!)\[([^\[\]]*)\]\((.*?)\)/gm;
  const singleMatch = /(?<!\!)\[([^\[\]]*)\]\((.*?)\)/;
  const matches = document.match(regexMdLinks);
  // Get path without the file extension at the end.
  const pathWithoutExtension = path.replace(/[README]*\.[^/.]+$/, "");
  const isFileReadme = path.replace(/^.*[\\\/]/, "") === "README.md";

  if (!matches) return;
  matches.map((match) => {
    const text = singleMatch.exec(match);
    // Get just the link
    const parentPath = pathWithoutExtension.split("/").slice(0, -1).join("/");
    // link href without the text
    const link = text[2];
    if (link.startsWith("https:")) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_match, readme = "", extension = "", _hash] = link.match(
      /(README)*(\.[^#/.]+)(#.*)?/
    ) ?? ["", "", "", ""];
    // Remove extensions from file.
    let formattedText = link.replace(readme + extension, "");
    // Get levels ../, ../../ etc.
    let levels = (formattedText.match(/\.\.\//g) || []).length;
    // Path for video/README.md is video/ at docs.appsmith.com
    if (!isFileReadme) {
      levels += 1;
    }
    // Get path after moving back levels ../../
    const pathAtLevel = pathWithoutExtension
      .split("/")
      .filter(Boolean)
      .slice(0, -levels)
      .join("/");
    // Replace path levels ../../ etc with ""
    formattedText = formattedText.replace(/\.\.\//g, "");
    // If path starts from root ignore as the path is correct as it is
    if (!link.startsWith("/")) {
      if (levels) {
        formattedText = `${pathAtLevel}/${formattedText}`;
      } else {
        formattedText = `${parentPath}/${formattedText}`;
      }
    }
    document = document.replace(`(${link})`, `(${formattedText})`);
  });
  return document;
};

// Extracts
// Get the h1 text
const getTitle = (document) => {
  let title = "";
  marked.use({
    walkTokens: (token) => {
      if (token.type === "heading" && token.depth === 1) {
        title = token.text;
      }
    },
  });
  marked.parse(document);
  return title;
};
// Get path
const getPath = (fullPath) => {
  return fullPath.replace(/[README]*\.[^/.]+$/, "");
};

// Core
// Parse each file under the docs folder
function parseFile(file) {
  try {
    const fullPath = file.path;
    // Markdown
    let document = file.content;

    // Extract the heading of the markdown and assign it to title
    const title = getTitle(document);
    // Get docs path
    const path = getPath(fullPath);
    // Update image urls
    document = updateImageUrls(document);
    // Update links
    document = updateLinks(document, fullPath);
    if (document) {
      // Content of each record in the index
      return {
        title,
        document,
        kind: "document",
        path,
      };
    }
  } catch (e) {
    console.log(e);
  }
}
// Fetch all files under docs folder
function fetchMarkdownFiles(callback) {
  try {
    const docsPath = "./docs/";
    let finalIndex = [];
    const getDirectories = function (src, callback) {
      glob(src + "/**/*", callback);
    };
    getDirectories(docsPath, function (err, filePaths) {
      if (err) {
        console.log(err);
      } else {
        filePaths.map((filePath) => {
          if (
            fs.existsSync(filePath) &&
            !fs.lstatSync(filePath).isDirectory()
          ) {
            // Get markdown
            const data = fs.readFileSync(filePath, "utf8");
            const file = {
              path: filePath.replace(docsPath, ""),
              content: data,
            };
            const record = parseFile(file);
            finalIndex.push(record);
          }
        });
        finalIndex = finalIndex.flat().filter(Boolean);
        // Sort/order the pages
        finalIndex = orderPages(finalIndex);
        callback(finalIndex);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function main() {
  try {
    const [application_id, api_key] = process.argv.slice(2);
    const client = algoliasearch(application_id, api_key);
    const algoliaIndex = client.initIndex("omnibar_docusaurus_index");
    const onFileIndexRecieved = async function (finalIndex) {
      // Upload the aggregated data to algolia
      await algoliaIndex.replaceAllObjects(finalIndex, {
        autoGenerateObjectIDIfNotExist: true,
      });
    };
    fetchMarkdownFiles(onFileIndexRecieved);
  } catch (e) {
    console.log(e);
  }
}

main();
