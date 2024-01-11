import React from 'react';

const AnimatedDots = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="20" viewBox="0 0 80 20" fill="none">
      <circle cx="3.5" cy="10" r="0" fill="#2580DB">
        <animate attributeName="r" values="0;3" dur="1s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="13.5" cy="10" r="0" fill="#2580DB">
        <animate attributeName="r" values="0;3" dur="1s" begin="0.25s" repeatCount="indefinite" />
      </circle>
      <circle cx="21.5" cy="10" r="0" fill="#2580DB">
        <animate attributeName="r" values="0;3" dur="1s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <text x="30" y="14" fontSize="14px"  width={'250px'} overflow={'none'} fill="#2580DB">Печатает...</text>
    </svg>
  );
};

export default AnimatedDots;
