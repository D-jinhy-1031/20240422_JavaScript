/* eslint-disable no-array-constructor */
console.log('---------------- [122, 390] Array -----------------');
// 객체 => key로 이루어진 자료들의 집합 - 이름으로 구별이 필요한 경우
// 배열 => 연속된 숫자로 이루어진 자료들의 집합 - 순서대로 참조가 필요한 경우

// 배열의 순서는 0부터 시작한다
const one = [1, 10, 11, 100, 101];
console.log(one);

// 배열에 몇개의 요소가 있는가?
console.log(`크기 => ${one.length}`);      // 5
console.log('');

// 참조
const a = one[0];
console.log(`배열의 첫번째 요소의 값: ${a}`);       // 1
console.log(`배열의 두번째 요소의 값: ${one[1]}`);  // 10
console.log('');

// 값 대입
one[0] = 2;
console.log(one);

// 삭제는 delete를 사용하지 않는다
// 요소의 변수의 방은 유지되며 값만 지워진다
delete one[2];
console.log(one);
console.log(`크기 => ${one.length}`);      // 5
console.log('');

console.log('---------------- new Array -----------------');
const two = new Array(2, 20, 21, 200, 201);
console.log(two);

console.log(`크기 => ${two.length}`);      // 5
console.log('');

// 참조
const b = two[0];
console.log(`배열의 첫번째 요소의 값: ${b}`);       // 1
console.log(`배열의 두번째 요소의 값: ${two[1]}`);  // 10
console.log('');

// 값 대입
two[0] = 100;
console.log(two);
console.log('');

console.log('---------------- new Array 주의 -----------------');
// new Array(값) 과 같이 지정한 값이 1개인 경우는 지정한 수 만큼 방만 확보
// 각 방에 값은 모두 undefined로 초기화 된다
const three = new Array(3);
console.log(three);
console.log(`크기 => ${three.length}`);      // 3

console.log(`배열의 첫번째 요소의 값: ${three[0]}`);  // undefined
console.log('');

console.log('---------------- Array 값 -----------------');
const four = [
  10,
  'str',
  true,
  undefined,
  null,
  new Date(),
  function () {
    console.log('익명 함수')
  }
]
console.log(four[0]);
console.log(four[2]);
console.log(four[4]);
console.log(four[5].toLocaleString());
four[6]();
console.log('');

const getValue = (num) => {
  switch (num) {
    case 0: case 1: case 2: case 3: case 4:
      return four[num];
    case 5:
      return four[num].toLocaleString();
    case 6:
      return four[num]();
    default:
      return '숫자 지정이 잘못되었습니다'
  }
}
const result = getValue(7);
console.log(result);
console.log('');

// const two = new Array(2, 20, 21, 200, 201);
let total = 0;
/*
total = total + two[0];
total = total + two[1];
total = total + two[2];
*/
for (let i = 0; i < two.length; i++) {
  total = total + two[i];
}
console.log(total);
console.log('');

// 2차원 배열
const five = [
  [1, 10, 11, 100, 101],
  [2, 20, 21],
  [3, 30, 32, 300, 301, 3000],
]
console.log(five.length);     // 2
console.log(five[0].length);  // 5
console.log(five[1].length);  // 3

total = 0;
for (let i = 0; i < five[0].length; i++) {
  total = total + five[0][i]
}
for (let i = 0; i < five[1].length; i++) {
  total = total + five[1][i]
}
for (let i = 0; i < five[2].length; i++) {
  total = total + five[2][i]
}
console.log(total);
console.log('');

total = 0;
// 각 층을 순환
for (let floor = 0; floor < five.length; floor++) {
  // 각 층에 방을 순환
  for (let room = 0; room < five[floor].length; room++) {
    total = total + five[floor][room];
  }
}
console.log(total);
