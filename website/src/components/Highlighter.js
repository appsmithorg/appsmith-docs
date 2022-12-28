import React from "react";
/**
 * The component can be used to highlight the text in the documentation. 
 * For example, use it to highlight the command output, warnings in the troubleshooting guide.
 * @param {*} props: 
 *                  highlighterClassName - is the css class name that you want to style the component. 
 *                  content - the content that you wish to display in the component
 *                  htmlContent - the content that contains html tags
 * @returns a html component
 */
export default function Highlighter(props) {
    const {highlighterClassName, content, htmlContent} = props;
    return (
        <div className={highlighterClassName} dangerouslySetInnerHTML={{__html: htmlContent}}>{content}</div>
    );
};