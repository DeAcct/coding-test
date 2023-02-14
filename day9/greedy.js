// 자판기 동전 반환, 마시멜로 실험.
// -> 그리디
// 매 선택에서 지금 이 순간 가장 최적인 답을 선택하는 알고리즘
// 최적해를 보장해주진 않는다.

// 최적해를 구하는 알고리즘보다 빠른 경우가 많다. 보통 선형 시간만에 끝난다.
// 크루스칼, 다익스트라 알고리즘 등에 사용된다.
// 직관적인 문제 풀이에 적합하다.

// 동전을 반환?
// 편의를 위해 가장 큰 단위로 거슬러주고자 할때.
// 큰 단위의 돈부터 반환

// 개념이다. 구현 방법이 따로 정해져있지 않다.

/**
 * k개의 수를 제거했을 때, 가장 큰 수를 구해라.
 * @param {string} number
 * @param {number} k
 */
function solution(number, k) {
  // 큰 값이 나오면, 이전 값 중 더 작은 값은 전부 다 삭제.
  const stack = [];
  let count = 0;
  for (const item of number) {
    // 삭제할 만큼(k),
    // 현재 숫자가 스택의 맨 위에 존재하는 것보다 클 경우
    while (count < k && stack[stack.length - 1] < item) {
      // 스택의 pop을 실행한다.
      stack.pop();
      // 삭제한 숫자의 개수를 올린다.
      count++;
    }
    // 스택에 쌓는다.
    stack.push(item);
  }

  // 만약, 숫자가 내림차순으로 정렬된 꼴인 경우, count가 올라가지 않는다.
  // 예시로, 매개변수 number가 "9876543"
  // 삭제할 수(k) 만큼 삭제해주자.
  for (let i = count; i < k; i++) {
    stack.pop();
  }

  return stack.join("");
}
