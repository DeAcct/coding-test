// 핵심 키워드는 노드, 간선, 최단경로.
// 최단 경로가 가장 큰 경우의 집합을 구하는 문제.

// shift 이용
/**
 * 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들의 개수를 구해라.
 * 간선이 양방향으로 연결된 그래프이다.
 * @param {number} n 노드의 개수
 * @param {Array<[number, number]>} edge 간선의 정보가 담긴 배열
 */
function solution1(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  // 간선을 연결해서 그래프를 만들자.
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  // 정점까지의 최단 거리를 나타내는 배열
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while (queue.length > 0) {
    // shift는 O(n)이지만, 요소가 적을 때에는 최적화해준다.
    // 맨 앞에서 요소를 가져와
    const src = queue.shift();
    for (const dest of graph[src]) {
      // 거리가 비어있다면
      if (distance[dest] === 0) {
        // 큐에 추가하고
        queue.push(dest);
        // 도착지까지의 거리는 출발지까지 거리의 + 1
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

// Queue 객체를 직접 구현하는 방법
class Queue {
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
    this.front += 1;
    return value;
  }
  get isEmpty() {
    return this.rear === this.front;
  }
}

/**
 * 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들의 개수를 구해라.
 * 간선이 양방향으로 연결된 그래프이다.
 * @param {number} n 노드의 개수
 * @param {Array<[number, number]>} edge 간선의 정보가 담긴 배열
 */
function solution2(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  // 간선을 연결해서 그래프를 만들자.
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  // 정점까지의 최단 거리를 나타내는 배열
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = new Queue();
  queue.enqueue(1);
  let answer = 0;
  let max = 1;
  while (!queue.isEmpty) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
        if (distance[dest] > max) {
          max = distance[dest];
          answer = 1;
        } else if (distance[dest] === max) {
          answer++;
        }
      }
    }
  }

  //const max = Math.max(...distance);
  //return distance.filter((item) => item === max).length;

  return answer;
}
