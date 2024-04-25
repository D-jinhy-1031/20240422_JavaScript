console.log('---------------- [429] Set -----------------');
// ESNext
// Set은 중복 데이터를 저장하지 않는다
const mySet = new Set([10, 11, 100, 101, 11, 100, 1000]);
console.log(`전체 요소 수=> ${mySet.size}`);    // 5
console.log(mySet);     // {10, 11, 100, 101, 1000}

// 조작은 메서드로

// 추가
mySet.add(5000);
mySet.add(10);          // 추가 안됨
console.log(mySet);
console.log('');

// 값이 있니
if (mySet.has(5000)) {   // 값이 있으면 true, 없으면 false
  mySet.delete(5000);   // 삭제
}
console.log(mySet);

// 값 참조 => 메서드 없음
let value = 0;
if (mySet.has(10)) {   // 값이 있으면 true, 없으면 false
  value = 10;
}
console.log(value);

// 순환
let total = 0;
mySet.forEach((item) => {
  total = total + item;
});
console.log(total);
