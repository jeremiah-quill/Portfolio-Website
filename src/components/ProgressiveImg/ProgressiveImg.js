import React from 'react';

const ProgressiveImg = ({ lowQualityImg, highQualityImg, className }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <React.Fragment>
      <img
        className={className}
        alt="test"
        src={lowQualityImg}
        style={{ width: '100%', display: isLoaded ? 'none' : 'block', filter: 'blur(20px)' }}
      />
      <img
        className={className}
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
