// 선형 탐색
// 순서대로 하나씩 찾는 탐색 알고리즘. O(n)의 시간복잡도

// 이진 탐색
// 요소가 정렬되어 있다고 가정할 때, 절반씩 제외하며 찾는 알고리즘.
// O(log n)만큼 시간복잡도가 걸린다.(밑은 2)
// 반드시! 정렬되어 있어야 한다.
// 배열 혹은 이진 탐색 트리를 이용하여 구현할 수 있다.
// 상당히 빠르지만, 정렬을 해야 할 경우 그렇게 효과를 보지 못할 수도 있다.

// 배열을 이용한 구현
// 중간에 요소 추가/제거 시 선형시간이 걸린다.\
/**
 * @template T 원본 배열이 담을 자료형입니다.
 */
class AlterArray extends Array {
  /**
   *
   * @param {Array<T>} array 생성할 원본 배열
   */
  constructor(array) {
    super();
    this.origin = array;
  }
  /**
   *
   * @param {T} findValue 존재하는지 찾을 값
   * @returns 해당 값의 인덱스. 존재하지 않는 경우 -1을 반환
   */
  binarySearch(findValue) {
    let left = 0;
    let right = this.origin.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
      if (this.origin[mid] === findValue) {
        return mid;
      }
      // 현재 중앙인덱스가 가리키는 값이 찾는값보다 작으면
      if (this.origin[mid] < findValue) {
        // 왼쪽인덱스를 중앙인덱스의 바로 오른쪽으로 옯긴다.
        left = mid + 1;
      }
      // 현재 중앙값이 찾는값보다 크면s
      else {
        // 오른쪽인덱스를 중앙인덱스의 바로 왼쪽으로 옮긴다.
        right = mid - 1;
      }
      // 새로 설정된 왼쪽인덱스와 오른쪽인덱스를 기반으로 중앙인덱스를 새로 설정한다.
      mid = Math.floor((left + right) / 2);
    }
    return -1;
  }
}
const array = new AlterArray([1, 1, 5, 124, 400, 599, 1004, 2876, 8712]);
console.log(array.binarySearch(2876));
console.log(array.binarySearch(1));
console.log(array.binarySearch(500));

// 이진 탐색 트리를 이용한 구현
// 이진 탐색을 위한 이진 트리.
// 왼쪽 서브 트리는 루트보다 작은 값
// 오른쪽 서브 트리는 루트보다 큰 값
//
// 이진 탐색 트리에서 요소를 추가하는 과정.
// 예시로 설명 (중복 존재)
// 처음으로, 5를 추가해보자.
// 5가 루트가 된다.
// 4를 추가해보자.
// 4는 5보다 작으므로 왼쪽 서브트리로 들어간다.
// 7을 추가해보자.
// 7은 5보다 크므로 오른쪽 서브트리로 들어간다.
// 8을 추가해보자.
// 8은 5보다 크므로 오른쪽 서브트리로 들어가고, 7보다 크므로 7의 오른쪽 정점으로 간다.
// 5를 또 추가해보자.
// 루트와 같은 값이 들어오면 어떤 서브트리로 들어가도 상관없다.
// 일단 왼쪽 서브트리로 넣어보자. 5는 4보다 크므로 4의 오른쪽 정점으로 간다.
// 6을 추가해보자.
// 6은 5보다 크기때문에 오른쪽 서브트리로 들어가고, 7보다 작으므로 7의 왼쪽 정점으로 간다.
// 2를 추가해보자.
// 2는 5보다 작기때문에 왼쪽 서브트리로 들어가고, 4보다 작으므로 4의 왼쪽 정점으로 간다.
//
// 이진 탐색 트리에서 요소를 삭제하는 과정
// 단말(리프 노드) 정점을 삭제하는 경우, 별다른 처리 없이 연결을 끊으면 된다.
// 하나의 서브트리를 가지는 경우, 제거할 정점의 부모 간선을 자식 정점을 가리키게 바꾸면 된다.
// 두 개의 서브트리를 가지는 경우, 왼쪽 서브트리의 가장 큰 값 또는 오른쪽 서브트리의 가장 작은값과 삭제할 값을 교체하면 된다.
// 교체된 정점의 좌우 자식이 없다면 제거되는 정점의 링크로 대체된다.

// 이진 탐색 트리의 문제점?
// 5를 추가
// 4를 추가
// 3을 추가
// 2를 추가
// 1을 추가
// 계속해서 왼쪽 정점으로 추가되는 모습이다.
// 이와 같이 최악의 경우 한쪽으로 트리가 편향되어 순차 탐색과 동일한 시간복잡도를 가질 수 있다.
// 이를 해결하기 위한 자료구조로 AVL트리, 레드-블랙 트리가 있다.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // root가 비어있다면
    if (this.root === null) {
      // 새로 들어돈 값을 root로 한다.
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      // 현재값보다 새로 들어온 값이 더 크다면
      if (currentNode.value < value) {
        // 오른쪽이 비어있다면
        if (currentNode.right === null) {
          // 오른쪽 정점에 새로 들어온 값을 넣는다.
          currentNode.right = newNode;
          break;
        }
        // 비어있지 않다면 오른쪽 정점을 새로 현재값으로 정한다.
        currentNode = currentNode.right;
      }
      // 현재값보다 새로 들어온 값이 더 작다면
      else {
        // 왼쪽이 비어있다면
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
  has(value) {
    let currentNode = this.root;
    // 현재노드가 비어있지 않다면 계속되는 루프
    while (currentNode !== null) {
      // 현재 정점의 값이 찾는 값과 같다면
      if (currentNode.value === value) {
        return true;
      }
      // 찾는 값이 현재 정점의 값보다 크다면
      if (currentNode.value < value) {
        // 현재 정점을 오른쪽 정점으로 정한다.
        currentNode = currentNode.right;
      }
      // 찾는 값이 현재 정점의 값보다 작다면
      else {
        // 현재 정점을 왼쪽 정점으로 정한다.
        currentNode = currentNode.left;
      }
    }
    // 모든 리프노드까지 탐색한 뒤에도 없는 경우
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8));
console.log(tree.has(1));
