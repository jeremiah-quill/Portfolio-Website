import React, { useEffect, useState } from 'react';

const ProgressiveImg = ({ lowQualityImg, highQualityImg, className, aspectRatio }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [src, setSrc] = useState(lowQualityImg);

  useEffect(() => {
    // setSrc(lowQualityImg);
    const img = new Image();
    img.src = highQualityImg;
    img.onload = () => {
      setSrc(highQualityImg);
      setIsLoaded(true);
    };
  }, [lowQualityImg, highQualityImg]);

  return (
    <React.Fragment>
      <img
        className={className}
        alt="test"
        src={src}
        style={{
          width: '100%',
          aspectRatio: { aspectRatio },
          filter: !isLoaded ? 'blur(20px)' : 'none',
          transition: 'filter .3s ease-out',
        }}
      />
    </React.Fragment>
  );
};
export default ProgressiveImg;
