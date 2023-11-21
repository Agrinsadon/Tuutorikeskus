import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/VideoCarousel.css';

const VideoCarousel = () => {
  const videoIds = ['QCFMcGtb9ao', 'newVideoId1', 'newVideoId2', 'newVideoId3'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length);
  };

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  const getVideoEmbedCode = (videoId) => {
    return `<iframe src="https://www.youtube.com/embed/${videoId}?si=VlC6T6zZnhrE3qHF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  };

  return (
    <div className="carousel-container">
      <div className="header">Video Klipit</div>
      <div className="video-container-small">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handlePrevClick}
          className="arrow-icon left-arrow"
        />
        <div dangerouslySetInnerHTML={{ __html: getVideoEmbedCode(videoIds[currentVideoIndex]) }} />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={handleNextClick}
          className="arrow-icon right-arrow"
        />
      </div>
    </div>
  );
};

export default VideoCarousel;
