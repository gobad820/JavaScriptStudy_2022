// 1. 변수 선언
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

// 2-1. 변수(var) 호이스팅
// 선언을 맨 위로 끌어올림으로써 정상 작동
d = 4;
var d;
console.log(d);

// 2-2
let e;
e = 5;
console.log(e);

// 3. 동적 타이핑
console.log(1 + '5'); //
console.log('4' / '2');

// 4. var를 생략한 지역 변수
// 함수레벨범위
f = 6;
(function hi() {
    var f = 7;
    // f = 7;
})();
console.log(f);

// 5. 보간 표현식(플레이스 홀더)
var g = "종강";
console.log(`아~~ ${g}하고싶다.`);

// 6. var와 let의 차이점
// 블록레벨범위
let x = "outer x"; 
let y = "outer y";
if(true) {
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);