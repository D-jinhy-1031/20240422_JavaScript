/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-invalid-this */
/* eslint-disable no-var */
console.log('---------------- this -----------------');
// 객체 내부 메소드 내부의 함수.
var count = 100;      // 일부로 var 변수로 선언

const myObj = {
  count: 0,
  visit() {
    // 함수 내부에 선언된 중첩함수에서 this는 무조건 window(globalThis)다.
    function inner(x) {
      this.count = this.count + x;
      console.log(this.count);
    }

    inner(2);
  },
};
myObj.visit();
console.log('');

console.log('--------------- 편법 _this ---------------');
count = 100;

const one = {
  count: 0,
  visit() {
    // console.log(this.count);

    // _this는 변수
    const _this = this;    // 여기까지 this는 one 객체

    function inner(x) {
      // 변수의 참조범위 scope chain을 따라 올라가 that을 참조
      // 이 that은 visit 메서드의 this다
      _this.count = _this.count + x;
      console.log(_this.count);
    }

    inner(2);
  },
};
one.visit();
console.log('');

console.log('--------------- [303] call, apply, bind ---------------');
count = 100;

const two = {
  count: 0,
  visit() {
    function inner(x, y) {
      this.count = this.count + x;
      console.log(this.count);
    }
    // 함수명.call(this로 참조할 객체, 매개변수, 매개변수, ...)
    inner.call(two, 2, 3);

    // 함수명.apply(this로 참조할 객체, [매개변수, 매개변수, ...])
    inner.apply(two, [2, 3]);

    // const 새로운함수명 = 함수명.bind(this로 참조할 객체);
    // 생성된 새로운 함수에 this가 설정한 참조 객체로 변경된 새로운 함수가 생성
    const newInner = inner.bind(two);
    newInner(3, 5);
  },
};
two.visit();
console.log('');

console.log('--------------- copy ---------------');
const person = {
  name: 'NolBu',
  display: function () {
    console.log(this.name);
  },
};

const emp = { name: 'HungBu' };
// 값으로 대입 ()를 쳐서 실행하면 실행 후 return 값인 undefined가 리턴된다
emp.display = person.display;
emp.display();

// call, apply를 사용하면 한방에 해결
person.display.call(emp);
console.log('');

console.log('--------------- Arrow 함수 내부에서 this  ---------------');
globalThis.name = 'Window';
globalThis.age = 1000;

const hungbu = {
  name: '흥부',
  age: 10,
  display: function () {
    console.log(`display: ${this.name} / ${this.age}`);
  },
  // Arrow 함수는 this가 존재하지 않는다.
  // Arrow 함수는 자신이 포함된 객체의 this를 자신의 this로 사용
  // 오브젝트 객체 내부에 메서드에서는 Arrow 함수 사용에 주의
  // 내부 로직에 this를 참조하지 않는 경우만 사용
  view: () => {
    console.log(`view: ${this.name} / ${this.age}`);
  },
  show: () => {
    console.log('Hello World');
  }
};
hungbu.display();
/*window.*/ hungbu.view();
hungbu.show();

console.log(globalThis)
