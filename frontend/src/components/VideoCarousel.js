import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/VideoCarousel.css';

const VideoCarousel = () => {
  const videoIds = ['QCFMcGtb9ao', 't-9X8tF5Eyo', 'h0U1-TqsscY', 'newVideoId3'];
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
      <div className="text-container">
          <h2>Romanian Kulttuuri</h2>
        <p>Romanialla on pitkä historia ja se on säilyttänyt monia perinteitä ja kulttuurisia piirteitä vuosisatojen ajan. Roomalaisista juuristaan lähtien Romania on ollut kohtaamispaikka eri kulttuurien ja sivilisaatioiden välillä. Tämä näkyy monissa osissa Romanian kulttuuria, kuten sen kielessä, arkkitehtuurissa ja perinteisissä juhlissa.</p>
      </div>
      <div className="video-container-small">
        <div dangerouslySetInnerHTML={{ __html: getVideoEmbedCode(videoIds[currentVideoIndex]) }} />
        <div className="arrow-container">
          {currentVideoIndex > 0 && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={handlePrevClick}
              className="arrow-icon left-arrow"
            />
          )}
          {currentVideoIndex < videoIds.length - 1 && (
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={handleNextClick}
              className="arrow-icon right-arrow"
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default VideoCarousel;