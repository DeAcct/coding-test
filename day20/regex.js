// 정규표현식
// 전화번호, URL, 이메일 주소를 어떻게 찾을까?
// 패턴을 이용하여 문자 검색(search) - 문자 대체(replace) - 문자 추출(extract)
// 성능은 느리지만 매우 편하다.

// [시작 기호 /][패턴][종료 기호 /][플래그]

// 예시: 휴대폰 번호를 찾아보자.
// 정규표현식은 패턴을 찾는 것이 가장 중요.
// 휴대폰 번호 패턴은? 010-1234-5678, 018-123-4567, 01X-XXX(X)-XXXX
// 국가번호, 안심번호 등 예외 케이스는 제외
// 세 자리 숫자, 하이픈, 셋 또는 네 자리 숫자, 하이픈, 네 자리 숫자 패턴으로 이루어져 있다.
/\d{3}-\d{3,4}-\d{4}/;

// 이메일 주소에서 중간 문자열만 뽑고 싶다면?
// naver, cobalt등 중간 문자열.
// 문자열@문자열.문자열 패턴으로 이루어짐.
// 캡처를 이용하면 원하는 부분만 뽑을 수 있다.
/.+@(.+)\..+/;
// 캡처는 여러 번 할 수도 있다.
/(.+)@(.+)\..+/;

//https://rubular.com/
//https://regexone.com/
//https://alf.nu/RegexGolf?world=regex&level=r00

// RegExp객체로 생성
const regExp1 = new RegExp(/^\d+/);

// 플래그 포함
const regExp2 = new RegExp(/^\d+/, "gi");

// 리터럴 방식
// /표현식/
const regex1 = /^\d+/;

// /표현식/플래그
const regex2 = /^\d+/gi;

// RegExp.prototype.test()
// 입력받은 문자열에 찾는 패턴이 있는지 찾은 후 있다면 true, 없다면 false
const message1 = "이 무직 니트! 맨날 이상한 게임만 해!";
const message2 = "안녕? 010-1234-5678로 연락줘!";

const regExp = /\d{3}-\d{3,4}-\d{4}/;
console.log(regExp.test(message1));
console.log(regExp.test(message2));

// RegExp.prototype.exec()
// 입력받은 문자열에 찾는 패턴이 있는지 찾은 후 일치한 패턴 정보를 반환하고 없으면 null을 반환
// 문자 추출에 해당.
console.log(regExp.exec(message1));
console.log(regExp.exec(message2));

// String.prototype.match()
// 정규표현식 객체를 파라미터로 받아 패턴이 있는지 찾은 후 일치한 패턴 정보를 반환하고 없으면 null을 반환한다.
// 정규표현식 객체의 exec함수와 같다.
// 문자 추출에 해당.
// 무조건 처음 매칭된 것을 반환한다.
console.log(message1.match(regExp));
console.log(message2.match(regExp));
// 모두 탐색하려면 matchAll을 사용 가능
const message3 = "안녕? 010-1234-5678 말고 010-9876-5432로 전화줘";
console.log([...message3.matchAll(/\d{3}-\d{3,4}-\d{4}/g)]);
// 캡처가 적용된 정규표현식을 이용하면 1번 인덱스부터 순차적으로 캡처 결과가 들어간다.
console.log(message3.match(/(\d{3})-(\d{3,4})-(\d{4})/));

// String.prototype.replace()
// 정규표현식 객체를 파라미터로 받아 패턴이 있는지 찾은 후 일치한 패턴 정보를 원하는 문자열로 바꿀 수 있다.
console.log(message1.replace(regExp, "***-****-****"));
console.log(message3.replace(regExp, "***-****-****"));
// 플래그로 g를 붙이면 모두 변경된다.
console.log(message3.replace(/\d{3}-\d{3,4}-\d{4}/g, "***-****-****"));

// String.prototype.search()
// 정규표현식 객체를 파라미터로 받아 패턴이 있는지 찾은 후 일치한 패턴 정보의 위치를 반환한다.
// 문자 검색에 해당
// 무조건 처음 매칭된 것을 반환
console.log(message1.search(regExp));
console.log(message2.search(regExp));
console.log(message3.search(regExp));

// Run-Length encoding
// 매우 간단한 비손실 압축 기법
// AAAAAABBBDFFFFFFFKK -> 6A3B1D7F2K
/(.)\1*/; //첫 번째 캡처를 이용하겠다. 그 문자가 몇 개 있는지 확인한다.

const raw = "AAAAAABBBDFFFFFFFKK";
const compressed = "6A3B1D7F2K";

const runLength = /(.)\1*/g;
const result = raw
  .match(runLength)
  .reduce((res, c) => (res += `${c.length}${c.slice(0, 1)}`), "");
console.log(raw.match(runLength));
console.log(result);
console.log(result === compressed);
