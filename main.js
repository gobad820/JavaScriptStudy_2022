// 실습1
// 10명의 성적을 받아 와 평균을 표시하기
// 야구게임 구현하기
// 끝말잇기 구현하기
// alert, prompt

// 이벤트 리스너
function displayTime() {
    console.log("onclick: "+ new Date());
}
const button = document.getElementById("button");
button.addEventListener("click", () => {
    console.log("addEventListener: " + new Date());
})

// setTimeout(비동기)
setTimeout(() => {
    console.log(10);
},1000);
console.log(100);

// setInterval(반복)
var num = 0;
const loop = setInterval(() => {
    console.log(num++)
}, 1000);
setTimeout(() => {
    clearInterval(loop);
}, 10000);

// 실습2
// 알람시계(타이머) 구현 / alert로 알람
// 