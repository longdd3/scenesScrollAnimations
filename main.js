gsap.registerPlugin(ScrollTrigger);
let speed = 100;

let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
})

scene1.to(".s1-m-1", {
    y: 5*speed,
    duration: 1,
    ease: "power1.in"
 },0)

 scene1.to(".s1-m-s1", {
    y: 4*speed,
    duration: 1.5,
    ease: "power1.in"
 },0)
 scene1.to(".s1-m-s2", {
    y: 4.2*speed,
    duration: 2,
    ease: "power1.in"
 },0)
 scene1.to(".s1-m-s3", {
    y: 3.5*speed,
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-m-2", {
    y: 4*speed,
    stagger: 0.1,
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-m-3", {
    y: 4.5*speed,
    stagger: 0.1,
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-walkpath", {
 
    transformOrigin: "100% 100%",
    scale: 0,
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to("#s1-m4-2", {
    y: 4.5*speed,
    x: 3.1*speed,
 
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-m-4", {
    y: 6.5*speed,
    x: 4.1*speed,
    
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to("#s1-m4", {
    y: 5.5*speed,
    x: -4.1*speed,
    
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to("#s1-m5", {
    y: 4.5*speed,
    x: -3.1*speed,
    
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-cld-1", {
    y: -1.5*speed,
    x: 6.1*speed,
    stagger: 0.1,
    duration: 1,
    ease: "power1.in"
 },0)
 scene1.to(".s1-cld-2", {
    y: -1.5*speed,
    x: -3.1*speed,
    stagger: 0.1,
    duration: 1,
    ease: "power1.in"
 },0)
 
 scene1.to(".cls-257", {
    y: -3.5*speed,
 
    duration: 1,
    ease: "power1.in"
 },0)
 
 scene1.to(".cls-246", {
    y: -5.5*speed,
 
    duration: 1.5,
    ease: "power1.in"
 },0)
 let scene2 = gsap.timeline({
   ease: "power2.inOut"
 });
    ScrollTrigger.create({
        animation: scene2,
        trigger: ".scrollElement",
        start: "15% top",
        end: "40% 100%",
        scrub: 4,
    })
   gsap.set('.s2-bigL', {
      x: -55,
      scale: 1.05,
      transformOrigin: "50% 50%"
   })
   gsap.set('.s2-bigW', {
      scale: 1.2,
      transformOrigin: "50% 50%"
   })
    scene2.fromTo(".s2-m-1", {
      y: 500,},
{y: 0,
}, 0)
scene2.fromTo([".s2-bigL", ".s2-m-2"], {
   y:400
}, {
   y:0
}, 0.25)
scene2.fromTo([".s2-bigW"], {
   y:730
}, {
   y:220
}, 0.26)
scene2.fromTo([".s2-bigW2"], {
   y:600,
   scale: 0,
   transformOrigin: "100% 100%",
}, {
   duration: 1.5,
   scale: 1,
   y:0
}, 0.35)
scene2.fromTo([".s2-leaf"], {
   scale: 0,
   transformOrigin: "100% 100%",
   y:300
}, {
   duration: 1.5,
   scale: 1,
   y: -20
}, 0.25)
 
scene2.fromTo([".cls-79"], {
   y:-400
}, {
   duration: 1.5,
   y: 0
}, 0.5)
scene2.fromTo([".cls-80"], {
   y:-450
}, {
   duration: 1.8,
   y: 0
}, 0.35)
scene2.fromTo([".s2-cld-1"], {
   y:-300,
   x: 320
}, {
   duration: 1.5,
   ease: "sine.inOut",
   stagger: 0.1,
   x: 0,
   y: 0
}, 0.35)
scene2.fromTo([".s2-cld-2"], {
   y:-300,
   x: -320
}, {
   duration: 1.5,
   ease: "sine.inOut",
   stagger: 0.1,
   x: 0,
   y: 0
}, 0.15)
scene2.fromTo([".s2-rock"], {
  scale: 0,
   
  transformOrigin: "50% 50%"
}, {
   stagger: 0.1,
   duration: 1.5,
  scale: 1,
}, 0.35)

// gsap.set("#scene-3", { y:525, visibility: "visible" })

let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "50% top",
    end: "bottom 100%",
    scrub: 3,
});
sceneTransition.to(".s2-leaf", 
{
   stagger: 0.5,
   rotation: -35,
   scale: 3.2,
   transformOrigin: "100% 100%",
}, 
0)