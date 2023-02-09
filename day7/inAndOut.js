// 숫자가 너무 크기 때문에...
// 일단 사람이 너무 많아서 순차 탐색을 하면 메모리가 터져나갈 것.
// 최소 몇 분에 모든 심사가 끝나는가를 구하자.
// -> 결정 문제 = 이진 탐색 = 파라메트릭 서치

// 최소 1분에서 10억분 * n 사이의 답.
// 각 심사관이 몇 명을 처리?
// 처리 가능한 입국자가 n보다 작다면 분을 올리고, 입국자가 n보다 크다면 분을 낮춘다.
// 면접관이 시간대비 몇 명을 처리?
// 시간 / 심사시간 = 심사관 당 처리 가능 입국자 수

/**
 * 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고싶다.
 * @param {number} n 입국심사를 기다리는 사람의 수. 최대 10억명.
 * @param {Array<number>} times 각 입국심사관이 심사하는데 걸리는 시간. 각 원소는 최대 10억이 될 수도 있다. 배열의 길이는 10만 이하.
 */
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // O(n log n)
  let left = 1;
  // 가장 비효율적으로 처리한 경우를 초기 right값으로 한다.
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // sum(시간 / 심사시간)
    const sum = times.reduce((num, time) => (num += Math.floor(mid / time)), 0);
    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // n이 6, times가 [7, 10]으로 주어졌을 때
  // 1차 루프: 30분(mid)동안 몇 명을 쳐냄? (left: 1, right: 60, mid: Math.floor((left+right)/2)=30)
  // Math.floor(30/7) = 4, Math.floor(30/10) = 3
  // 총 7명 처리 가능.
  // (7>n) over-working. right값 옮김.
  //
  // 2차 루프: 15분동안 몇 명을 쳐냄? (left: 1, right: 29, mid: Math.floor((left+right)/2)=15)
  // Math.floor(15/7) = 2, Math.floor(15/10) = 1
  // 총 3명 처리 가능.
  // (3<n) under-working. left값 옮김
  //
  // 3차 루프: 22분동안 몇 명을 쳐냄? (left: 16, right: 29, mid: Math.floor((left+right)/2)=22)
  // Math.floor(22/7) = 3, Math.floor(22/10) = 2
  // 총 5명 처리 가능.
  // (5<n) under-working. left값 옮김
  //
  // 4차 루프: 26분동안 몇 명을 쳐냄? (left: 23, right: 29, mid: Math.floor((left+right)/2)=26)
  // Math.floor(26/7) = 3, Math.floor(26/10) = 2
  // 총 5명 처리 가능.
  // (5<n) under-working. left값 옮김
  //
  // 5차 루프: 28분동안 몇 명을 쳐냄? (left: 27, right: 29, mid: Math.floor((left+right)/2)=28)
  // Math.floor(28/7) = 4, Math.floor(28/10) = 2
  // 총 6명 처리 가능
  // (6=n) 같음. right값 옮김
  //
  // 6차 루프: 27분동안 몇 명을 쳐냄? (left: 27, right: 28, mid: Math.floor((left+right)/2)=27)
  // Math.floor(27/7) = 3, Math.floor(27/10) = 2
  // 총 5명 처리 가능
  // (5<n) under-working. left값 옮김
  //
  // 7차 루프: 27분동안 몇 명을 쳐냄? (left: 28, right: 28, mid: Math.floor((left+right)/2)=28)
  // Math.floor(28/7) = 4, Math.floor(28/10) = 2
  // 총 6명 처리 가능
  // (6=n) 같음. right값 옮김
  //
  // 8차 루프: left 값이 더 커졌으므로 빠져나감 (left: 28, right: 27, mid: Math.floor((left+right)/2)=27)

  return left;
}
