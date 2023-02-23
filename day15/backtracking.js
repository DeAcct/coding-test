// 모든 경우의 수를 탐색하는 알고리즘
// DFS, BFS를 이용할 수 있다.
// 효율을 위해 탐색하지 않아도 되는 곳을 미리 막는 것을 가지치기라고 한다.

// 자바스크립트는 재귀 효율이 나쁘기 때문에 DFS를 이용할 경우 스택을 이용하는 것이 좋다.
// 탐색에서 순환이 발생할 수 있다면 BFS를 이용하는 것이 편하다.

// 어떻게 작성?
// 우선 모든 경우의 수를 찾을 수 있도록 코딩
// 이후 문제에서 특정한 조건을 만족하는 것만 탐색하고 나머지는 탐색하지 않도록 조건문을 작성한다.
// 절대로 답이 될 수 없는 것은 탐색을 종료한다.

/**
 * 퀸을 둘 수 있는 곳인지 체크합니다.
 * @param {Array<number>} queen
 * @param {number} row
 */
function check(queen, row) {
  // 이전까지 두었던 퀸의 위치를 확인한다.
  for (let i = 0; i < row; i++) {
    // 행의 위치와 대각선의 위치를 체크.
    // 행의 차와 열의 차가 같다면 대각선에 있다는 것.
    // 같은 원소가 있다면 같은 열에 있다는 것.
    // 한 인덱스에 여러 원소가 있을 수 없으므로 행에는 단 하나의 퀸만 들어가게 된다.
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }
  return true;
}

/**
 * 퀸을 두는 방법을 탐색합니다.
 * @param {Array<number>} queen
 * @param {number} row
 */
function search(queen, row) {
  const n = queen.length;
  let count = 0;

  // 체스판 끝에 도달했다면 재귀를 탈출한다.
  if (n === row) {
    return 1;
  }

  // 0 ~ n
  for (let col = 0; col < n; col++) {
    // 우선 퀸을 둔다.
    queen[row] = col;
    // 퀸을 둘 수 있다면
    if (check(queen, row)) {
      // 다음 행으로 이동한다.
      count += search(queen, row + 1);
    }
  }

  return count;
}

/**
 *
 * @param {number} n 체스판 한 변의 길이
 * @returns
 */
function solution(n) {
  // n개 만큼의 배열을 초기화한다. 0번 행부터 시작한다.
  return search(
    Array.from({ length: n }, () => 0),
    0
  );
}
