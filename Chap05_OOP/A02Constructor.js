/* eslint-disable new-cap */
console.log('---------------- function -----------------');
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

function onMin(x, y) {
  return { result: x - y };
}

// 일반 함수를 new로 호출한 경우 리턴값이 기본형이면 빈 객체({})가 리턴된다
const one = new onAdd(10, 20);
console.log(one);

// 일반 함수를 new로 호출한 경우 리턴값이 오브젝트면 반환한 오브젝트가 리턴된다
const two = new onMin(10, 20);
console.log(two);
console.log('');

console.log('---------------- constructor -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const nolbu = new Person('NolBu', 30);
const hungbu = Person('HungBu', 20);
console.log(nolbu);
console.log(hungbu);      // undefined
console.log('')

// new.target => ESNext
// new로 호출되면 생성자 함수, 일반 함수로 호출되면 undefined
function Employee(name, age) {
  // console.log(new.target);
  if (!new.target) {
    return new Employee(name, age);
  }
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const bangJa = Employee('BangJa', 18);
console.log(bangJa.info());

// scope safe constructor. 스코프 세이프 생성자 패턴
// this instanceof Student => this가 Student에 의해 생성된 객체면 true
function Student(name, age) {
  // console.log(this instanceof Student);
  if (!(this instanceof Student)) {
    return new Student(name, age);
  }
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const hangdan = Student('hangdan', 18);
console.log(hangdan.info());
