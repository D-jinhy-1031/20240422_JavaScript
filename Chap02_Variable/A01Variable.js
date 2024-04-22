console.log('---------------- [072] Variable -----------------');
// 변수는 식별자라고도 한다.
// ES2015(ES6) 이전에 변수를 선언하는 키워드
// 변수는 타입이 없음. 값에 의해 타입이 결정된다
var x = 10;
var y = 'Hello';

var app = document.getElementById('app');
app.innerText = 'X의 값: ' + x;

console.log(y);
console.log('');

console.log('X: ' + x + ', typeof: ' + typeof x);
console.log('Y: ' + y + ', typeof: ' + typeof y);

y = true;
console.log('Y: ' + y + ', typeof: ' + typeof y);

// 참조형(리퍼런스) 변수.
y = new Date();
console.log('Y: ' + y + ', typeof: ' + typeof y);
console.log('');


console.log('---------------- [074] hosting -----------------');
// JavaScript var로 선언된 변수와 함수를 먼저 window 영역에 올리는 작업을 한다
// 이때 변수는 undefined로 초기화, 함수는 완성된 상태로 초기화 된다
console.log('age: ' + age + ', typeof: ' + typeof age);   // undefined
var age = 30;

console.log(window);

// window 영역에 선언된 기존 변수, 함수를 덮어쓸 수 있다
var alert = 'Hello';
// alert('Good Morning');       // Error

