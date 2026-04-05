import React from 'react';

const EnrollButton = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-600 hover:bg-primary-700 text-neutral-0 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-primary-500/20 active:scale-95 ${className}`}
    >
      Enroll now
    </button>
  );
};

export default EnrollButton;
