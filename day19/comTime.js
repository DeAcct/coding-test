// 시간?
//
// 물리량
// 시각과 시각 사이 간격
//
// 위치
// 경도, 국가 지역 등.
//
// 천문 현상
// 지구 자전속도의 불규칙성, 지구의 자전주기와 공전주기 등 천문 현상으로 인한 보정 필요
// 윤달, 윤년, 윤초
//
// 문화
// 음력, 양력...
//
// 역사
// 역사적 사건
//
// 사회
// 일광 시간 절약제 등 사회적 제도
//
// 고려할 점이 많다.
// UTC라는 표준을 정했다.
// 원자 시계와 윤초 보정을 기반으로 표준화된 시각
// UTC+0(영국)을 기준으로 환산한다.
// 표기법은 ISO 8601을 따른다.
// 2021-03-20T09:00:00.000Z > UTC+0 기준 2021년 3월 20일 9시
// 2021-03-20T09:00:00.000+09:00 > UTC+9 (한국 시간) 기준 2021년 3월 20일 9시
// T는 시간, Z는 무선 통신 용어인 Zulu Time을 뜻함.

// 컴퓨터가 시간을 표현하는 방법
// 하드웨어의 시스템 클럭을 이용한다.
// 특정 시간(Epoch)을 기준으로 시스템 클럭의 틱을 세는 것으로 구현된다.
// 이를 시스템 시간이라 부른다.
// 시스템 시간을 값으로 표현한 것을 타임스탬프라고 부른다.
// 타임스탬프는 운영체제마다 기준 시간과 단위가 다를 수 있다.
// 유닉스 계열 운영체제에서 시간을 표시하는 방법을 Unix Time이라 부른다.
//
// 시스템 클럭
// RTC - Real Time Clock이라는 모듈을 사용한다.
// RTC는 메인보드에 붙어있어 전원을 끄더라도 계속 동작한다.
// RTC는 카운터 회로를 통해 클럭을 발생시킨다.
// 카운터 회로의 핵심 부품인 결정 진동자가 만드는 정확한 주파수를 이용한다.
// 보통 1클럭에 32.768kHz가 발생한다. -> 계산의 편의성
//
// Unix Time
// 1970년 1월 1일 0시 0분 0초가 기준 시간. -> 이유 없음;;
// 그 이전 시간은 음수로 표현.
// 초 단위소 시간이 증가한다.
//
// 그래서 어떻게 알아냄?
// 시스템 시간을 네트워크 타임 프로토콜(NTP)를 통해 동기화할 수 있다.
// NTP서버(Tree 구조로 분산됨)에 네트워크 요청을 하여 현재 시간을 받을 수 있다.
// NTP서버는 계층으로 이루어져 있으며 그 계층을 Stratum이라 부른다.
// 최상위 계층을 PRC(Primary Reference Clock)라 부른다.

// 국가, 지역, 일광 시간 절약제 등 각종 정보는 Time Zone 데이터에 기록된다.
// 현실 세계에 이벤트가 발생되면 업데이트 된다.
// 표기법은 '대륙/도시' 형태로 되어 있다. 이 값을 ZoneID라고 부른다.

// 서비스에 사용되는 시간은 용도에 맞춰서 기록할 필요가 있다.
//
// 시간대와 지역, 문화, 사회를 고려하지 않고 순수하게 시간을 기록해야 하는 경우가 있다.
// 생일, 기업 설립일, 기념일, 국경일 등.
//
// UTC - 역사, 사회 문화에 대한 맥락 없이 사건이 발생한 시각만을 고려할 때 사용.
// 로깅, 감사, 시계열 데이터 등
//
// Time Zone - 역사, 사회, 문화를 고려하여 사용자가 이용한 시간을 정확히 알아야 할 때.
// UI에 표시되는 시간을 사용자 기준으로 보여줄 때 사용.
// 결제 시각, 푸시 알림 시간, UI 시각 표시, 캘린더

// JS에서는 Date 객체를 사용할 수 있음.
// 관련 라이브러리로 moment.js(더 이상 관리 안됨), date-fns, luxon 등.
