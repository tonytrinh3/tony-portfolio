import React from "react";

export const ImgText = (props) => {
  //direction
  //img or svg...
  //info

  return (
    <div className={`img-text img-text--${props.direction}`}>
      {props.svg ? (
        props.svg
      ) : (
        <img src={props.img} alt={props.text} className={`img-text__icon img-text__icon--${props.direction}`} />
      )}

      <p className={`img-text__text img-text__text--${props.direction}`}>{props.text}</p>
    </div>
  );
};
