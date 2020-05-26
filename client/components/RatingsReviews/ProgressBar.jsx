import React from 'react';

const ProgressBar = (props) => {
  const progressBarStyle = {
    position: 'relative',
    height: '8px',
    width: '200px',
    borderRadius: '12.5%',
    backgroundColor: '#f0f0f0',
  };
  const fillerStyle = {
    backgroundColor: '#1BBC9B',
    height: '100%',
    borderRadius: 'inherit',
    width: `${props.percentage}%`,
  };
  return (
    <div className='progress-bar' style={progressBarStyle}>
      <div className='filler' style={fillerStyle}></div>
    </div>
  );
};

export default ProgressBar;
