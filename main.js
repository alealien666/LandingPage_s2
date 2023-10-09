// scroll trigger
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("#panel");
const container = document.querySelector(".kontener");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".kontener",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => `+=${container.offsetWidth}`,
  },
});

// carousel responsive
