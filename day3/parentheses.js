// 올바른 괄호인지 판별하는 문제

/**
 * 문제 출처
 * @link https://school.programmers.co.kr/learn/courses/13213/lessons/91074
 */

/**
 * 직접 배열에 push, pop하는 방법.
 * @param {Array<'('|')'>} s
 * @returns 모든 괄호가 닫혔을 경우 true, 아니면 false
 */
function solution1(s) {
  // Stack
  // 여는 괄호가 나오면 push, 닫는 괄호가 나오면 pop
  const stack = [];

  for (const c of s) {
    if (c === "(") {
      // 여는 괄호가 나왔으므로 push를 수행한다.
      stack.push(c);
    } else {
      if (stack.length === 0) {
        // 이미 스택에 아무것도 없는데 닫는 괄호가 나왔으므로 올바른 괄호가 아니다
        return false;
      }
      // 닫는 괄호가 나왔고, 스택이 비어있지 않았으므로 pop을 수행한다.
      stack.pop();
    }
  }
  return stack.length === 0;
}

/**
 * 스택에 남은 요소의 수를 이용하는 방법. 메모리를 적게 사용하는 점이 좋다.
 * @param {Array<'('|')'>} s
 * @returns 모든 괄호가 닫혔을 경우 true, 아니면 false
 */
function solution2(s) {
  let count = 0;
  for (const c of s) {
    if (c === "(") {
      // 여는 괄호가 나왔으므로 count에 1을 더한다.
      count++;
    } else {
      if (count === 0) {
        // 이미 스택에 아무것도 없는데 닫는 괄호가 나왔으므로 올바른 괄호가 아니다
        return false;
      }
      // 닫는 괄호가 나왔고, 스택이 비어있지 않았으므로 count에서 1을 뺀다.
      count--;
    }
  }
  return count === 0;
}
