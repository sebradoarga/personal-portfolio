export const aboutPageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
};

export const homePageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
};

export const contactPageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
};

export const portfolioPageVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
    scale: 1,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 1,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.4,
};
