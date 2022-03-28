// anonymous의 this = global x
console.log(this);
// {} 빈객체가 나옴
// 빈 객체가 나오는 이유는 this === module.exports === {}이기 때문
console.log(this === module.exports === {} === exports)

function a(){
    console.log(this === global);
}
a();