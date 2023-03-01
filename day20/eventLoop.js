// JS의 Call Stack은 하나만 존재한다.

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

setTimeout(() => {
  //1
  bar();
}, 100);

foo();

setTimeout(() => {
  //2
  console.log("baz");
}, 100);

// 이벤트 루프 설명.
// 전역 스코프 내에서 실행된다.
// 1. //1 setTimeout함수가 Call Stack에 들어간다.
// 2. setTimeout API가 실행된다. 바로 종료되어 Call Stack에서 사라진다.
// 3. foo 함수가 Call Stack에 들어간다.
// 4. "foo"를 출력하는 console.log()가 Call Stack에 들어간다.
// 5. "foo"를 출력한다. Call Stack에서 사라진다.
// 6. foo 함수가 Call Stack에서 사라진다.
// 7. //2 setTimeout함수가 Call Stack에 들어간다.
// 8. setTimeout API가 실행된다. 바로 종료되어 Call Stack에서 사라진다.
// 9. //1과 //2의 콜백함수가 Task Queue에 들어간다.
// Call Stack이 비어 있을 때만 Task Queue에서 옮길 수 있다.
// 10. //1의 콜백함수가 Call Stack에 들어간다.
// 11. bar 함수가 Call Stack에 들어간다.
// 12. "bar"를 출력하는 console.log()가 Call Stack에 들어간다.
// 13. "bar"를 출력한다. Call Stack에서 사라진다.
// 14. bar 함수가 Call Stack에서 사라진다.
// 15. //1의 콜백함수가 Call Stack에서 사라진다.
// 16. //2의 콜백함수가 Call Stack에 들어간다.
// 17. "baz"를 출력하는 console.log()가 Call Stack에 들어간다.
// 18. "baz"를 출력한다. Call Stack에서 사라진다.
// 19. //2의 콜백함수가 Call Stack에서 사라진다.
