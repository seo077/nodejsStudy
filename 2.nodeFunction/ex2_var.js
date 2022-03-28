const odd = "홀수입니다.";
const even = "짝수입니다.";

// 다른 파일에서 사용하고 싶은 것 넘겨준다.
// 방법 1
// module.exports = {
//     //원래 = (odd : odd)
//     // 최신 문법 = key와 value가 같은 경우 생략 가능
//     odd,
//     even
// };

// 방법 2
// module.exports = {odd, even};

// 방법 3
// module을 생략하고 사용
exports.odd = odd;
exports.even = even;

//  module.exports === exports === "빈 객체 {}"
// ㄱ module.exports 는 한 가지만 module로 만들고 싶을 때 사용

// ㄴ 두 가지 이상을 module로 만들고 싶을 때
// ㄴ -1. exports.변수 = 변수;
// ㄴ -2. module.exports ={};
// **ㄴ -1, ㄴ -2 둘 중 하나만 선택하여 사용해야 한다.

// 최신 문법 import, export default
// module.exports == export default
// import {} from '경로';