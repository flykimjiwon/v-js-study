function add(a,b){
    return a+b;
}

console.log(add(2,3))

const sum = add(3,4)
console.log(sum)

function divide(num1,num2){
    return num1 / num2;
}

function surprise(operator){//신기하넹! 함수도 전달이가능하고 그런거임 ㅇㅇ operator는 callback으로 바꿔서말할 수도잇음
    const result = operator(2,3) //add(2,3) 이랑 같은뜻임
    console.log(result)
}

surprise(add)
surprise(divide) 