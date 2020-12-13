export const transitionImage1 = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
  },
};
export const animationImage1 = {
  y: ["0em", "30em"],
};

export const animationImage2 = {
  scale: [1, 2, 2, 1],
  rotate: [0, 0, 50, 0, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
};
export const transitionImage2 = {
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  loop: Infinity,
  repeatDelay: 1,
};

export const animationImage3 = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 0, 0, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
};
export const transitionImage3 = {
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  loop: Infinity,
  repeatDelay: 1,
};

export const animationWelcome = {
  scale: [1, 2, 2, 1],
  rotate: [1000, 0, 0, 0, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
};
export const transitionWelcome = {
  duration: 2,
  times: [0, 0.4, 0.5, 0.8, 1],
  loop: false,
  repeatDelay: 1,
};
