console.log('----------------- Object.create - 직접 상속 -----------------');
const one = {};
console.log(one);

// null로 생성하면 [[Prototype]] 객체가 생성되지 않는다
const two = Object.create(null);
two.name = 'TWO';
two.getName = function () {
  return this.name;
}
console.log(two);

const three = Object.create(Array.prototype);
three[0] = 10;
three[1] = 20;
three.length = 2;
console.log(three);
console.log(three.join(' - '));
console.log('');

const four = Object.create(null, {
  name: { value: 'FOUR' },
  age: { value: 20, writable: true, configurable: false, enumerable: false }
});
console.log(four);
console.log(four.name);

const fourProp = {
  view() {
    console.log(`${this.name} / ${this.age}`)
  }
}
Object.setPrototypeOf(four, fourProp);
// Object.setPrototypeOf(four, Array.prototype);
four.view();
console.log(four);

