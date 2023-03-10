// 암호화
// 평문을 해독할 수 없는 암호문으로 변환하는 것.
// 단방향(해싱)과 양방향 암호화가 존재한다.

// 단방향 암호화
// 해시 알고리즘을 이용하여 평문을 복호화 할 수 없는 형태로 암호화한다.
// MD5, SHA 알고리즘 등.
// 사용자 비밀번호 등을 저장할 때 자주 사용된다.
// MD5, SHA-1, SHA-0은 해시 충돌이 발생할 수 있는 취약점이 있어 사용을 권장하지 않는다.
// 복호화가 불가능하지만 Rainbow Table을 이용해 원문을 알아낼 수 있다.
// 평문과 해시 함수로 만든 문자열을 모두 저장시켜 놓은 표를 의미한다.
// 불의의 사고로 암호화된 데이터를 탈취당하더라도 원문을 알아낼 수 없도록 조치를 해야한다.
// Salt, Key Stretching을 이용하여 해결할 수 있다.
//
// Salt는 평문에 문자열을 추가하여 암호화하는 기법이다.
// Salt는 128bit 이상으로 만들 것을 권장한다.
// 사용자마다 다른 Salt를 사용하게 하면 더 안전하다.
// 말 그대로 소금 뿌리기.
//
// Key Stretching은 해시를 여러 번 반복하여 원문을 알기 힘들게 만드는 방법이다.
// 일반적인 시스템에서 0.2초 이상 반복되면 안전하다고 한다.
//
// 직접 구현하는 것보다 이미 검증된 알고리즘을 사용하는 것이 안전하다.
// PBKDF2 - 미국표준기술연구소에서 승인된 알고리즘.
// bcrypt - 비밀번호 저장을 목적으로 만들어짐.

// 양방향 암호화
// 평문을 복호화할 수 있도록 암호화하는 방법
// 대칭키와 비대칭키 알고리즘으로 나뉜다.
//
// 대칭키 암호 알고리즘은 대표적으로 AES(Advanced Encryption Standard)가 있다.
// 같은 키를 이용하여 암호화, 복호화가 가능
//
// 비대칭키 암호 알고리즘은 대표적으로 RES(Rivest, Shamir and Adleman)가 있다.
// 공개키와 개인키 두 가지 키가 존재한다.
// 소인수분해를 기반으로 만들어진 알고리즘이다.

// JS에서는 crypto-js 라이브러리를 사용할 수 있다.
// bcrypt는 구현되어 있지 않아 다른 라이브러리를 사용해야 한다.
