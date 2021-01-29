import React, { useState, useEffect, useRef } from "react";

const ImageCard = ({ image }) => {
  const [span, setSpan] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    setSpan(span);
  };

  const { description, urls } = image;
  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;