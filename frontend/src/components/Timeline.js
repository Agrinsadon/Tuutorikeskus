import React, { useState } from 'react';
import '../styles/Timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const yearsData = [
  { year: 2018, percentage: 89 },
  { year: 2019, percentage: 100 },
  { year: 2020, percentage: 100 },
  { year: 2021, percentage: 90 },
  { year: 2022, percentage: 100 },
];

const Timeline = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const { year, percentage } = yearsData[currentYearIndex];

  const handleNextYear = () => {
    if (currentYearIndex < yearsData.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };

  const handlePreviousYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
    }
  };

  return (
    <div className="aikajana-small">
      <div className="aikajana-container-small">
        <h2>Aikajanamme</h2>
        <p>
          Olemme erittäin ylpeitä tilastosaavutuksistamme vuosien varrella
          <br />
          Tutoriemme ja opiskelijoiden yhdessä saavuttamat onnistumiset
        </p>
        <div className="timeline-small">
          <div className="timeline-item-small">
            <div className="circle-small" onClick={handleNextYear}>
              {percentage}%
            </div>
          </div>
        </div>
        <div className="timeline-frame-small">
          <span className="year-small">{year}</span>
        </div>
        {currentYearIndex < yearsData.length - 1 && (
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-right"
            onClick={handleNextYear}
          />
        )}
        {currentYearIndex > 0 && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-left"
            onClick={handlePreviousYear}
          />
        )}
      </div>
    </div>
  );
};

export default Timeline;
