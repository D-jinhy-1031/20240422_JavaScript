console.log('---------------- [307] 중첩함수, 콜백함수 -----------------');

// 중첩함수
function outer() {
  // 함수 내부에 선언된 변수는 함수 내부의 { } 내부에서만 참조 가능하다
  const x = 10;

  const inner = function (y) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }

  inner(20);
}
outer();
// inner();  // 함수 내부에 선언된 변수는 함수 내부의 { } 내부에서만 참조 가능하다
// console.log(x);
console.log('');

/*
함수는 일급객체
  1. 리터럴에 의해 생성 가능
  2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
  3. 함수의 인자나 리턴 값으로 사용 가능
  4. 동적으로 프로퍼티 생성 가능 => 함수도 객체다
*/

function outer2(x) {
  console.log('outer 함수 호출', x);
}
// 4. 동적으로 프로퍼티 생성 가능 => 함수도 객체다
outer2.greet = 'Good Morning';
console.dir(outer2);
console.log(outer2.greet);
console.log('');

console.log('----------- 함수의 인자나 리턴 값이 될 수 있다. -------------');



console.log('---------------- [604] Promise -----------------');
