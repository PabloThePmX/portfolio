let speed = 70;
let txt = `Hey! I'm Pablo!`;
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing-intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   var nav = document.getElementById("mySidenav");
//   if (prevScrollpos > currentScrollPos) {
//     // nav.style.display = "none";
//   } else {
//     nav.style.display = "block";
//   }
//   prevScrollpos = currentScrollPos;
// };

// https://stackoverflow.com/questions/34372106/check-if-an-element-is-visible-on-screen
// function isVisible(domElement) {
//     return new Promise(resolve => {
//       const o = new IntersectionObserver(([entry]) => {
//         resolve(entry.intersectionRatio === 1);
//         o.disconnect();
//       });
//       o.observe(domElement);
//     });
// }

// // https://stackoverflow.com/questions/49432579/await-is-only-valid-in-async-function
// async function verifyElement(){
//     const visible = await isVisible(document.querySelector('#main'));
//     console.log(visible);
// }

const options = {
    root: document.querySelector("#main"),
    rootMargin: "0px",
    threshold: 1.0,
};
  

window.onload = function() {
    typeWriter();
    const observer = new IntersectionObserver(callback, options);
    console.log(observer);
};

//go to the header when the page is reloaded
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}