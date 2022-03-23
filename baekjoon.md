# Algorithm
코딩 테스트를 위한 알고리즘 공부 저장소

### 백준저지 언어가이드에 있는 Node.js 인터페이스 정의
utf-8을 생략하면 입력 오류가 생길 수 있다.
```
let input = require("fs").readFileSync("/dev/stdin", "utf8").toString().split('\n');
```

### Node.js 2751번 시간초과 해결법
console.log 자체가 매운 느리기 때문에 결과값 출력시 배열 join을 사용하여 하나의 문자열로 출력한다.
```
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [firstLine, ...data] = input.trim().split("\n").map(v => Number(v));
let output = data.sort((a, b) => a - b);
console.log(output.join("\n"));
```

### Node.js readline 모듈 사용
```
function solution(input) {
    console.log(input.join("\n"));
}
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let [n, ...items] = input;
    solution(result);
    process.exit();
});
```
