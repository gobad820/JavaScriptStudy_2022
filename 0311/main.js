// const slider = document.getElementById("slider");
const slider = document.querySelector("#slider");
const inner = document.querySelector("#slider > .inner");
const imges = document.querySelectorAll("#slider > .inner > li");
const left = document.querySelector("#left");
const right = document.querySelector("#right");


(function clone_img() {
    for(let i= 0; i<imges.length; i++) {
        const clone = imges[i].cloneNode(true);
        imges[0].before(clone);
    }
    for(let i = imges.length; i > 0; i--) {
        const clone = imges[i-1].cloneNode(true);
        imges[imges.length-1].after(clone);

    }
})();

left.addEventListener("click", ()=> {
    console.log("left");
});

right.addEventListener("click", ()=>{
    console.log("right");
});