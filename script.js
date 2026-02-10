// 1. Entrance Animation
const tl = gsap.timeline();

tl.from(".main-title", { duration: 1, y: 100, opacity: 0, ease: "power4.out" })
  .from(".red-title", { duration: 1, x: -50, opacity: 0, ease: "power4.out" }, "-=0.7")
  .from(".car-container", { duration: 1.5, x: 300, opacity: 0, ease: "power2.out" }, "-=1");

// 2. Mouse Glow Movement
document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor-glow", { x: e.clientX, y: e.clientY, duration: 0.5 });
    
    // 3. Car Parallax Effect (The "Cool Visual")
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    gsap.to("#car-img", {
        x: moveX * 2,
        y: moveY * 2,
        rotation: moveX * 0.2,
        duration: 1
    });
});

// 4. Subtle Floating for the Car
gsap.to("#car-img", {
    y: "-=15",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});