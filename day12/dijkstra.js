// 최단 경로 알고리즘
// 특정 정점에서 목적지까지 최단 경로를 구하는 알고리즘
//
// BFS, DFS는 그래프의 간선 가중치가 모두 같을 때 적합하다.
// 2차원 배열 입력이 주어진 상태로 최단 거리를 찾아야 한다면 BFS, DFS로 푸는 경우가 많다.
//
// 가중치가 각각 다르다면
// 다익스트라 알고리즘
// 우선순위 큐 - 힙을 이용해 구현
// V가 정점의 수, E가 간선의 수 일 때 O(E log V)의 시간복잡도
// 1. 시작점을 제외한 모든 정점의 거리를 무한으로 설정한다. 시작점은 0으로 설정한다.
// 2. 시작점을 선택한다.
// 3. 선택한 정점에서 갈 수 있는 정점의 거리를 정점(해당 정점까지의 최단 거리) 값 + 간선(거리) 값으로 갱신한다.
// 4. 선택한 정점을 방문 처리한다.
// 5. 이미 방문한 정점과 무한인 정점을 제외하고 가장 최단 거리인 정점을 선택한다.
// 6. 더 이상 방문할 수 있는 정점이 없을 때 까지 3~5를 반복한다.
// 7. 도착점의 값을 확인한다.

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        // 왼쪽 정점이 없을 경우
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        // 오른쪽 정점이 없을 경우
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  get isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    // 편의를 위해 배열의 요소를 swap하는 함수 작성
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function dijkstra(road, N) {
  const heap = new MinHeap(); // 우선순위 큐(힙)
  heap.push({ node: 1, cost: 0 }); // 1번 마을부터 시작

  const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
  dist[1] = 0; // 1번 마을은 무조건 거리가 0

  while (!heap.isEmpty) {
    // heap이 비어있지 않다면
    // cost가 가장 낮은 정점을 뽑는다.
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
      const nextCost = cost + currentCost; // 비용

      // 양방향을 고려하여 작성
      if (src === current && nextCost < dist[dest]) {
        // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[dest] = nextCost; // 거리를 갱신한다.
        heap.push({ node: dest, cost: nextCost }); // push
      } else if (dest == current && nextCost < dist[src]) {
        // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[src] = nextCost; // 거리를 갱신한다.
        heap.push({ node: src, cost: nextCost }); // push
      }
    }
  }

  return dist; // 1번 마을부터 각 마을까지의 최단 거리
}

function solution(N, road, K) {
  const dist = dijkstra(road, N);
  return dist.filter((x) => x <= K).length;
}
