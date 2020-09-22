// false:0,-0 '',null등... undefined
// true:-1 아무숫자, '문자'

let num = 9;
if(num){
    console.log(num)
}
num && console.log(num)
num || console.log('nono')

let obj = {
    name:'kimjiwon'
}

if(obj){
    console.log(obj.name)
}
obj && console.log(obj.name)


// &&앞에 true면 출력 ㅇㅇ! 반대로 ||있다.