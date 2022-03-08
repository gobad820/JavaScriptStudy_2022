// 조건문

// 반복문
// 객체순환 for/in


// 점프문 - 라벨문
// outer: while(true) {
//     inner: while(true) {
//         if(confirm("inner")) break inner;
//     }
//     if(confirm("outer")) break outer;
// }

// 실습1
// 아래의 결과가 나오도록 함수를 생성하기
function 날짜(a, b, c) {
    if(a && !b && !c) {
        console.log(a + "년");
    }
    if(a && b && !c) {
        console.log(a + "." + b)
    }
    if(a && b && c) {
        console.log(a + "/" + b + "/" + c);
    }
}
날짜(2022);         // 2022년
날짜(2022, 3);      // 2022.3
날짜(2022, 3, 8);   // 2022/3/8
