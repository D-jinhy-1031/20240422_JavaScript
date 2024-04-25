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
// react에서 배열 요소 수정시 사용
const mapArr = arr.map(function (item, idx, array) {
  if (item % 2 === 0) return item * 2;
  else return item;
});
console.log(mapArr);      // [20, 11, 200, 101, 2000]
console.log(arr);         // [10, 11, 100, 101, 1000]

const mapArr1 = arr.map((item) => (item % 2 === 0) ? item * 2 : item);
console.log(mapArr1);     // [20, 11, 200, 101, 2000]
console.log('');

// filter => 순환은 forEach와 동일. 다만 리턴 값이 true인 요소만 새로운 배열에 추가한다
// react에서 배열의 요소 삭제에 사용된다
const filterArr = arr.filter(function (item, idx, array) {
  if (item % 2 === 0) return true;
  else return false;
});
console.log(filterArr);   // [10, 100, 1000]
console.log(arr);         // [10, 11, 100, 101, 1000]

const filterArr1 = arr.filter((item) => (item % 2 === 0));
console.log(filterArr1);  // [10, 100, 1000]
console.log('');

// reduce => 누적
// react의 useReducer() 라는 hook이 이 패턴을 이용한다
// const arr = [10, 11, 100, 101, 1000];
total = 0;
total = arr.reduce(function (sum, item) {
  return sum + item;
}, 0);  // 0은 최초 실행될때 sum의 초기값
console.log(total);
console.log('')

const names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa'];
const nameCount = names.reduce((sum, item) => {
  if (!sum[item]) sum[item] = 1;       // sum['Nolbu'] = 1; => sum.Nolbu = 1
  else sum[item] = sum[item] + 1;
  return sum;
}, {});
console.log(nameCount);
