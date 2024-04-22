console.log('----------------- [105] let, const -----------------');
// 1. 기존 변수를 재 선언해도 에러 아님. 
// 호이스팅 과정에서 1개만 만들어짐
var nickname = 'NolBu';
var nickname = 'HungBu';

{
  var nickname = 'BangJa';
  console.log('IN: ' + nickname)
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

// 2. 