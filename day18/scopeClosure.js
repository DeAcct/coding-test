// 스코프(유효 범위)
// 변수가 어느 범위까지 참조되는 지를 뜻한다.

const a = 5; // 전역 스코프
{
  const b = 3; // 지역 스코프
  console.log(a, b); // -> 5 3
}
// console.log(a,b); -> 오류

// var는 함수 수준의 스코프를 사용하고, const와 let은 블록 수준의 스코프를 사용한다.
// 이를 고려하지 않을 경우 예상치 못한 오류가 생길 수 있다.

// 클로저
// 함수가 선언된 환경의 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 기억한 스코프에 접근할 수 있도록 만드는 문법
function makeGreeting(name) {
  const greeting = "Hello, "; // 지역 스코프라서 원래는 함수가 종료되면 메모리에서 사라짐
  return function () {
    console.log(greeting + name);
  };
}

const theWorld = makeGreeting("Dio Brando");
const shiranai = makeGreeting("Ikari Shinji");

// greeting 변수를 참조하고 있어 메모리에서 사라지지 않는다.
theWorld();
shiranai();

// 은닉화
// 클로저를 이용하여 내부 변수와 함수를 숨길 수 있다.
function Counter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    get value() {
      return privateCounter;
    },
  };
}
const counter = Counter();
console.log(counter.value);
counter.increment();
counter.increment();
console.log(counter.value);
counter.decrement();
console.log(counter.value);

// 알기 힘든 버그를 잘 수정하기 위해서 클로저를 알아야.

function counting() {
  let i = 0;
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i); //전부 콜백 큐를 거쳐 실행될 때가 됐을 때는 이미 변수가 5가 된 뒤다.
    }, i * 100);
  }
}
//counting(); // -> 5 5 5 5 5

// 0 1 2 3 4 가 나오게 하려면?
// 즉시 실행 함수 이용
function imCounting() {
  let i = 0;
  for (i = 0; i < 5; i++) {
    ((number) => {
      setTimeout(() => {
        console.log(number);
      }, number * 100);
    })(i);
  }
}
// imCounting(); // -> 0 1 2 3 4
//
// let 이용
// 블록 수준 스코프이기 때문에 매 루프마다 클로저가 생성된다.
function letCounting() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  }
}
letCounting(); // -> 0 1 2 3 4
