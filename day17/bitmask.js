// 비트 연산자
// 직접 비트를 조작하는 연산자

// 비트 마스크
// 이진법 성질을 이용하여 문제를 해결하는 방법
// 참, 거짓만 가진 배열을 이진수로 표현할 수도 있다.
// 굉장히 빠르고 메모리 사용량이 적다.
// 그리디, 동적 계획법 등 다른 알고리즘과 함께 사용할 수 있다.

let bit;
// false로 초기화하기
bit = 0;

// N개 만큼 true로 초기화하기
const N = 2;
bit = (1 << N) - 1;
console.log(bit.toString(2));

// i번째 요소를 true로 바꾸기
const i = 3;
bit |= 1 << i;
console.log(bit.toString(2));

// j번째 요소를 false로 바꾸기
const j = 4;
bit &= ~(1 << j);
console.log(bit.toString(2));

// k번째 요소 토글하기
const k = 5;
bit ^= 1 << k;
console.log(bit.toString(2));

// l번째 요소 true인지 체크
const l = 6;
bit & (1 << l);
console.log(bit.toString(2));

// 두 집합끼리 연산
// A|B 합집합
// A&B 교집합
// A&(~B) A에서 B를 뺀 차집합
// A^B 합집합에서 교집합 제외(XOR)

// 정수형 범위를 넘지 않도록 주의
// 연산자 우선 순위에 유의
