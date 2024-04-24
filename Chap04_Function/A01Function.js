console.log('---------------- [256] 함수 선언문 -----------------');
test();

// 호이스팅
// 변수와 함수는 먼저 메모리에 올리는 작업을 한다
// var => window
// let, const => TDZ
// 함수 선언문 방식 => window
// 변수는 초기화가 undefined로 초기화
// 함수는 완벽하게 구현된 상태로 메모리에 올라간다
function test() {
  console.log('test function');
}
console.log('')

console.log('---------------- 선언문 방식의 함수 선언 -----------------');
// 일반 함수
function one() {
  console.log('Hello World');
  console.log('Good Morning');
}

function one1() {
  const result = 10 + 20;
  console.log(`10 + 20 = ${result}`);
}
// console.log(one);        // 문자열(값)
one();
console.log('----- one 종료 ------');
one1();
console.log('');

console.log('------ 매개변수가 있는 함수 -----')
// 함수의 () 내부에 함수 내부에서만 사용할 수 있는 변수를 정의 할 수 있다
// 이 변수는 호출하는 곳에서 값을 전달하고 전달된 값을 함수 내부에서 사용할 목적

/**
 * Adds two numbers together.
 * @param {int} x The first number.
 * @param {int} y The second number.
 */
function two(x, y) {
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}

// ESNext
// 매개변수의 초기값 할당이 가능.
function two1(x, y = 0) {
  x = x || 0;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}

one();
one1();
two(20, 30);
two(30, 40);

// 함수는 매개변수를 체크하지 않는다
// 정의하는 함수 내부에서 에러가 발행하지 않도록 구현 할 필요가 있다
two1();
two1(10);
two1(30, 2);
two1(1, 2, 3, 4, 5);    // 남는 매개변수는 무시
console.log('');


console.log('------ 반환값이 있는 함수. -----');
function three(x = 0, y = 0, symbol = '+', num) {
  const result = x + y;
  const value = result / 2;

  // 함수를 호출한 곳으로 이 값을 전달한다
  // 즉 함수가 실행된 후에는 함수 호출구문이 리턴된 값으로 치환된다
  return value;
  /*
  switch(symbol) {
    case '+':
      value = result + num;
      break;
    case '-':
      value = result - num;
      break
  }
  */
}
// three(10, 20);      // three = 15;
console.log(three(10, 20));

// 함수의 실행구문 자체가 값을 가진 변수이므로 대입 가능
const result = three(10, 20);
console.log(result);

let value = result + 100;
console.log(value);

value = result - 5;
console.log(value);

console.log(three(20, 30) / 2);
console.log('');


console.log('------ 반환값이 없는 함수. => undefined 확인 -----');
// 모든 함수는 반환값이 있다. return 구문이 없으면
// return undefined가 생략된 형태다
function four(x = 0, y = 0) {
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
  // return undefined;        // 이게 생략된 형태다
}
value = four(5, 6);
console.log(value);           // undefined
console.log('');

two(50, 50);