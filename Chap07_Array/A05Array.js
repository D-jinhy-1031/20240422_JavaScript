// ES6
const arr = [10, 11, 100, 101, 1000, 1001];

// ESNext
// include => indexOf 대신 사용하면 편하다
console.log(arr.includes(11));    // true
console.log(arr.includes(5000));  // false

if (!arr.includes(5000)) arr.push(5000);
console.log(arr);     // [10, 11, 100, 101, 1000, 1001, 5000]

const one = new Array(10);  // 10개의 빈 배열 생성
console.log(one);

// 배열의 요소의 값을 2번째부터 'A'로 초기화
one.fill('A', 2);
console.log(one);
console.log('');

const objArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
];

const getIndex = (id) => {
  // 배열의 index는 0부터 시작된다
  // return objArray[id];

  // findIndex는 매칭되는 요소의 index 값을 리턴한다
  const index = objArray.findIndex((item) => {
    return item.id === id;
  });
  return objArray[index];
}
let result = getIndex(2);
console.log(result);


const getItem = (id) => {
  // find는 매칭되는 요소을 리턴한다
  const item = objArray.find((item) => {
    return item.id === id;
  });
  return item;
}
result = getItem(3);
console.log(result);

// spread, destructuring
console.log('--------------- spread Array ---------------');
const arrA = [10, 11, 100];
const arrB = [10, 21, 200];

console.log(arrA[0], arrA[1], arrA[2], arrA[3]);

// const arrC = ...arrA;    // arrC = 10, 11, 100;
const arrC = [...arrA];     // arrC = [10, 11, 100];
console.log(arrC);
console.log(arrA === arrC); // false
console.log('');

const arrD = [...arrA, arrB];
console.log(arrD);

// 중복된 값을 덮어쓰지 않는다. 이어 붙이기
const arrE = [...arrA, ...arrB];
console.log(arrE);
console.log('');

console.log('---------------- [636] Arrat DeStructuring -----------------');
const arr1 = [10, 11, 100, 101, 1000, 1001];
// 배열은 []로 받아 사용
// 배열은 key가 없으므로 중복되지 않는 변수명으로 선언해서 받는다
// const a = arr[0];
const [a, b, c, d, e] = arr1;
console.log(a, b, c, d, e);

// 건너띄어서 받을 수도 있다
const [a1, , , d1, , f1] = arr1;
console.log(a1, d1, f1);

// 기본값 할당 가능
// 배열도 없는 요소값을 참조하면 에러가 아닌 undefined가 출력된다
console.log(arr1[100]);    // undefined

// 값이 있으면 있는 값을 없으면 기본값을 사용한다. 기본값 안주면 undefined
const [, , , d2 = 1, e2 = 2, f2 = 3, g2 = 4] = arr1;
console.log(d2, e2, f2, g2);
console.log('')

const objArray1 = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
];

const one1 = objArray[0];
console.log(one1);         // { id: 1, name: 'NolBu', age: 35 },

const [x1, y1, z1] = objArray1;
console.log(x1.name);
console.log(y1.name);
console.log(z1.name);
