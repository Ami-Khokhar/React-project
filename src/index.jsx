import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .fromTo(
      ".preloader-image",
      { opacity: 0, scale: 0.5 }, // Start small and hidden
      {
        opacity: 1,
        scale: 10,  // Grows to normal size
        duration: 2,
        ease: "Power3.easeOut",
      }
    )
    .to(".loading-bar", {
      width: "100%", // Progress bar slides from 0% to 100%
      duration: 3,   // Duration of the loading bar animation
      ease: "power3.inOut",
    })
    .to(".preloader", {
      duration: 1.5,
      height: "0vh", // Hides the preloader
      ease: "Power3.easeOut",
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" }, // Completely remove the preloader
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    });
};
