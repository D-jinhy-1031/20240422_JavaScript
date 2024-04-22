console.log('----------------- [148] Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

// and
result = x > y && x > z;
console.log('(x > y) && (x > z) => ' + result);
console.log('');

// or
result = x > y || x > z;
console.log('(x > y) || (x > z) => ' + result);
console.log('');

// not
console.log(result, !result);
console.log('');

// 연산자로 사용. 118 Page
// JavaScript에서는 변수에 다음의 값이 있는 경우는 false다. react에서는 0은 제외
// '', 0, undefined, null, NaN, false
var age = undefined;  // ''
result = (age) ? 'TRUE' : 'FALSE';
console.log('age = ""', result);
console.log('');

console.log('----------------- &&, || 를 연산자로 사용 -----------------');
// age의 값이 '', 0, undefined, null, NaN, false 라면 false 취급되어 || 뒤를 체크(실행)
// 따라서 10 값이 result에 대입
// age의 값이 '', 0, undefined, null, NaN, false 이외의 어떤 값이면 (값이 있으면 true)
// 따라서 age의 값을 result에 대입
result = age || 10;
console.log(result);

result = age && 10;
console.log(result);

// react
age = 10;
console.log(age && `<div>Hello World ${age}</div>`);

// 객체에서 사용
// ??, ? 