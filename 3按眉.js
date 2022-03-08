var student = {
    name: "최승환",
    age: 23,
    number: 5533082,
    grade: 3,
    method: function() {
        console.log("메서드 실행됨");
    }
};

console.log(student);
console.log(student["name"]);
student.method();

// 프로퍼티 추가,삭제,변경
student["rank"] = 'A';
student.age = '24';
delete student.name;
console.log(student);
