
import React from 'react';

function StartButton({ onClick }) {
  return (
    <button onClick={onClick} className="start-button">
      Старт
    </button>
  );
}

export default StartButton;