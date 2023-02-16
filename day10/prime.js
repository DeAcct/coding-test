// 소수를 구하자!

// 방법1
// 2부터 N-1까지 루프를 돌며 나눠본다.
// O(n)
function isPrimeByAll(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 방법2
// 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다.
// O(sqrt(n))
function isPrimeBySqrt(num) {
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 방법 3
// 에라토스테네스의 체
// 소수 개수 구하기
// O(n log log n)
function getPrimes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i ** 2 <= num; i++) {
    // 아직 체크한 적이 없는 숫자라면
    if (prime[i]) {
      // 자신의 배수를 지운다.
      for (let j = i * 2; j <= num; j += i) {
        prime[j * i] = false;
      }
    }
  }

  // true인 것의 개수 반환
  return prime.filter(Boolean).length;
}
