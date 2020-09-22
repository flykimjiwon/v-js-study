// let number = 2;
// let number2 = number;

// console.log(number)
// console.log(number2)

// number2 = 3;
// console.log(number)
// console.log(number2)

let obj = {
    name:'flykimjiwon',
    age:30,
}
console.log(obj)
console.log(obj.name)
console.log(obj.age)

let obj2 = obj
console.log(obj2)
obj2.name = 'jiwon'
console.log(obj)
console.log(obj2)

// 오브젝트는 주소를 복사해서 들어온다! 그래서 복제한녀석에서 안에 다른녀석들 바꾸면
// 원래 오브젝트에서도 변화가됨 ㅇㅇ..!!, 그림으로 알면 쉬움
// number, string, boolean, null, undefined 와  object는 다르다고 생각하면됨