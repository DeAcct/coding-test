// 트리
// 방향 그래프의 일종으로 정점을 가리키는 간선이 하나 밖에 없는 구조
// 가장 상위 정점: Root
// 각 정점: Node
// 더 이상 자식이 없는 Node: LeafNode
// 루트로부터 몇 번째 깊이인가: Level
// 한 정점에서 뻗어나가는 간선의 개수: Degree(차수)
// 디렉터리, 인사 구조

// 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
// 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다.
// 루트에서 특정 정점으로 가는 경로는 유일하다.

// 이진 트리
// 각 정점이 최대 2개의 자식을 가지는 트리
// 마지막 레벨을 제외하고 모든 노드가 채워져 있다면 완전 이진 트리
// 마지막 레벨까지 모든 노드가 채워져 있으면 포화 이진 트리
// 한 방향으로만 정점이 이어진 편향 트리
// 정점이 N개인 이진 트리는 최악의 경우 높이가 N이 될 수 있다.
// 정점이 N개인 포화 또는 완전 이진 트리의 높이는 log N이다. 정점이 증가할 때마다 간선이 2개씩 생기기 때문
// 높이가 h인 포화 이진 트리는 2^h - 1개의 정점을 가진다.
// 일반적인 이진 트리를 사용하는 경우는 많지 않다.
// 이진 탐색 트리, 힙, AVL 트리, 레드 블랙 트리...

// 트리의 구현
// 인접 행렬 (배열)
// 인접 리스트 (링크가 2개 존재하는 연결 리스트)

// 이진 트리의 구현
//
// 배열로 구현
// 0번 인덱스는 편의를 위해 비워둔다.
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = Math.floor(Index / 2)
const tree = [
  undefined,
  9,
  3,
  8,
  2,
  5,
  undefined,
  7,
  undefined,
  undefined,
  undefined,
  4,
];
//
// 연결 리스트로 구현
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      // newNode를 this.tail에, this.tail을 this.head에.
      // 요소가 하나밖에 없기에 자기 자신이 시작과 동시에 끝인 것을 표현.
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const value = this.head.value;
    // head가 빠져나가니까, 빠져나가려 하는 요소의 next를 새로운 head로 지정한다.
    this.head = this.head.next;
    // 사이즈를 하나 줄인다.
    this.size--;
    return value;
  }

  peek() {
    return this.head.value;
  }
}
class Tree {
  constructor(node) {
    this.root = node;
  }
  display() {
    const queue = new LinkedListQueue();
    // root를 큐에 담는다.
    queue.enqueue(this.root);
    while (queue.size) {
      // 현재 노드를 큐에서 뺀다.
      const currentNode = queue.dequeue();
      // 현재 노드를 출력한다.
      console.log(currentNode.value);
      // 좌우에 노드가 있다면 큐에 넣는다.
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
    // 좌우에 노드가 전부 없다면 가장 마지막 레벨에 도달한 것이므로 빠져나간다.
  }
}

const llTree = new Tree(new Node(9));
llTree.root.left = new Node(3);
llTree.root.right = new Node(8);
llTree.root.left.left = new Node(2);
llTree.root.left.right = new Node(5);
llTree.root.right.right = new Node(7);
llTree.root.left.right.right = new Node(4);
llTree.display();
