import React from 'react';
function BackButton({ onClick }) {

    return (
      <>
        <button onClick={ onClick } className="back-button">НАЗАД</button>
      </>
    )
  }
  
  export default BackButton