export const pageFade = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
  transition: {
    duration: 5,
  },
};

export const pageFadeTransition = {
  duration: 0.5,
};
