/* eslint-disable no-redeclare */
/* eslint-disable no-var */
console.log('---------------- [256] 함수 표현식 -----------------');
// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// test는 변수다. 메모리에 올라갈때 undefined 값으로 초기화 되어 있는 상태 => 함수가 아님
// 따라서 ()를 사용할 수 없다. undefined() 형태로 사용한 것이 된다.

// test();   // error

var test = function () {
  console.log('test function 01');
}
test();       // test function 01

// 여기서 변수의 값으로 다른 함수를 재 할당
var test = function () {
  console.log('test function 02');
}
test();       // test function 02
console.log('');

console.log('---------------- 함수 표현식 -----------------');
// 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
const one = function () {
  const result = 10 + 20;
  console.log(`10 + 20 = ${result}`);
}
one();

const two = function (x, y = 0) {
  x = x || 0;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
two(30, 40);

const three = function (x = 0, y = 0, symbol = '+', num) {
  const result = x + y;
  const value = result / 2;

  return value;
}
console.log(three(10, 20));
console.log('')

console.log('---------------- 표현식 방식의 함수 선언(익명함수) -----------------');
const factoral = function (num) {
  if (num === 1) return 1;
  else return factoral(num - 1) * num;
}
console.log(factoral(10));

console.log(factoral);        // 함수 내용이 문자로 표시된다 (값)
console.dir(factoral);        // 구조를 출력한다
console.log('');

console.log('---------------- 표현식 방식의 함수 선언(기명함수) -----------------');
// 기명함수의 이름은 함수 내부에서만 참조가 가능하다
const factoral1 = function fact(num) {
  if (num === 1) return 1;
  else return fact(num - 1) * num;
}
console.log(factoral1(10));

console.log(factoral1);        // 함수 내용이 문자로 표시된다 (값)
console.dir(factoral1);        // 구조를 출력한다
console.log('')

console.log('---------------- Function 생성자 함수 이용 -----------------');
// 마지막 문자열이 구현부분. 이전 문자는 모두 매개변수이다
const four = new Function('x', 'y', 'return x + y');
console.log(four(20, 30));
console.log('');

console.log(typeof one);      // function
console.log(typeof four);     // function


