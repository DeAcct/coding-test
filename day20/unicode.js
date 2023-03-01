// CCS - Coded Character Set
// 문자들을 Code Point에 대응시켜 만든 코드화된 문자들의 집합
// Code Point는 Character의 식별자가 된다.
// KS C 5601, ISO 10646, US-ASCII ...

// CES - Character Encoding Scheme
// CCS를 octet(8bit) 집합에 대응
// CCS와 CES는 일대일대응.
// 흔히 말하는 인코딩에 해당한다.
// 인코딩: Character를 시스템이 인식할 수 있는 값으로 변환
// 디코딩: 인코딩된 값을 다시 Character로 변환
// UTF-8, UTF-16, euc-kr, CP949 ...

// TES - Transfer Encoding Syntax
// 인코딩한 문자가 특정 프로토콜을 타고 전송되도록 변환하는 것
// 통신 프로토콜에 제약이 있을 수 있기 때문에 변환이 필요함.
// 예를 들어, URL에서 공백은 사용할 수 없기에 변환하는 등.
// URL Encoding(encodeURIComponent, encodeURI), BASE64 Encoding ...

// 유니코드
// 다양한 나라가 서로 다른 인코딩 방식을 사용하여 호환성 및 확장성에 문제를 일으켰다.
// 심지어 같은 문자여도 깨지는 문제가 있었다.
// 전 세계 문자를 컴퓨터에서 다룰 수 있도록 만든 표준 시스템
// 대부분의 문자를 포함하여 이모티콘도 포함되어 있다.
// 유니코드의 코드 포인트 범위는 0x0 ~ 0x10FFFF (1114112개의 문자)
//
// 일반적으로 쓰는 문자는 BMP(Basic Multilingual Plan)에 있다.
// 이외의 영역에는 자주 사용하지 않는 문자가 들어있다. 이모티콘도 BMP영역이 아닌 곳에 있다.
// 유니코드는 surrogate pair 방법을 이용해 2바이트보다 큰 문자를 표현한다.
// 서로게이트 영역에 있는 문자와 BMP외부에 있는 문자를 합쳐 표현.
//
// CES
// 코드포인트가 어떤 단위로 조합되어 인코딩되는지 정의함
// UTF-32, UTF-16, UTF-8(크기를 줄이기 위해 웹에서 사용)
// Big-Endian과 Little-Endian은 컴퓨터 메모리에 저장된 바이트의 순서를 말한다.
// Big-Endian은 큰 쪽에서 작은 쪽으로 저장된다.
// Little-Endian은 작은 쪽에서 큰 쪽으로 저장된다.
// BOM - Byte Order Mark
// 문서 제일 앞에 U+FEFF를 삽입하여 어플리케이션이 바이트 순서를 알 수 있게 해준다.

// 다음 이모지는 4바이트로 구성되어 있다.
const poo = "💩";
console.log(poo.charCodeAt(0).toString(16)); // -> d83d
console.log(poo.charCodeAt(1).toString(16)); // -> dca9

// \u를 통해 유니코드 문자를 표현할 수 있다.
const uPoo = "\uD83D\uDCA9";
console.log(uPoo); // -> 💩

// 둘은 같다.
console.log(poo === uPoo); // -> true

// 이모지는 문자 길이를 2 차지한다.
console.log(poo.length); // -> 2

// 유니코드에서 영어든 한글이든 2바이트로 읽힌다.
// 한글은 한 글자당 길이를 1 차지한다.
console.log("한글".length); //-> 2
