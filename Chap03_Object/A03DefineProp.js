/* eslint-disable no-prototype-builtins */
console.log('----------------- [362] defineProperty -----------------');

const obj = {
  name: 'NolBu',
  age: 30,
};

// 객체의 각 속성이 어떤 형태로 작성되어 있는지 확인
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

obj.address = 'Seoul';
// 전체 속성 참조
console.log(Object.getOwnPropertyDescriptors(obj));

// address는 writable: true, enumable: ture, configuable: true
// 수정, 변경, 삭제가 가능한 속성이다
obj.address = 'Busan';
delete obj.address;
console.log(obj);
console.log('');


// 수정, 변경, 삭제가 안되도록 생성
Object.defineProperty(obj, 'address', {
  value: '서울',
  writable: false,        // 수정 불가
  configurable: false,    // 삭제 불가
  enumerable: false,      // for ~ in 구문에 노출 안함
});

obj.address = 'Busan';
delete obj.address;
console.log(obj);

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}
console.log('');

const user = {
  _name: '흥부',
  _age: 20,
  _address: 'Seoul',
  // 정의는 메서드 형태로 사용은 프로퍼티 형태로 사용
  get name() {
    return this._name;
  },
  set name(x) {
    this._name = x;
  },
  // 참조만 가능. _age에 직접 접근은 가능
  get age() {
    return this._age;
  },
}
// _가 붙은 속성은 리퍼런스에 공개 안했다는 가정..
console.log(user);

console.log(user.name, user.age);
user.name = '방자';
user.age = 1000;
console.log(user);

// 사용자가 잘못해서 삭제 => 삭제 된다
delete user.name;

user._age = 2000;
console.log(user);
console.log('');

// 이런식이면 사용자가 삭제할 수 없다
Object.defineProperty(user, 'address', {
  get() {         // value
    return this._address;
  },
  set(x) {        // writeable
    this._address = x;
  },
  enumerable: false,
  configurable: false,
});

console.log(user.address);
user.address = '전주';

delete user.address;      // 삭제 안됨
console.log(user);
console.log('');

// 일괄 정의
const hangDan = {}
Object.defineProperties(hangDan, {
  name: { value: '향단' },      // 정의하지 않은 속성은 모두 false다
  age: { value: 20, writable: true, enumerable: false, configurable: false },
  view: {
    get() {
      return `${this.name} / ${this.age}`
    },
    // 매개변수는 1개만 허용한다.
    set(x) {    // x => { name: 'XX', age: XX };
      this.name = x.name;
      this.age = x.age;   // age의 writable이 false면 변경 안됨
    },
    enumerable: false,
    configurable: false,
  }
});
hangDan.name = '안바뀜';
hangDan.age = 200;
console.log(hangDan.view);

hangDan.view = { name: 'XX', age: 300 };
console.log(hangDan.view);

// 구조 확인
console.log(Object.getOwnPropertyDescriptor(hangDan, 'name'));
console.log(Object.getOwnPropertyDescriptors(hangDan));
