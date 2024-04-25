console.log('---------------- [400] Array 반복 메서드 -----------------');

const arr = [10, 11, 100, 101, 1000];

let total = 0;
for (let i = 0; i < arr.length; i++) {
  // 일반적인 for 구문
  total = total + arr[i];
}
console.log(total);

// 순환 메서드

// for구문과 동일
total = 0;
// item => 순서에 있는 요소 값
// idx => 순서값
// array => 순환문이 실행되어 변경된 전체 배열
arr.forEach(function (item, idx, array) {
  // console.log(idx, item, array);
  // array[idx] = array[idx] + 1000;
  total = total + item;
});
console.log(total);

total = 0;
arr.forEach((item) => total = total + item);
console.log(total);
console.log('');

// map => 순환은 forEach와 동일. 다만 리턴된 값으로 새로운 배열을 생성해 준다



const names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa'];
