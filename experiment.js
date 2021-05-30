// const slide = document.querySelector(".slide");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight / 1.5;
//   console.log(windowHeight);
//   if (hikePos < windowHeight) {
//     hikeExp.style.color = "red";
//   }
// }
// let options = {
//   threshold: 1,
// };

// let observer = new IntersectionObserver(slideAnim, options);

// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       slide.style.background = "red";
//     }
//   });
// }

// observer.observe(slide);

// ----------------------------// ----------------------------

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".hike-exp",
  triggerHook: 0.5,
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .setClassToggle(".hike-exp", "active")
  .addTo(controller);
