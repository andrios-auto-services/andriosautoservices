gsap.registerPlugin(ScrollTrigger);

// 1. Cinematic Entry
const tl = gsap.timeline();
tl.from(".main-title", { duration: 1.5, y: 100, opacity: 0, ease: "expo.out" })
  .from(".red-title", { duration: 1.5, x: -100, opacity: 0, ease: "expo.out" }, "-=1.2")
  .from(".hero-p, .btns", { duration: 1, opacity: 0, y: 20, stagger: 0.2 }, "-=1")
  .from(".car-wrapper", { duration: 2, x: 200, opacity: 0, ease: "power4.out" }, "-=1.2");

// 2. Parallax Car & Cursor Glow
document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    
    // Cursor glow follow
    gsap.to(".cursor-glow", { x: clientX, y: clientY, duration: 0.6 });

    // Car tilt parallax
    const xPos = (clientX / window.innerWidth - 0.5) * 30;
    const yPos = (clientY / window.innerHeight - 0.5) * 30;
    
    gsap.to("#car-img", {
        x: xPos,
        y: yPos,
        rotation: xPos * 0.05,
        duration: 2,
        ease: "power2.out"
    });
});

// 10. Scroll Reveal for Form
gsap.from(".form-container", {
    scrollTrigger: {
        trigger: ".booking-section",
        start: "top 80%",
    },
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: "power3.out"
});
