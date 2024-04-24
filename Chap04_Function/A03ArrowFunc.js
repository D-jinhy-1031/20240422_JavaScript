console.log('--------------------- [317] Arrow Function ---------------------');

// 매개변수의 기본값 지정 가능
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

/*
// 선언문 방식은 Arrow 함수로 변경할 수 없다
onAdd = (x, y) => {
  return `${x} + ${y} = ${x + y}`;
}
*/
console.log(onAdd());         // undefined + undefined = NaN
console.log(onAdd(10, 20));
console.log('');

const onAdd1 = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
}
const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};
onAdd1(10, 20);
console.log(onMin(10, 20));
console.log('');

// ESNext
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
}
const two = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
one(20, 20);
console.log(two(20, 20));
console.log('');

// {} 구문 안에 구문이 1개만 있는 경우 { }과 return을 생략하고 한줄에 기술
// 한 줄에 기술하는 경우 => 뒤가 값이면 return을 붙여서 값을 리턴
// 명령문인 경우는 리턴하지 않고 실행.
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} - ${y} = ${x - y}`;

three(30, 20);
console.log(four(30, 20));
console.log('');

// ** 연산자 => ESNext
// 매개변수가 1개인 경우는 ()를 생략할 수 있다. 2 ** 3 => 2 * 2 * 2
// 매개변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.
// 매개변수를 초기화 하는 경우도 ()로 묶어야 한다
const five = x => 2 ** x;
console.log(five(3));
console.log('');

// 매개변수에 초기화가 가능
const six = (x = 0, y = 0) => console.log(`${x} + ${y} = ${x + y}`);
six();
six(40, 20);
console.log('')

// 즉시 실행 함수로도 이용 가능 => A08IIFE 참조
// ** Arrow 함수는 this가 존재하지 않는다 Chap05의 A09에서 참조
