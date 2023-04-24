import React from 'react';

export default function YoutubeEmbed(props) {
  const { title, videoId, caption } = props;
  return (
    <figure style={{
      width: '100%',
      margin: '2rem 0',
    }}>
      <iframe
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '16/9',
          borderRadius: "0.5rem",
          overflow: 'hidden'
        }}
        src={`https://youtube.com/embed/${videoId}?autoplay=1`}
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:100px;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.25em gray}</style><a href=https://youtube.com/embed/${videoId}?autoplay=1><img src=https://img.youtube.com/vi/${videoId}/maxresdefault.jpg alt='${title}'><span><svg width="100px" height="100px" viewBox="0 0 463 462" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="231.742" cy="230.999" r="231" fill="#FE5011"></circle><path d="M181.703 165.53C181.703 156.392 191.812 150.873 199.499 155.814L301.34 221.283C308.412 225.83 308.412 236.168 301.34 240.715L199.499 306.184C191.812 311.125 181.703 305.606 181.703 296.468V165.53Z" fill="#FFFFFF"></path></svg></span></a>`}
        frameBorder="0"
        allowFullScreen
        title={title ? title : 'YouTube video player'}
        loading="lazy"
        allow="autoplay; picture-in-picture"
      ></iframe>
      {caption && <figcaption style={{ textAlign: "center" }}><i>{caption}</i></figcaption>}
    </figure>
  );
};
