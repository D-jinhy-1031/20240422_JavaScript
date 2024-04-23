console.log('---------------- Object -----------------');
const x = 10;
const str = 'Hello World';

// ESNext
const obj = {
  // 속성명과 값을 참조하는 변수명이 다른 경우 키 생략 가능
  x,
  str,
};
console.log(obj);
console.log('');

// ESNext. 계산된 프로퍼티 이름
const user = {};
const name = 'Hello';
for (let i = 1; i <= 5; i++) {
  user[name + i] = `value: ${i * 10}`;
}
console.log(user);
console.log('')

// ES6 Method
const nolbu = {
  name: 'NolBu',
  age: 20,
  // method
  display: function () {
    console.log(`${this.name} / ${this.age}`);
  },
  // ESNext. vue에서 자주 사용됨.
  view() {
    console.log(`${this.name} / ${this.age}`);
  }
};
nolbu.display();
nolbu.view();

const hungbu = {
  name: '놀부',
  age: 20,        // ESNext. 마지막 요소에 , 붙이는 것을 허용한다
}
console.log(hungbu);