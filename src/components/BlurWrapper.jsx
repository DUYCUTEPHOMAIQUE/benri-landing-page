import React from 'react';

function BlurWrapper({ children }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-benri-green-200 opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BlurWrapper;