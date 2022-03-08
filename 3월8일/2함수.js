// 함수 hoisting
console.log(f(5));
function f(x) {return x*x;}

// 객체 생성

// 디폴트 매개변수
function func(a=1) {
    a = a || 1;
    console.log(a);
};
// 나머지 매개변수
(function func4(a, b, ...c) {
    console.log(a, b, c[1]);
})('a', 'b', 'c', 'd', 'e');

// 인수로 객체 전달 1
var obj = {q: 1, w: 2, e: 3, r: 4};
(function func2(obj){
    console.log(obj.q, obj.w, obj.e, obj.r);
})(obj);

// 인수로 객체 전달 2
// 객체의 비구조화 할당
(function func3({q: x=5, w: y, e: z}){
    console.log(x, y, z);
})(obj);
// 배열의 비구조화 할당
var qi = [, 20, , 10];
var [ai=100, bi, ci, di] = qi;
console.log(ai, bi, ci, di);

// 익명함수
var 익명함수 = function() {
    console.log("익명함수 실행");
}();
var 화살표함수 = (n) => {return n*n*n};
console.log(화살표함수(3));