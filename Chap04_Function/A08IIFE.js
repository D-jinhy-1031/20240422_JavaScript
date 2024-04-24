console.log('----------------- [298] 즉시 실행 함수 -----------------');
// Immediately Invoked Function Expression
(function () {
  console.log(`즉시 실행 함수 1`);
})();

(function () {
  console.log(`즉시 실행 함수 2`);
}());
console.log('');

// Global 영역을 오염시키지 않는다.
// namespace
const $ = (function () {
  const alert = 'Hello World';
  let num = 0;

  const increase = (x) => {
    num = num + x;
  }
  const decrease = () => {
    --num;
  }
  const getNumber = () => {
    return num;
  }
  const getAlert = () => {
    return alert;
  }
  return {
    increase,
    decrease,
    num: getNumber,
    alert: getAlert,
  }
})();
console.log($);
$.increase(2);
$.increase(2);
$.decrease();
console.log($.num());
console.log($.alert());
console.log('');

const one = {};
(function () {
  const alert = 'Hello World';
  let num = 0;

  const increase = (x) => {
    num = num + x;
  }
  const decrease = () => {
    --num;
  }
  const getNumber = () => {
    return num;
  }
  const getAlert = () => {
    return alert;
  }

  Object.assign(one, { increase, decrease, num: getNumber, alert: getAlert })
})();
console.log(one);
one.increase(2);
one.increase(2);
one.decrease();
console.log(one.num());
console.log(one.alert());
console.log('');

// 즉시 실행 함수 종료 시작 앞에, 종료 뒤에 ;를 붙인다.
(function () {
  console.log(`즉시 실행 함수 1`)
})();     // ;가 없으면 에러 발생
(function () {
  console.log(`즉시 실행 함수 2`)
})();

// Arrow 함수로도 작성 가능
(() => {
  console.log(`즉시 실행 함수 3`)
})();

