// 1. 호출스택, 이벤트 루프
function first(){
    second();
    console.log("첫 번째");
}
function second(){
    third();
    console.log("두 번째");
}
function third(){
    console.log("세 번째");
}
first();
// 세 번째 -> 두 번째 -> 첫 번째

// 호출 스택 (함수의 호출, 자료구조의 스택):
// [호출 시, 쌓임.]
// = 동기 =순서대로
// ------------------
//  ↑ 이 순서로 쌓이고 
// ==================
// ↑ third()    ↓
// ------------------
// ↑ second()   ↓
// ------------------
// ↑ first()    ↓
// ------------------
// ↑ anonymous  ↓
// ==================
//  ↓ 이 순서로 실행
// ------------------
// LIFO구조
// Anonymous는 가상의 전역 컨텍스트 (항상 존재)

// 2. 이벤트 루프 (1)
// 비동기
function run(){
    console.log("3초 후 실행");
}
console.log("시작");
setTimeout(run, 3000);
console.log("끝");
// 시작 -> 끝 -> 3초 후 실행
// 호출 스택만으로 설명 불가
// 호출 스택 + 이벤트 루프로 설명

// [이벤트 루프]
// 호출 스택
// 백그라운드
// 태스크 큐
// 메모리
// 콘솔창

// 2. 이벤트 루프 (2)
function oneMore(){
    console.log("one more");
}
function run(){
    console.log("run run");
    setTimeout(() => {
        console.log("wow");
    },0)
    new Promise((resolve) => {
        resolve("hi");
    })
    .then(console.log);
    oneMore();
}

setTimeout(run, 5000);
