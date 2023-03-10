// 정렬
// 요소들을 일정한 순서대로 열거하는 알고리즘
// 정렬 기준은 사용자가 정할 수 있다.
// 비교식과 분산식으로 나뉜다.
// 대부분의 언어가 빌트인으로 제공.
// 삽입, 선택, 버블, 머지, 힙, 퀵 등 다양한 정렬방식 존재

/**
 * @link https://www.toptal.com/developers/sorting-algorithms
 */

// 비교식 정렬
//
// 버블 정렬
// 서로 인접한 두 요소를 검사하여 정렬
// 시간복잡도는 O(n^2)
//
// 선택 정렬
// 선택한 요소와 가장 우선순위가 높은 요소를 교환하는 정렬
// 시간복잡도는 O(n^2)
//
// 삽입 정렬
// 선택한 요소를 삽입할 수 있는 위치를 찾아 삽입하는 방식
// 시간복잡도는 O(n^2)
// 두 번째 자료부터
// 두 번째 자료는 첫 번째 자료와 비교하여 밀어내거나 뒤에 삽입
// 세 번째 자료는 첫 번째, 두 번째 자료와 비교하여 밀어내거나 뒤에 삽입
// 네 번째 자료는 첫 번째, 두 번째, 세 번째 자료와 비교하여 밀어내거나 뒤에 삽입
// 다섯 번째 자료는 첫 번째, 두 번째, 세 번째, 네 번째 자료와 비교하여 밀어내거나 뒤에 삽입
// ...

// 분할 정복 - 문제를 작은 2개의 문제로 분리, 더 이상 분리가 불가능할 때 처리한 후 합치는 전략

// 분산식 정렬
//
// 합병 정렬
// 분할 정복 알고리즘을 이용한 최선과 최악이 같은 안정적인 정렬 알고리즘
// 시간복잡도는 O(n log n), 밑은 2
// n개의 요소가 있다면 n개로 나눈다. (Divide)
// 요소를 두 개씩 비교하여 우선순위가 높은 요소를 왼쪽에 두고 합친다. (Conquer)
//
// 퀵 정렬
// 분할 정복 알고리즘을 이용한 매우 빠르지만 최악의 경우가 존재하는 불안정 정렬
// 시간복잡도는 O(n log n), 밑은 2
// 리스트 안의 한 요소를 피벗이라 정한다.
// 피벗보다 우선순위가 큰 요소를 왼쪽으로, 작은 요소를 오른쪽으로 한다.
// 분할이 더 이상 불가능할 때까지 위 과정을 반복한다.
// 합친다.

// 자바스크립트에서
const array = [5, 9, 10, 3, 8, 3, 2];

// 그냥 정렬하면 ASCII 문자 순서로 정렬되어
// 숫자를 정렬할 때는 적합하지 않다.
array.sort();
console.log(array);

// 오름차순 정렬
array.sort((a, b) => a - b);
console.log(array);

// 내림차순 정렬
array.sort((a, b) => b - a);
console.log(array);
