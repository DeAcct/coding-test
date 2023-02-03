//연결 리스트. 각 요소를 포인터로 연결하여 관리
//메모리가 허용하는 한 요소를 제한없이 추가 가능
//연속적이지 않기에 메모리에서 옆으로 저장되지 않는다.
//탐색은 O(n)이 소요됨
//요소 추가/제거 시 O(1)이 소요됨
//singly linked, doubly linked, circular linked

//===============================
//singly linked list
//head에서 tail까지 단방향으로

//요소 찾기
//찾는 값이 나올 때까지 포인터로 찾아들어감.

//요소 추가
//추가할 요소의 포인터를 먼저 다음 요소에 연결하고, 이전 요소의 포인터가 추가할 요소를 가리키도록 바꾼다.
//추가를 위한 탐색을 하지 않도록 주의하여 작성할 필요 있음.

//요소 삭제
//삭제할 요소의 이전 요소의 포인터를 다음 요소를 가리키도록 수정하고, 삭제할 요소를 메모리에서 해제한다.

//===============================
//doubly linked list
//양방향으로 연결. singly linked list보다 메모리를 조금 더 사용한다.

//요소 찾기
//singly linked list와 동일

//요소 추가
//다음노드 포인터가 추가할 요소의 다음 요소를 가리키도록 한다.
//추가할 요소의 이전 요소의 다음노드 포인터가 추가할 요소를 가리키도록 한다.
//추가할 요소의 다음 요소의 이전노드 포인터가 추가할 요소를 가리키도록 한다.
//이전노드 포인터가 추가할 요소의 이전 요소를 가리키도록 한다.

//요소 삭제
//삭제할 요소의 이전 요소의 다음노드 포인터가 삭제할 요소의 다음 요소를 가리키도록 한다.
//삭제할 요소의 다음 요소의 이전노드 포인터가 삭제할 요소의 이전 요소를 가리키도록 한다.
//삭제할 요소를 메모리에서 해제한다.

//===============================
//circular linked list
//리스트의 tailnode의 포인터가 리스트의 head로 연결됨

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  //순회방식
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {
    let currentNode = this.head;
    let displayString = "[";
    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    displayString = displayString.slice(0, -2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
