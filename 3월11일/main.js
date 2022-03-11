const slider = document.querySelector("#slider");
const inner = document.querySelector("#slider > .inner");
const imgs = document.querySelectorAll("#slider > .inner > li");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

(function clone_img() {
  for (let i = 0; i < imgs.length; i++) {
    const clone = imgs[i].cloneNode(true);
    imgs[0].before(clone);
  }
  for (let i = imgs.length; i > 0; i--) {
    const clone = imgs[i - 1].cloneNode(true);
    imgs[imgs.length - 1].after(clone);
  }
})();

// slider event
var count = imgs.length;
right.addEventListener("click", () => {
  count++;
  console.log(count);
  if (count === imgs.length * 2) {
    inner.style.transform = `translate(calc(-120px*${imgs.length}))`;
    count = imgs.length;
  }
  inner.style.transform = `translate(calc(-120px*${count}))`;
});
left.addEventListener("click", () => {
  count--;
  console.log(count);
  if (count === 0) {
    inner.style.transform = `translate(calc(-120px*${imgs.length}))`;
    count = imgs.length;
  }
  inner.style.transform = `translate(calc(-120px*${count}))`;
});
