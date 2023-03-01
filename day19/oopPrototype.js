// 객체
// 현실에 있는 것을 추상화한 것이다.

// 추상
// 사물이 지니고 있는 여러 측면 중 특정한 부분만 보는 것이다.

// 객체지향
// 객체 위조로 설계하고 프로그래밍하는 패러다임
// 추상화의 최소 단위는 객체.
// 각각의 객체는 메시지를 주고받을 수 있다.

// 객체지향은 패러다임일 뿐 언어와는 상관이 없다.
// 언어는 지향하는 것을 조금 더 편하게 구현할 수 있게 도와줄 뿐.
// 클래스가 없는 JS, Golang, Clang으로도 객체지향 프로그래밍을 할 수 있다.
// 자바스크립트는 프로토타입을 통해 객체지향을 표현한다.

// 객체지향 만능론? no
// 만들어야하는 프로그램에 따라 절차지향이 더 적합할 수 있음
// 비교적 간단한 프로그램일 수록 절차지향이 더 직관적이고 쉽다.
// 객체지향은 객체간 통신을 하기 때문에 흐름이 더 직관적이어서 더 복잡한 프로그램에 적합하다.

// 자바스크립트의 객체
// 클래스 기반 언어처럼 속성(attribute)와 행위(method)를 정의할 수 있다.

// 객체 리터럴로 생성
const person1 = {
  name: "오야마 마히로",
  company: "무직 백수",
  move(destination) {
    console.log(`${destination}로 이동할게!`);
  },
};

console.log(person1.name);
console.log(person1.company);
person1.move("중학교");

// Object 생성자 함수로 생성
const person2 = new Object();
person2.name = "오야마 미하리";
person2.company = "도쿄대학 연구실";
person2.move = (destination) => {
  console.log(`${destination}으로 이동!`);
};

// 생성자 함수
function Person(name, company, move) {
  this.name = name;
  this.company = company;
  this.move = (destination) => {
    console.log(`${destination}으로 이동!`);
  };
}

// 프로토타입
// 기존의 객체를 복사하여 새로운 객체를 생성하는 방식

// 기존에는 객체를 생성할 때마다 메서드가 따로 정의되어 메모리가 낭비되는 문제가 있었다.
function Person2(name, company, move) {
  this.name = name;
  this.company = company;
  this.getName = () => {
    return this.name;
  };
  this.setName = (name) => {
    this.name = name;
  };
}

// 내부적으로 __proto__라는 객체를 가지게 되는데, 상위 객체를 참조한다.
function Person3(name, job) {
  this.name = name;
  this.job = job;

  Person.prototype.getName = () => {
    return this.name;
  };
  Person.prototype.setName = (name) => {
    this.name = name;
  };
}

const mahiro = new Person("오야마 마히로", "무직백수");
const mihari = new Person("오야마 미하리", "대학 연구원");
console.log(mahiro);
console.log(mihari);
console.log(Person.constructor);
console.log(Person.__proto__);
console.log(mahiro.constructor);
console.log(mahiro.__proto__);

// 상속
// 부모 객체를 이용하여 프로토타입 함수 정의하기
function PS(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name || "마히로";
};
function Japanease(name) {
  Person.apply(this, arguments);
}
Japanease.prototype = new Person();

const m2 = new Person("마히로");
const m3 = new Japanease("미하리");
console.log(m2.getName());
console.log(m3.getName());

// 기존 객체 재활용
const lee = {
  name: "이현성",
  getName() {
    return this.name;
  },
};

const kim = Object.create(lee);
kim.name = "김선호";

console.log(lee.getName());
console.log(kim.getName());
console.log(lee.__proto__);
console.log(kim.__proto__);
