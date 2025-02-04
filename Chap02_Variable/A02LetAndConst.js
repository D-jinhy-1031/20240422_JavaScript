/* eslint-disable no-redeclare */
/* eslint-disable no-var */
console.log('----------------- [105] let, const -----------------');
// 1. 기존 변수를 재 선언해도 에러 아님.
// 호이스팅 과정에서 1개만 만들어짐
var nickname = 'NolBu';
var nickname = 'HungBu';

{
  var nickname = 'BangJa';
  console.log('IN: ' + nickname);
}
console.log('out nickname: ' + nickname);
console.log('');

// let
// ES2015
// ES2015 이후 추가된 명령은 explore는 지원하지 않는다

// var과 동일하게 값에 의해 타입이 결정된다
let age = 10;
console.log('age: ' + age + ', typeof: ' + typeof age);

age = 'Hello';
console.log('age: ' + age + ', typeof: ' + typeof age);

// 1. 선언한 변수를 재 선언할 수 없다
// let age = 20;
// var age = 20;
// const age = 20;

// 2. 모든 { }에서 참조 범위(scope)를 갖는다
{
  // { }내부에서만 참조되는 변수를 지역변수라 한다
  const age = 300;
  console.log('in age: ' + age + ', typeof: ' + typeof age); // 300
}
console.log('out age: ' + age + ', typeof: ' + typeof age); // Hello
console.log('');

// 3. window 영역을 오염시키지 않는다
const alert = 'Hello';
// window.alert('Good Morning');     // window. 을 붙이지 않으면 에러
console.log(alert); // TDZ에 있는 alert 변수 호출
console.log('');

// const => 상수를 정의. 초기화 이후 변수의 값을 변경할 수 없다
// let와 마찬가지로 1, 2, 3번은 동일하다
const MY_PI = 1.14159;
console.log('MY_PI: ' + MY_PI + ', typeof: ' + typeof MY_PI);

// MY_PI = 100;     // 초기화 이후 값 변경 불가

// 주의점
// 2. 선언시 반드시 초기화가 필수다.
// const x;         // Error

// 3. 참조형 변수(리퍼런스) 변수의 요소값은 변경 가능
const arr = [10, 11];
arr[0] = 1000;
console.log(arr);

// arr = [20, 21];      // Error
// arr = 1;             // Error

const user = { name: '놀부', age: 10 };
user.name = '향단';
console.log(user);

// user = { name: 'A', address: 'B' };
// user = 2;
console.log('');      // dfdf
