//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

document.addEventListener("DOMContentLoaded", () => {
  //get the elements
  const boxElement = document.querySelector("#main");
  const storyCards = document.querySelectorAll('.fade-in-section');
  const aboutMe = document.querySelector("#about-me-card");
  const projects = document.querySelector("#projects-card");
 

  //verify the observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      //if the main part is visible, put visibility and opacity, or take it off
      if (entry.target === boxElement) {
        document.getElementById("mySidenav").style.visibility = entry.isIntersecting ? "visible" : "hidden";
        document.getElementById("mySidenav").style.opacity = entry.isIntersecting ? 1 : 0;
      } else if (entry.target === aboutMe){
        entry.target.classList.toggle('fade', entry.isIntersecting);
      } else if (entry.target === projects){
        entry.target.classList.toggle('fade', entry.isIntersecting);
      } else {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      }
    });
  };

  //observer definitions
  const observer = new IntersectionObserver(observerCallback, 
    { 
      root: null, 
      rootMargin: "0px", 
      //20% of the element need to be on user screen
      threshold: 0.2 
    });
  
  observer.observe(boxElement);
  //apply this for each card
  storyCards.forEach(storyCard => observer.observe(storyCard));
  observer.observe(aboutMe);
  observer.observe(projects);
});