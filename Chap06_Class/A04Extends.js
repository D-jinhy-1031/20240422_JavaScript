console.log('---------------- 상속 -----------------');

class One {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}

// 부모와 생성자가 동일한 경우는 생략 가능
class OneSub extends One { }

const one = new OneSub(10, 20);
console.log(one);
one.info();
console.log('')


// 매개변수의 수가 다르면 constructor를 생략할 수 없다
class Two {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}
class TwoSub extends Two {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  info() {
    console.log(`${this.x} / ${this.y} / ${this.z}`);
  }
}
const two = new TwoSub(10, 20, 30);
console.log(two);
two.info();
