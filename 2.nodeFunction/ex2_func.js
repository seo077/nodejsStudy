// 다른 파일의 변수,함수 사용하기 1
const value = require('./ex2_var');

const odd1 = value.odd;
const even1 = value.even;

// console.log(value);
// console.log(odd1);
// console.log(even1);


// 다른 파일의 변수,함수 사용하기 2
// 구조 분해 할당!!
// -> 변수명과 속성명 같아야 함!
const {odd, even} = require('./ex2_var');
function checkOddOrEven(number){
    if(number % 2){
        return odd;
    }else{
        return even;
    }
}

// * 이전 파일에서 가져온 것까지 다시 넘겨줄 수 있다.
// module.exports = {
//     checkOddOrEven,
//     odd,
//     even
// }

module.exports = checkOddOrEven;