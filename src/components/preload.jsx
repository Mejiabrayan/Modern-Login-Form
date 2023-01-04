import React, { useEffect, useState } from 'react';

const PreloadImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const img1 = new window.Image();
    img1.src = '../images/lucas.jpg';
    const img2 = new window.Image();
    img2.src = '../images/oladimeji.jpg';
    setImages([img1, img2]);
  }, []);

  return null;
};

export default PreloadImages;
