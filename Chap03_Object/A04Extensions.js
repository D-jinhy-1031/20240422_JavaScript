console.log('----------------- [374] Object internal Method -----------------');
// 이미 생성된 객체를 변경

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
const one = { name: 'NolBu', age: 30 };
console.log(Object.isExtensible());    // 확장 가능하니 => true

Object.preventExtensions(one);
console.log(one.name);      // 참조 가능
one.age = 1000;             // 수정 가능
delete one.name;            // 삭제 가능

one.address = 'Seoul';      // 추가 안됨
console.log(one);
console.log('');

// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
const two = { name: 'NolBu', age: 30 };
console.log(Object.isSealed(two));    // false

Object.seal(two);
console.log(two.name);      // 참조 가능
two.age = 1000;             // 수정 가능
delete two.name;            // 삭제 X

two.address = 'Seoul';      // 추가 X
console.log(two);
console.log('');

// 객체 동결. 읽기만 가능하다
const three = { name: 'NolBu', age: 30 };
console.log(Object.isFrozen(three));      // false

Object.freeze(three);
console.log(three.name);      // 참조 가능
three.age = 1000;             // 수정 X
delete three.name;            // 삭제 X

three.address = 'Seoul';      // 추가 X
console.log(three);
console.log('');
