// 재귀 함수
// 자기 자신을 호출(재귀 호출)하는 함수
// 함수 호출은 Call Stack에 쌓이기 때문에 스택 자료구조와 유사하게 동작한다.
// 함수형 프로그래밍에서는 루프 구현을 재귀로 구현하는 경우가 많다.
// 잘못 작성하면 무한 루프에 빠질 수 있다.

// 자바스크립트에서 콜 스택에 제한이 있다.
// 크롬의 경우 약 10000개
// 꼬리 재귀가 제공되지 않는다.
// 성능이 좋지 않다.
// union find, dfs, backtracking 등에 활용 가능.
// 불편함을 무시하면 더 빠른 성능으로 (JS에서)작성할 수 있지만 코딩 테스트는 빨리 푸는 것이 중요하기에 추천하지는 않는다.

// 피보나치 수열
// 앞 두 항의 합이 뒤의 항이 된다.
function fibonacci(x) {
  if (x <= 2) {
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}
console.log(fibonacci(7));

// 변수 없는 합병 정렬

// 결합
const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};
// 분해
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
};

console.log(mergeSort([21, 10, 12, 20, 25, 13, 15, 22]));

// 트리 순회
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(node) {
    this.root = node;
  }
  // 전위 순회
  preorder(currentNode) {
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }
  // 중위 순회
  inorder(currentNode) {
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }
  // 후위 순회
  postorder(currentNode) {
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);

// 순열 nPr, (n=arr.length)
// O(r!)
/**
 * 배열에서 r개를 중복없이 순서에 상관있게 선택/나열
 * @param {Array<number>} arr 선택에 사용될 배열
 * @param {number} n 선택할 개수
 * @returns 정해진 배열로 순열 반환
 */
function permutations(arr, r) {
  // 1개만 뽑는다면 그대로 순열을 반환. 탈출 조건으로도 사용된다.
  if (r === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, i, self) => {
    // 현재 i를 제외한 요소를 추출한다.
    // j번째는 선택된 요소
    const rest = self.filter((_, j) => j !== i);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, r - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합친다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과값을 추가한다.
    result.push(...combine);
  });

  return result;
}

console.log(permutations([50, 10, 20, 6, 7, 8], 2));

// 조합 nCr, (r=arr.length)
// O(2^r)
/**
 * 배열에서 r개를 중복없이 순서에 상관없이(순서 다른건 같은 걸로 취급) 선택/나열
 * @param {Array<number>} arr 선택에 사용될 배열
 * @param {number} n 선택할 개수
 * @returns 정해진 배열로 조합 반환
 */
function combinations(arr, r) {
  // 1개만 뽑는다면 그대로 조합을 반환. 탈출 조건으로도 사용된다.
  if (r === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, i, self) => {
    // 현재 i이후 요소를 추출한다.
    // i번째는 선택된 요소
    const rest = self.slice(i + 1);
    // 선택된 요소 이전 요소를 제외하고 재귀 호출한다.
    const combis = combinations(rest, r - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  return result;
}

console.log(combinations([50, 10, 20, 6, 7, 8], 2));

/**
 * 조합을 구해서 각 원소의 합을 반환합니다.
 * @param {Array<number>} numbers 원본 배열입니다.
 * @returns 각 원소의 합을 담은 배열
 */
function combiSum(numbers) {
  return [...new Set(combinations(numbers, 2).map(([a, b]) => a + b))].sort(
    (a, b) => a - b
  );
}
