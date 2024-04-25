console.log('----------------- Instanceof -----------------');
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

const num = 10;
// number, string, boolean, undefined, null, function, symbol
console.log(typeof num);      // number
console.log(typeof nolbu);    // object
console.log('');

// const num = new Number(10);
console.log(num instanceof Number);   // false
console.log(nolbu instanceof Person); // true
console.log(nolbu instanceof Object); // true
console.log('');

const arr = [10, 11];
console.log(arr instanceof Array);    // true
console.log(arr instanceof Object);   // true
console.log(arr instanceof Person);   // false
console.log('');

console.log(arr.constructor === Array);     // true
console.log(nolbu.constructor === Person);  // true
console.log('');

console.log('----------------- in -----------------');
// 지정한 객체에 해당 속성(key 이름)이 있는지 여부
// for(key in 객체명)
console.log('name' in nolbu);       // true
console.log('address' in nolbu);    // false

// prototype chain을 거슬러 올라가면서 체크한다
console.log('hasOwnProperty' in nolbu);   // true
console.log('');

const users = {
  nolbu: new Person('A', 10),
  hungbu: new Date(),
}
const key = 'nolbu';
if (users[key] instanceof Person) {
  users[key].display();
}
console.log('');

console.log(nolbu);