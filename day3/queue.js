// queue first in first out, 선입선출.
// enqueue: rear에 넣기, dequeue: front에서 빼기

// linear queue
// Array로 표현
// dequeue 시 앞 공간이 비어 그걸 앞으로 당기는 데 선형시간이 필요하다.
class ArrayQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

const aQueue = new ArrayQueue();
aQueue.enqueue(1);
aQueue.enqueue(2);
aQueue.enqueue(4);
console.log(aQueue.dequeue());
aQueue.enqueue(8);
console.log(aQueue.size());
console.log(aQueue.peek());
console.log(aQueue.dequeue());
console.log(aQueue.dequeue());

// Linked List로 표현
// 인덱스 고민 없음

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    if (this.head === null) {
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

const llQueue = new LinkedListQueue();
llQueue.enqueue(1);
llQueue.enqueue(2);
llQueue.enqueue(4);
console.log(llQueue.dequeue());
llQueue.enqueue(8);
console.log(llQueue.size);
console.log(llQueue.peek());
console.log(llQueue.dequeue());
console.log(llQueue.dequeue());

// shift는 엄밀히 말해 dequeue와 다르다.
// shift는 무조건 선형 시간이 소요되게 된다. 성능 문제.

//==============================
// circular queue
// front와 rear가 연결된 queue
// linked list로 구현했을 때 이점이 딱히 없다.

class CircularQueue {
  #queue = [];
  #front = 0;
  #rear = 0;
  #maxSize = 0;
  size = 0;

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("queue가 가득 참");
      return;
    }
    this.#queue[this.#rear] = value;
    //나머지는 나눈 값(n)보다 커질 수 없으므로 0,1,2,3,...,n-1이 끝없이 반복된다.
    this.#rear = (this.#rear + 1) % this.#maxSize;
    this.size++;
  }

  dequeue() {
    const value = this.#queue[this.#front];
    delete this.#queue[this.#front];
    this.#front = (this.#front + 1) % this.#maxSize;
    this.size--;
    return value;
  }

  isFull() {
    return this.size === this.#maxSize;
  }

  peek() {
    return this.#queue[this.#front];
  }
}

const cQueue = new CircularQueue(4);
cQueue.enqueue(1);
cQueue.enqueue(2);
cQueue.enqueue(4);
cQueue.enqueue(8);
cQueue.enqueue(16);
console.log(cQueue.dequeue());
console.log(cQueue.dequeue());
console.log(cQueue.size);
console.log(cQueue.peek());
cQueue.enqueue(16);
cQueue.enqueue(32);
console.log(cQueue.isFull());
