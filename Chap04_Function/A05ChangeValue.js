console.log('---------------- Primary Type And Reference Type-----------------');
let numA = 100;
const numB = numA;

// 비교
console.log(numA == numB, numA === numB); // true, true

numA = 200;
console.log(numA == numB, numA === numB); // false, false
console.log('');

const objA = {
  name: 'NolBu',
  age: 30,
};

const objB = objA;
console.log(objB == objB, objA === objB); // true, true

objA.name = 'HungBu';
console.log(objB == objB, objA === objB); // true, true
console.log('');

// 값이 같은 새로운 객체
const objC = {
  name: 'HungBu',
  age: 30,
};

console.log(objA === objC);             // false
console.log(objA.name === objC.name);   // true
console.log('');

// 함수에 의한 값 변경
const num = 100;
const obj = {
  name: 'NolBu',
  age: 30,
};

const compare = (x, y) => {
  x = 200;
  y.name = '흥부';
}

console.log('----- 함수 호출 이전 -----');
console.log(num, obj);    // 100, { name: 'NolBu', age: 30 }

console.log('----- 함수 호출 이후 -----');
compare(num, obj);
console.log(num, obj);    // 100, { name: '흥부', age: 30 }
