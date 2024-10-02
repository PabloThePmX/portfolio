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

window.onload = function() {
    typeWriter();
};