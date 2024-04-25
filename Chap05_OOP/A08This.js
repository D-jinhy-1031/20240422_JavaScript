/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
console.log('---------------- Object this -----------------');
const obj = {
  name: 'NolBu',
  age: 20,
  display() {
    console.log(`${this.name} / ${this.age}`);
  },
};

// method를 호출한 객체. 즉 .앞의 객체
obj.display();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

// nolbu가 생성되면 오브젝트 객체다
const nolbu = new Person('Nolbu', 20);
const hangdan = new Person('향단', 20);

nolbu.display();
hangdan.display();
console.log('');

// global 영역에 선언된 함수. 호출 시 지정한 객체가 없다. 함수명만 호출
// 이 경우 앞에 window.one() 형태이다 - 호이스팅 발생되어 window 영역에 선언된
function one() {
  console.log(this);      // this 대신 globalThis 사용
}
window.one();   // one();

// let, const는 TDZ 이라는 곳에 정의된다 -> window에 존재하지 않는다
const two = function () {
  console.log(this);
}
two();      // window.two()는 에러
console.log('');


function three() {
  console.log(this.name)
}
const user = {
  name: 'USER',
  three,
}

// this는 누가 호출했느냐에 따라 this의 참조값이 변경된다
// 이 경우는 user. 으로 호출했으므로 three 내부의 this는 user가 된다
user.three();     // USER
