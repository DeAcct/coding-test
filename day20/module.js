// 모듈
// 일반적인 웹사이트는 여러 개의 JS파일로 이루어져 있다.
// 스크립트간 의존도를 파악할 수 있고, 실행 순서를 쉽게 제어할 수 있다.

// 모듈은 설계 시전에 의미있는 요소이며 컴포넌트는 런타임 시점에 의미있는 요소다.

// 자바스크립트의 모듈은 런타임 시점에 실행된다.
// 제대로된 모듈 역할을 하기 위해 디렉토리 단위를 모듈 개념에 가깝게 사용하는 경우가 많다.

export function hello(name) {
  alert(`hello, ${name}`);
  alert(this);
}

// 모듈은 항상 엄격 모드로 실행된다.
// 예를 들어 var, let, const 없이 변수를 선언할 경우
// 엄격 모드가 아니면 전역 스코프에 저장.
// 엄격 모드일 경우 오류가 발생.
// 일반 스크립트는 변수 선언시 전역 스코프에 저장.
// 모듈은 모듈 레벨의 스코프가 있다.
// 모듈은 단 한 번만 평가된다. 여러 번 import되어도 한 번만 실행된다.
// 모듈은 자동으로 지연 실행된다. DOM이 모두 만들어진 후 실행된다. 일반 스크립트에 defer 속성을 적용한 것과 같다.