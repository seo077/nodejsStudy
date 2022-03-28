// 1. var, const, let
// 차이점 : 블록{} 스코프(var은 함수 스코프)

if(true){
    const x = 3;
}
console.log(x); // 에러 -> const, let : 블록스코프를 존중

if(true){
    var y = 5;
}
console.log(y); // 가능

function a(){
    var z = 7;
}
console.log(z); // 에러 -> var : 함수 스코프 존중

// const : 상수
// let : 변수

// =============================
// 2. 탬플릿 문자열 = 백틱 문자열
const result = `나는 ${홍길동}입니다.`;

// 2-1. 태그드 탬플릿 리터럴 = 백틱으로 함수 호출
function a(){};
a();
a``;

// 3. 객체 리터럴

// 4. 화살표 함수
// this
// function : 본인만의 this
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function(){
        var that = this; // relationship1이 가리키는 this를 that에 저장
        this.friends.forEach(function (friend){
            console.log(that.name, friend);
        });
    }
};

// 화살표 함수 : 무조건 부모의 this를 물려받음. 본인 this 없으므
var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};


button.addEventListener('click', function(){
    console.log(this.textContent);
});

button.addEventListener('click', () => {
    // 동작 안함.
    // 아래의 this는 바깥의 this
    console.log(this.textContent);
});
// ->따라서 화살표 함수를 쓰려면 이렇게 해야한다.
button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});

// 5.구조분해 할당

// 6. 클래스
// 프로토타입 문법을 깔끔하게 작성할 수 있는 Class
// extends
// super()

// ** 7. 프로미스
// 내용이 실행은 되었지만 결과를 아직 반환하지 않응 객체
// then을 붙이면 결과를 반환
// Resolve(성공리턴값) -> then으로 연결
// Reject(실패리턴값) -> catch로 연결
// Finally 부분은 무조건 실행됨.

//Promise.resolve(성공리턴값) : 바로 resolve하는 프로미스
//Promise.reject(실패리턴값) : 바로 reject하는 프로미스
//Promise.all(배열) : 여러개의 프로미스를 동시에 실행 -> 하나라도 실패하면 catch
//Promise.allSettled() : 실패한 것만 추릴 수 있음.

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음.
promise
    .then((msg) => {
        // 성공(resolve)한 경우에 실행
        console.log(msg);
    })
    .catch((error) => {
        // 실패(reject)한 경우에 실행
        console.log(error);
    })

    // 8. Async/await
    // await이 then역할
   