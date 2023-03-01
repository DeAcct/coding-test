// 함수형 프로그래밍
// 함수형 패러다임
// 데이터에 함수를 연결한 파이프라인 방식

// 객체지향 추상화의 최소 단위가 객체인 것처럼 함수형은 함수가 최소 단위다.
// 함수 단위로 나눠지므로 재사용성이 높다.
// 불변성을 지향하기에 동작을 예측하기 쉽고 사이드 이펙트를 방지한다. -> 동시성 문제 해결
// 객체지향은 제어 흐름의 간접적인 전환에 부과되는 규율
// 함수형은 변수 할당에 부과되는 규율.

// 객체지향
class StringNumber {
  /**
   *
   * @param {string} value 숫자로 이루어진 문자열을 받습니다.
   */
  constructor(value) {
    this.string = value;
  }
  /**
   *
   * @returns {number} 숫자로 이루어진 문자열의 자리수의 합을 구합니다.
   */
  get sum() {
    let sum = 0;
    for (let i = 0; i < this.string.length; i++) {
      sum += +this.string[i];
    }
    return sum;
  }
}
class Printer {
  log(value) {
    console.log(value);
  }
}
const stringNumber = "12345";
const stringNumberObj = new StringNumber(stringNumber);
const printer = new Printer();
printer.log(stringNumberObj.sum);

// 절차지향
let sum = 0;
for (let i = 0; i < stringNumber.length; i++) {
  sum += +stringNumber[i];
}
console.log(sum);

// 함수형
console.log(
  stringNumber
    .split("")
    .map((x) => +x)
    .reduce((sum, num) => (sum += num), 0)
);

// 함수형 프로그래밍의 장점
// 상태가 없기 때문에 사이드 이펙트가 없다.
// 재사용성이 높다.
// 코드가 짧고 간결하다.

// 선언형 프로그래밍
// 기존 명령형 프로그래밍은 문제를 어떻게 해결해야 하는지 컴퓨터에게 명령을 내리는 방법
// 선언형 프로그래밍은 무엇을 해결해야 할지에 집중하고 해결 방법은 컴퓨터에게 위임하는 방법이다.

// 그냥 함수형, 객체지향 둘 다 쓸 수 있으니 자바스크립트에서는 적당히 섞어 쓰자.
