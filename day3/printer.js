/**
 * @link https://school.programmers.co.kr/learn/courses/13213/lessons/91078
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

/**
 *
 * @param {Array<number>} priorities 문서의 중요도가 담긴 배열
 * @param {number} location 내가 출력할 문서의 인덱스
 * @returns 내가 출력할 문서는 몇 번째로 출력될 예정인지 반환한다.
 */
function solution(priorities, location) {
  const queue = new Queue();
  // priorities를 기반으로 하여 값과 인덱스를 담은 배열을 큐에 저장한다.
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  // priorities를 정렬하여 불필요한 최대값을 탐색을 줄인다.
  priorities.sort((a, b) => b - a);

  // 프린트된 문서의 개수를 세는 변수
  let printed = 0;

  while (true) {
    // 큐의 맨 앞을 현재 탐색 대상으로 한다.
    const currentValue = queue.peek();

    // 현재 탐색 대상이 현존하는 큐에서 가장 큰 값이 아닌 경우
    if (currentValue[0] < priorities[printed]) {
      // 현재 탐색 대상을 맨 뒤로 보낸다.
      queue.enqueue(queue.dequeue());
    }

    // 현재 탐색 대상이 현존하는 큐에서 가장 큰 값인 경우
    else {
      // 현재 탐색 대상을 큐에서 빼낸다.
      const value = queue.dequeue();

      // 프린트한 문서의 개수를 늘린다.
      printed++;

      // "내가 출력할 문서의 인덱스"와 큐에서 빼낸 것의 인덱스가 동일할 경우
      if (location === value[1]) {
        // 지금까지 출력한 문서의 개수를 반환한다.
        return printed;
      }
    }
  }
}
