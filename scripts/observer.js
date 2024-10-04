// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;


// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#main");
    createObserver();
  },
  false
);

function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      //40% need to appear
      threshold: 0.2,
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        document.getElementById("mySidenav").style.visibility = "visible";
        document.getElementById("mySidenav").style.opacity = 1;
      } else {
        document.getElementById("mySidenav").style.visibility = "hidden";
        document.getElementById("mySidenav").style.opacity = 0;
      }
  
      prevRatio = entry.intersectionRatio;
    });
}