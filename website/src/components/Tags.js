import React from 'react';

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        (tag && tag.name) ? (
          <React.Fragment key={index}>
            {tag.link ? (
              <a href={tag.link} target="_blank" rel="noopener noreferrer" className={`tag ${tag.additionalClass}`}>
                {tag.name}
              </a>
            ) : (
              <span className={`tag ${tag.additionalClass}`}>
                {tag.name}
              </span>
            )}
          </React.Fragment>
        ) : null
      ))}
    </div>
  );
}

export default Tags;
