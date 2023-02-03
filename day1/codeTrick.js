//구조분해 할당을 이용하여 swap을 쉽게

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

//배열 생성으로 루프 제거
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
const functionalSum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);

//배열 내 같은 요소 제거 - Set자료형 이용
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

//스프레드 연산자로 객체 병합하기
const person = {
  name: "Lee HyeonSeong",
  familyName: "Lee",
  givenName: "HyeonSeong",
};

const company = {
  name: "studio Bind",
  address: "Seoul",
};

const leeHyeonSeong = { ...person, ...company };
console.log(leeHyeonSeong);

// &&와 ||의 활용

// ||는 기본값을 넣고 싶을 때 사용할 수 있다.
// 앞이 falsy한 값인 경우 뒤를 할당한다.
const name = participantName || "Guest";

// &&는 앞이 truthy한 값인 경우 뒤의 값을, 앞이 falsy한 값인 경우 앞을 할당한다.
function func() {}
flag && func();

// 이를 객체 병합에도 사용할 수 있다.
const makeCompany = (showAddress) => {
  return {
    name: "studio Bind.",
    ...(showAddress && { address: "Seoul" }),
  };
};

console.log(makeCompany(false));
console.log(makeCompany(true));

// 구조분해할당을 통해 필요한 것만 꺼내서 쓰자.
const human = {
  name: "Lee HyeonSeong",
  familyName: "Lee",
  givenName: "HyeonSeong",
  company: "studio Bind.",
  address: "Yong-in",
};

const { familyName, givenName } = person;

//변수 이름으로 객체 키 생략하기.
const namae = "Lee Sun-Hyoup";
const whereToWork = "Cobalt";
const Japanease = {
  namae,
  company,
};
console.log(Japanease);

//함수에 객체를 넘길 때 필요한 것만 꺼내서 쓰기
const changUp = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = changUp({
  name: "studio Bind.",
  address: "Osaka",
  serviceName: "Present",
});

//객체 키를 동적으로 생성하기
const nameKey = "name";
const emailKey = "email";
const active = {
  [nameKey]: "Lee HyeonSeong",
  [emailKey]: "eee@example.com",
};
console.log(active);

//!! 연산자로 boolean 값으로 바꾸기
function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log("잘못된 값");
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check("Good"); // Good
check(""); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
