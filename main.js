gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(false);
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
    y: 4.5*speed,
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
scene2.fromTo([".trans-scene"], {
   y:3.5*speed,
  
  
}, {
   duration: 1.5,
   y: 200,
},0)
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
    start: "30% top",
    end: "50% 100%",
    scrub: 3,
});
 
sceneTransition.fromTo(".trans-scene", 
{
   
   scale: 1,
   transformOrigin: "100% 100%",
}, 
{
   duration: 1.5,
   scale: 4.5,
   transformOrigin: "100% 100%",
},
0)

let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "35% top",
    end: "60% 100%",
    scrub: 3,
});

scene3.fromTo(".s3-bigL", 
{ 
   y: -550 
 }, 
{ 
   duration: 3.5,
   opacity: 1, 
    y:0
}, 
   0)
scene3.fromTo(".s3-bigL-1", 
{ 
   y: -350 
 }, 
{ 
   duration: 3.5,
   opacity: 1, 
    y:200
}, 
   0)
scene3.fromTo([".s3-m-1", ".s3-m-tree"], 
{ 
   y: 4.5*speed
 }, 
{ 
   duration: 1.25,
   opacity: 1, 
    y:0
}, 
   0)
 
scene3.fromTo([".s3-m-2"], 
{ 
   y: 5.5*speed,
    
 }, 
{ 
   stagger: 0.5,
   duration: 2.25,
  
    y:0
}, 
   0)
 
scene3.fromTo([".s3-cloud-r"], 
{ 
   y: -2.5*speed,
   x: 5.5*speed 
 }, 
{ 
   stagger: 0.1,
   duration: 3.25,
   x:0,
    y:0
}, 
   0.8)
   scene3.fromTo([".s3-cloud-l"], 
   { 
      y: -3.5*speed,
      x: -5.5*speed 
    }, 
   { 
      stagger: 0.1,
      duration: 2.25,
      x:0,
       y:0
   }, 
      0.8)
      scene3.fromTo([".s3-cloud-b"], 
      { 
         opacity: 0, 

        
       }, 
      { 
         stagger: 0.1,
         duration: 2.25,
        opacity: 1, 
        
      }, 
         0.8)
       
      scene3.fromTo([".s3-rocks"], 
      { 
        scale: 0 ,
         transformOrigin: "50%, 50%"
        
       }, 
      { 
         stagger: 0.1,
         duration: 2.25,
        scale: 1
        
      }, 
         0.8)
      scene3.fromTo([".s3-moon"], 
      { 
        y: -400
         
        
       }, 
      { 
         stagger: 0.1,
         duration: 2.25,
        y: 0
      }, 
         0.8)
let scene4 = gsap.timeline();
            ScrollTrigger.create({
               animation: scene4,
               trigger: ".scrollElement",
               start: "55% top",
               end: "70% 100%",
               scrub: 3,
            });
            gsap.set("#txt1", {
               x: 12.5*speed,
               y: 4.1 *speed,
               scale: 0.7
            })
             
            gsap.set("#txt2", {
               x: 12.5*speed,
               y: 4.6 *speed,
               scale: 0.7
            })           

scene4.to(["#scene-3", ".s3-all-rocks"], {
   scale: 0.6,
   transformOrigin: "0% 50%",
   duration: 1.5,
},0)
scene4.to("#scene-3", {
   x: -0.5*speed,
 
   duration: 1.5,
},0.25)

scene4.fromTo(["#txt2", "#txt1"], {
   opacity: 0,
}, {
   stagger: 0.1,
   duration: 0.5,
   opacity: 1,

},1.7)
 
 
  
 
// rotate element
let ds = $('#txt1');
 
 
   var tls = gsap.timeline({});
   tls.to(ds, {
      transformOrigin: "50% 50%",
      duration: 8,
      rotation: "360",
      repeat: -1,
      ease: 'none'
   })
 
   function tickGSAPWhileHidden(value) {
      if (value === false) {
         document.removeEventListener("visibilitychange", tickGSAPWhileHidden.fn);
         return clearInterval(tickGSAPWhileHidden.id);
      }
      const onChange = () => {
         clearInterval(tickGSAPWhileHidden.id);
         if (document.hidden) {
            gsap.ticker.lagSmoothing(0); // keep the time moving forward (don't adjust for lag)
            tickGSAPWhileHidden.id = setInterval(gsap.ticker.tick, 500);
         } else {
            gsap.ticker.lagSmoothing(500, 33); // restore lag smoothing
         }
      };
      document.addEventListener("visibilitychange", onChange);
      tickGSAPWhileHidden.fn = onChange;
      onChange(); // in case the document is currently hidden.
      }
      
      tickGSAPWhileHidden(true);

      gsap.set("#scene-4", {
          y: 1.5*speed,
          x: 1.2*speed,
          scale: 0.7, 
         transformOrigin: "50% 50%",
        
         })

let scene5 = gsap.timeline();
 
ScrollTrigger.create({
    animation: scene5,
    trigger: ".scrollElement",
    start: "68% top",
    end: "80% 100%",
    scrub: 3,
});
scene5.to(["#scene-3"], {
   x: -9.5*speed,
},0)
scene5.to(".s3-all-rocks", {
   x: 3.5*speed, 
   stagger: 0.1,
   duration: 0.5,
   rotate: -5,
},0)
scene5.to(["#txt1", "#txt2"], {
   x: 0,
 
 
},0)
let scene6 = gsap.timeline();
 
ScrollTrigger.create({
    animation: scene6,
    trigger: ".scrollElement",
    start: "70% top",
    end: "bottom 100%",
    scrub: 3,
});
scene6.fromTo(".s4-dooranstone", {
   opacity: 0,
 
}, {
   opacity: 1,
},0.8)
 
scene6.fromTo([".s4-mountainBig"], {
   y: 4.5*speed,
 
}, {
   y: 0,
},0)
scene6.fromTo(".s4-float-rocks", {
   y: 3.5*speed,
   stagger: 0.25,
 
}, {
   stagger: 0.1,
   y: 0,
},0.25)
 
 
 

 

 
 
 