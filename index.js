
// animate the count
const counter = (from, to, element, duration) => {
    let startTime = null;
    const step = (time) => {
        if(!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        console.log(Math.floor(progress * (to - from) + from))
        element.innerHTML = Math.floor(progress * (to - from) + from);
        if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
    window.requestAnimationFrame(step);
}

counter(0, 22, document.getElementById("questions"), 1000);
counter(1300, 1392, document.getElementById("solves"), 2000);
counter(900, 993, document.getElementById("users"), 1800);
counter(700, 789, document.getElementById("teams"), 1500);

