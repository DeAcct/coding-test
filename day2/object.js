const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "이현성", company: "스튜디오 바인드" };

console.log(obj1);
console.log(obj2);
console.log(obj3);
obj3["email"] = "isac1117@naver.com";
obj3.phone = "010-2578-3144";
console.log(obj3);

delete obj3.phone; //객체 키-값 삭제
console.log(obj3);

console.log("email" in obj3); //객체 키 존재 확인
console.log("phone" in obj3);

console.log(Object.keys(obj3)); //객체 키를 담은 배열
console.log(Object.values(obj3)); //객체 값을 담은 배열

for (const key in obj3) {
  console.log(key, obj3[key]);
}
