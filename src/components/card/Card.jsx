import React from 'react';
import "./card.css";


const Card = ({ className, children, handleClick, id }) => {
  return (
    <div className={className} onClick={handleClick} id={id}>
          {children}
    </div>
  )
}

export default Card
