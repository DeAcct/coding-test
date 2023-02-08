// 트라이(trie)
// 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
// 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
// 문자열을 탐색할 때 단순 비교보다 효율적으로 찾을 수 있다.
// L이 문자열의 길이일 때 탐색/삽입은 O(L)의 시간복잡도를 가진다.
// 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.

// 트라이 구조의 특징
// 루트는 비어있다.
// 각 간선은 추가될 문자를 키로 가진다.
// 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
// 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(str) {
    let currentNode = this.root;
    // 문자열을 잘라
    for (const char of str) {
      console.log(currentNode);
      // 현재 문자가 간선에 존재하지 않는다면
      if (!currentNode.children.has(char)) {
        // 현재 문자를 추가한다.
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      // 간선을 타고 내려간다.
      currentNode = currentNode.children.get(char);
    }
  }
  has(str) {
    let currentNode = this.root;
    //문자열을 잘라
    for (const char of str) {
      // 현재 문자가 간선에 존재하지 않으면
      if (!currentNode.children.has(char)) {
        // false 반환
        return false;
      }
      // 간선을 타고 내려간다.
      currentNode = currentNode.children.get(char);
    }
    // 문자열을 자르는 탐색을 모두 마쳤을 경우 true 반환
    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("combo"));
