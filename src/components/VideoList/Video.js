import React from 'react';

export default function Video({
  data
}) {
  return (
    <div className="video">
      <p className="video-title">
        <a href={data.link}>{data.name}</a>
      </p>
    </div>
  );
}
