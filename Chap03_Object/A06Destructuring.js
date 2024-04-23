console.log('---------------- Object DeStructuring -----------------');
/*
  ES6 비 구조화 할당(DeStructuring)
  배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/
const obj = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
  getName: function () {
    return this.name;
  },
};
// const name = obj.name;
// const age = obj.age;

// 선언하는 변수는 객체의 key 이름과 동일한 변수로 선언해야 한다
const { name, age, address, getName } = obj;
console.log(name, age, address);
console.log(getName());       // this가 변경되서 아무것도 출력 안됨

// 이미 선언된 변수가 있다면 별칭을 사용한다
const { name: nickname, age: num } = obj;
console.log(nickname, num);

// 기본 값을 할당할 수 있다
// 객체에 참조하는 속성이 없는 경우 에러가 아닌 undefined가 출력된다
const { name: x = 'unknown', age: y = 0, count = 1 } = obj;
console.log(x, y, count);
console.log('');


console.log('---------------- [636] Arrat DeStructuring -----------------');
const arr = [10, 11, 100, 101, 1000, 1001];
// 배열은 []로 받아 사용
// 배열은 key가 없으므로 중복되지 않는 변수명으로 선언해서 받는다
// const a = arr[0];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

// 건너띄어서 받을 수도 있다
const [a1, , , d1, , f1] = arr;
console.log(a1, d1, f1);

// 기본값 할당 가능
// 배열도 없는 요소값을 참조하면 에러가 아닌 undefined가 출력된다
console.log(arr[100]);    // undefined

// 값이 있으면 있는 값을 없으면 기본값을 사용한다. 기본값 안주면 undefined
const [, , , d2 = 1, e2 = 2, f2 = 3, g2 = 4] = arr;
console.log(d2, e2, f2, g2);
console.log('')

const objArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
];

const one = objArray[0];
console.log(one);         // { id: 1, name: 'NolBu', age: 35 },
console.log(one.id, obj.name, obj.age);

const [x1, y1, z1] = objArray;
console.log(x1.name);
console.log(y1.name);
console.log(z1.name);
