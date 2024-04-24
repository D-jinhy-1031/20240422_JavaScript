/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
console.log('---------------- Scope -----------------');
// var로 선언된 변수는 함수 이외의 { } 스코프를 갖지 않는다.
var i = 10;
if (true) {
  var i = 20;
  console.log('If block=> ', i);    // 20
}
console.log('Global=> ', i);        // 20

// for 순환을 위해 선언한 k 변수가 { }에 참조범위를 갖지 않으므로 외부에서 참조 가능
for (var k = 0; k < 3; k++) { }
console.log('Global For=> ', k);
console.log('');

// 함수는 { } 스코프를 갖는다
// 즉 var로 선언한 변수는 함수 내부에서만 { }에 대한 개별 참조를 갖는다
// 이를 지역변수라 한다
var str = 'Global';

function out() {
  var str = 'Local';          // 함수의 } 를 만나면 삭제되는 지역변수다
  console.log('Function IN: ', str);
}
out();
console.log('Function OUT: ', str);
console.log('');

// 197 Page
// 1. arguments 객체 생성
// 2. scope chian 설정 => 
//  자신의 { } 영역에 참조하고자 하는 변수가 없는 경우 어떠한 경로로 
//  거슬러 올라가면서 변수를 참조할 것인가를 결정
// 내부 변수 정의
// this 값 결정
// 실행
const x = 'Global X';
const y = 'Global Y';

function outer() {
  const z = 'Outer Local z';

  function inner() {
    const y = 'Inner Y';
    console.log(x);
    console.log(y);
    console.log(z);
  }
  inner();
}
outer();
console.log('');

function foo() {
  const x = 10;
  bar();
}

// 이 함수가 만들질때 자신의 상위 참조({ })가 어떻게 참조될 것인지 확정된 상태로
// 함수가 정의된다. => 어디서 호출되던 선언된 당시의 참조 범위를 참조해 변수 출력
function bar() {
  console.log(x);
}
bar();          // Global X
foo();          // Global X

