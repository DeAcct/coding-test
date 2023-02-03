const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(1);
const arr6 = Array.from(Array(5), (_, k) => {
  return k + 1;
});

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr6.length);
// arr6.length = 3; //수동적으로 길이를 바꾸면 뒤의 요소가 잘리거나, 빈 요소가 추가된다.
// console.log(arr6);
// arr6.length = 10;
// console.log(arr6);
console.log(arr6.join(","));
console.log(arr6.reverse()); // 원본이 바뀌므로 주의!

const arr7 = [7, 8, 9, 10];
console.log(arr6.concat(arr7)); // 배열 합치기

// push, pop 끝에 추가/끝을 삭제
arr7.push(7);
arr7.push(7, 8, 9);
console.log(arr7);
arr7.pop();
arr7.pop();
console.log(arr7.pop()); // 삭제하고 삭제된 요소가 반환됨

//shift, unshift 시작을 삭제, 시작에 추가
arr3.shift();
arr3.shift();
console.log(arr3.shift()); //삭제하고 삭제된 요소가 반환됨
arr3.unshift(3);
console.log(arr3);

//slice
console.log(arr3.slice(2, 4)); //원본배열 변화 없이 잘라서 가져오기

//splice
console.log(arr3.splice(2, 2)); //원본배열이 바뀐다. 잘라서 가져오는건 같다.

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (const item of arr3) {
  console.log(item);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr);
arr["key"] = "value";
console.log(arr);
console.log(arr.length); //길이는 변하지 않았음.
