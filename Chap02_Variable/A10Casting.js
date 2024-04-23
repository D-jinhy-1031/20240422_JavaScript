console.log('----------------- [160] Casting -----------------');
// 명시적 형 변환(타입 캐스팅)
let x = 10;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

// 문자로 변경
let str = String(x);            // x = String(x);
console.log(str, typeof str);

// boolean 타입으로 변경
// 변수의 값이 '', 0, -0, 0n, undefined, null, NaN 가 아니면 true
// 즉 변수에 위의 값 이외는 모두 true이다
let bool = Boolean(x);
console.log(bool, typeof bool);

// 숫자로 변경
let num = Number(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

// undefined, null은 타입 변경 불필요

// 각 Number, String, Boolean이 가진 메서드(함수)를 이용하여 캐스팅 가능
num = 123.45678;
str = num.toFixed(2);
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);
console.log('');

console.log('----------------- 암묵적 타입 변환 (강제 타입 변환) -----------------');
num = 100;
str = '' + num;
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

bool = true;
str = bool + '';    // 'true' 형태가 된다
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

str = '-100';
num = +str;         // num = str - 0;
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);
console.log('');

console.log('-----------------  global 함수 -----------------');
str = '12345.6789abc567';

// parseInt, parseFloat는 문자가 오기 전까지를 숫자로 변경
num = parseInt(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

num = parseFloat(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

// Number는 문자가 포함된 값을 변경할 수 없다
// JavaScript 숫자로 변경할 수 없는 경우는 NaN를 반환한다
num = Number(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);
console.log('');

// 빈 문자인 경우 Number는 0으로 치환. 나머지는 NaN
// NaN의 연산 결과는 NaN 이다
str = '';
num = Number.parseInt(str);     // ESNext에서는 Number 속성으로 변경됨
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

num = Number.parseFloat(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

num = Number(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);
console.log('');


// window는 브라우저 환경에서만 있는 객체. Node에는 대신 global이 존재
console.log(window);  // 브라우저에서는 정상 출력. Node에서는 에러

// ESNext
console.log(globalThis);  // 브라우저에서는 window. Node에서는 global

globalThis.alert('Hello World'); // Node에서는 alert 없음 => 에러
