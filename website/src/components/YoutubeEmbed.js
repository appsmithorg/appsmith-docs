import React from 'react';

export default function YoutubeEmbed(props) {
    const { title, videoId, caption } = props;
    return (
        <figure style={{
          width: '100%',
          margin: '0',
        }}>
          <iframe
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9'
            }}
            src={`https://youtube.com/embed/${videoId}`}
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.25em gray}</style><a href=https://youtube.com/embed/${videoId}><img src=https://img.youtube.com/vi/${videoId}/maxresdefault.jpg alt='${title}'><span>▶</span></a>`}
            frameBorder="0"
            allowFullScreen
            title={title ? title : 'YouTube video player'}
            loading="lazy"
          ></iframe>
          { caption && <figcaption>{caption}</figcaption> }
        </figure>
    );
  };
