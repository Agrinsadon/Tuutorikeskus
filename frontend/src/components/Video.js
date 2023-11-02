import React from 'react';

const Video = () => {
  // Replace the 'iframe' code with the one you copied from YouTube.
  const youtubeEmbedCode = '<iframe src="https://www.youtube.com/embed/67vgPzFDN0E?si=o3bC90MhHLQLQpOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 10px;"></iframe>';

  return (
    <div className="video-container">
      <div dangerouslySetInnerHTML={{ __html: youtubeEmbedCode }}></div>
    </div>
  );
};

export default Video;
