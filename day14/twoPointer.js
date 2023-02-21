// 일차원 배열에 두 개의 포인터를 두고 조작하는 알고리즘.
// 연속적인 구간에 대한 계산을 할 때 많이 사용된다.

// 구간합 문제에 활용 가능
// 주어진 숫자열에서 합이 10인 연속된 구간을 구해라 등
// 두 번째 포인터를 이동한다.
// 목표값을 넘어서거나 목표값을 찾은 경우 첫 번째 포인터를 이동

// 백트래킹, 완전 탐색을 하려다가 시간 제한에 걸리는 경우 사용한다.

/**
 * 모든 종류의 보석을 살 수 있는 가장 짧은 구간을 구하는 문제입니다.
 * @param {Array<string>} gems 보석진열대 위에 놓인 보석의 이름이 담긴 배열입니다.
 * @returns {[number, number]} 가장 짧은 구간의 시작 인덱스와 끝 인덱스가 차례로 담긴 배열이 반환됩니다.
 */
function solution(gems) {
  let answer = [0, gems.length];
  let start = 0;
  let end = 0;

  const to = new Set(gems).size;
  const collect = new Map();
  collect.set(gems[0], 1);

  // 두 포인터가 끝에 달하기 전까지 실행
  while (start < gems.length && end < gems.length) {
    // 선택된 보석 종류수와 모든 보석의 종류수가 같다면
    if (collect.size === to) {
      // 더 짧은 구간인 경우
      if (end - start < answer[1] - answer[0]) {
        // 정답 갱신
        answer = [start + 1, end + 1];
      }

      // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.
      collect.set(gems[start], collect.get(gems[start]) - 1);
      // 보석의 개수가 0이 되었다면
      if (collect.get(gems[start]) === 0) {
        // 목록에서 제거한다.
        collect.delete(gems[start]);
      }
      // 첫 번째 포인터를 증가시킨다.
      start++;
    }
    // 선택된 보석 종류수와 모든 보석의 종류수가 같지 않다면
    else {
      // 두 번째 포인터를 증가시키고
      end++;
      // 보석을 추가한다.
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0));
    }
  }

  return answer;
}
