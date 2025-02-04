console.log('----------------- [289] Closure -----------------');

let num = 0;

const incOne = function () {
  return ++num;
};
console.log(incOne());
console.log(incOne());
num = 100;
console.log(incOne());
console.log('');

const incTwo = function () {
  let num = 0;
  return ++num;
};
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');

// closure
// 함수 내부에 선언된 변수를 함수 외부에서 참조(조작) 할 수 있도록 만들어진 구조
// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다
// 클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다.
const incThree = function (value) {
  let x = value;

  const increase = function () {
    return ++x;
  }
  return increase;
};
const inc = incThree(0);

let value = inc();
console.log(value);     // 1

value = inc();
console.log(value);     // 2

console.log(inc());     // 3
// console.log(x);
console.log('');

const inc2 = incThree(10);
console.log(inc2());    // 11
console.log(inc2());    // 12
console.log(inc());     // 4
console.log(inc2());    // 13
