import React from 'react';

const ProgressiveImg = ({ lowQualityImg, highQualityImg }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <img
        alt="test"
        src={lowQualityImg}
        style={{ visibility: isLoaded ? 'hidden' : 'visible', filter: 'blur(20px)' }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt="test"
        src={highQualityImg}
      />
    </React.Fragment>
  );
};
export default ProgressiveImg;
