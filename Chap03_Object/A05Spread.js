console.log('--------------- Object assign ---------------');
// 펼침 연산자
let objA = {
  name: 'NolBu',
  age: 30,
};

let objB = {
  address: 'Seoul',
  age: 100,
};

const objX1 = Object.assign(objA);
console.log(objA === objX1);   // true

// 앞의 객체이 붙어쓰기를 한다. 중복된 key가 있으면 덮어쓴다
const objX2 = Object.assign({}, objA);
console.log(objX2, objA === objX2);

const objX3 = Object.assign(objA, objB);
console.log(objX3);
console.log('');

// 문제점 objA 자체가 변경된다. 기존값에 뒤에 없는 객체가 추가된다
console.log(objA);
console.log('')


console.log('--------------- [627] spread Object ---------------');
objA = {
  name: 'NolBu',
  age: 30,
};

objB = {
  address: 'Seoul',
  age: 100,
};

const objC = objA;
console.log(objA === objC);     // true

// 배열, 유사배열, 객체의 요소값을 개별적으로 취급하게 펼쳐놓는 연산자 
// const objD = ...objA;    // objD = address: 'Seoul', age: 100;
const objC1 = { ...objA };   // objD = { address: 'Seoul', age: 100 };
console.log(objA === objC1);     // false

// 기존의 값을 복사 후, 중복되는 key의 값을 새로운 값으로 변경
const objC2 = { ...objA, name: '부산' };
console.log(objA, objC2)
console.log('');

// 기존의 값을 복사 후, 새로운 key 추가
const objC3 = { ...objA, address: '부산' };
console.log(objA, objC3)
console.log('');


const objD = {
  name: 'NolBu',
  age: 30,
  info: {
    address: 'Seoul',
    tel: '010-1234-5678',
  },
};

const objE1 = { ...objD };
console.log(objD === objE1);              // false
console.log(objD.info === objE1.info);    // true
console.log('');

// immer라는 라이브러리를 이용하면 쉽게 새로운 객체를 생성할 수 있다
const objE2 = {
  ...objD,
  info: {
    ...objD.info,
    address: 'ABC'
  }
}
console.log(objD === objE2);              // false
console.log(objD.info === objE2.info);    // false
console.log('');

// 뒤에 오는 age: 100 값으로 덮어씀
const objF = { ...objA, ...objB };
console.log(objF);

// objA의 값을 유지하면서 결합한 객체 생성
const objG = { ...objB, ...objA };
console.log(objG);
console.log('')

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