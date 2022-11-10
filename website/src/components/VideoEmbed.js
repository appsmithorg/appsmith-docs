import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoEmbed({ host, ...props }) {
  if (host === "youtube") {
    return <YoutubeEmbed {...props} />;
  }

  return (
    <div>
      <p>
        <strong>VideoEmbed</strong> component is not implemented for {host}{" "}
        yet.
      </p>
    </div>
  );
}
