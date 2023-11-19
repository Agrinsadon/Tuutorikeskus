import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const yearsData = [
  { year: 2017, percentage: 90 },
  { year: 2018, percentage: 100 },
  { year: 2019, percentage: 89 },
  { year: 2020, percentage: 100 },
  { year: 2021, percentage: 100 },
  { year: 2023, percentage: 100 },
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
        <h1>Aikajanamme</h1>
        <p>
          Olemme erittäin ylpeitä tilastosaavutuksistamme vuosien varrella
          <br />
          Tutoriemme ja opiskelijoiden yhdessä saavuttamat onnistumiset
        </p>
        <div className="timeline-small">
          <div className="timeline-item-small">
            <div className="circle-small" onClick={handleNextYear}>
            <span className="percentage-small">{percentage}%</span>
            </div>
          </div>
        </div>
        <div className="timeline-frame-small">
          <span className="year-small">{year}</span>
        </div>
        {currentYearIndex > 0 && (
        <FontAwesomeIcon
        icon={faArrowLeft}
        className="arrow-left"
        onClick={handlePreviousYear}
        />
        )}
        {currentYearIndex < yearsData.length - 1 && (
        <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-right"
        onClick={handleNextYear}
        />
        )}
      </div>
    </div>
  );
};

export default Timeline;
