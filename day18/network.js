// 브라우저에 URL을 입력하면?
//
// 1. URL을 해석한다
// 스키마(프로토콜)://유저:패스워드@호스트:포트/경로
// 예시
// http://example.com:8761/members
// ftp://admin:1q2w3e4r@example.com/image.png
// mailto:shinji@naver.com
// 슬래시 두 개는 사실 의미가 없다. 정말이다.
// http:programmers.co.kr
//
// 2. DNS를 조회한다.
// Domain Name System
// 도메인과 IP주소를 서로 변환해준다.
// DNS로 요청을 보내기 전에 먼저 브라우저 캐시와 hosts파일을 참조한다.
// url 해석 -> 브라우저 캐시 확인 -> hosts 파일 참조 -> dns 호출 -> Root Server -> TLD Server -> Authoritative Server -> IP 변환
// DNS는 보통 통신사(ISP, Internet Service Provider)의 것을 사용한다.
// DNS를 운영하는 서버를 NS(NameServer)라고 부른다.
// present.do, www.present.do, gateway.dev.present.do 전부 도메인은 present.do
// 각각 호스트라 부른다.
//
// 3. 해당 IP가 할당된 서버가 존재하는 대역으로 이동
// 네트워크 장비 라우터를 통해 이동한다.
//
// 4. ARP를 이용하여 MAC주소 변환을 한다.
// Address Resolution Protocol
// 논리 주소인 IP주소를 물리 주소인 MAC주소로 변환하는 프로토콜
// 실제 통신을 위해 변하지 않는 고유한 MAC 주소가 필요하다.
// 네트워크 내에 ARP를 Broadcasting하면 해당 IP주소를 가지고 있는 기기가 MAC 주소를 반환한다.
// 왜 논리 주소와 물리 주소가 따로 존재하는 걸까. 사용처가 다르다.
//
// 경복궁의 주소는 서울 종로구 세종로 1-91. 이것만 보고 어디있는지 알 수 없다. (논리 주소)
// 경복궁은 북위 37도 34분 43초 동경 126도 58분 38초에 있다. 어디 있는지 알 수 있다. (MAC 주소)
// 경복궁으로 택배를 보낸다면 서울 -> 종로구 -> 세종로를 탐색. 서울의 진짜 위치 -> 종로구의 진짜 위치 -> 세종로의 진짜 위치 (ARP. 대역을 좁혀나감.)
// 택배가 중간에 거쳐가는 물류센터. 옥천 Hub, 군포 Hub 등을 라우터에 비유
//
// 5. TCP 통신을 통해 Socket을 연다. -> 택배로 비유하면, 초인종 누르기
// 네트워크를 통해 해당 기기로 패킷을 전달한다.
// 3 way handshake로 연결을 요청한다.
// 요청이 수락되면 기기는 패킷을 받아 처리한다.
//
// 6. 서버가 응답을 반환한다.
// HTTP 프로토콜로 들어온 패킷을 읽고 처리한다.
// 요청에 따른 적절한 응답 값을 반환한다.
//
// 7. 브라우저가 렌더링한다.
// HTML을 읽어 DOM Tree를 구축한다.
// 만들어진 DOM Tree를 이용해 화면에 그린다.
// 스크립트를 실행한다.
