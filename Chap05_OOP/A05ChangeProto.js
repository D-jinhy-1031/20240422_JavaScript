console.log('---------------- [692] Change Prototype -----------------');
const one = {
  name: 'One',
  display: function () {
    console.log(this.name);
  },
};

const two = {
  name: 'Two',
};

const three = {};

console.log(two.__proto__ === Object.prototype);

// two의 부모를 one 객체로 변경 => prototype도 객체다
// 자신의 부모를 동적으로 변경
Object.setPrototypeOf(two, one);
console.log(Object.getPrototypeOf(two) === Object.prototype);
console.log(two);
two.display();        // Two
console.log('');

Object.setPrototypeOf(three, two);
console.log(three);
three.display();      // Two
console.log('')

console.log('---------------- 생성자의 prototype 동적 변경 확인 -----------------');
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// constructor가 생성한 prototype 객체가 아님
Person.prototype = {
  constructor: Person,
  view() {
    console.log(`view: ${this.name} / ${this.age}`);
  },
  getName() {
    return this.name;
  }
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
console.log(nolbu);

nolbu.display();
nolbu.view();
console.log(nolbu.getName());
console.log('')

console.log('---------------- 인스턴스의 prototype 동적 변경 확인 -----------------');
function Employee(name, age) {
  this.name = name;
  this.age = age;
}
Employee.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const oneA = new Employee('A', 10);
const oneB = new Employee('B', 20);

oneA.display();
oneB.display();

const empProto = {
  constructor: Employee,
  view() {
    console.log(`view: ${this.name} / ${this.age}`);
  },
  getName() {
    return this.name;
  }
}

// oneA의 prototype만 변경
Object.setPrototypeOf(oneA, empProto);

console.log(oneA);
console.log(oneB)