/* eslint-disable no-new-wrappers */
console.log('---------------- Number -----------------');
let str = '123.56';

let num = Number(str);
console.log(num, typeof num);

// ESNext
num = Number.parseInt(str);
console.log(num, typeof num);

num = Number.parseFloat(str);
console.log(num, typeof num);

num = new Number(10);
console.log(num);

str = num.toFixed(2);
console.log(str, typeof str);
console.log('');

console.log('---------------- Math -----------------');
console.log(Math.PI);

num = 1234.06789;

// 반올림
let result = Math.round(num);
console.log(result, typeof result);

// 무조건 올림
result = Math.ceil(num);
console.log(result, typeof result);

num = 1234.96789;

// 무조건 버림
result = Math.floor(num);
console.log(result, typeof result);

// 랜덤값 0 ~ 0.9999999999999 (16자리)
result = Math.random();
console.log(result, typeof result);

result = Math.ceil(Math.random() * 5);
console.log(result, typeof result);
console.log('');

console.log('---------------- Date  -----------------');
// const today = new Date('2025', '11', '25');
const today = new Date();

result = today.toLocaleDateString();
console.log(result, typeof result);

result = today.toLocaleTimeString();
console.log(result, typeof result);

result = today.toLocaleString();
console.log(result, typeof result);
console.log('');

const year = today.getFullYear();
const month = today.getMonth() + 1;     // 1월이 0이다
const date = today.getDate();
const day = today.getDay();             // 요일. 0이 일요일
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
const ms = today.getMilliseconds();     // 1000이 1초

const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
console.log(`${year}-${month}-${date} ${yoil[day]} ${hour}:${min}:${sec} ${ms}`);
console.log('');

// 1970-01-01 00:00:00 현재까지의 경과시간을 ms로 환산해서 반환
const mills = Date.now();
console.log(mills);
console.log('');


console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';
// const str = new String(' abc 123 DEF 456 ');

// 앞, 뒤의 공백도 문자로 취급된다
result = str.length;
console.log(result, typeof result);

// 좌우의 공백문자를 제거한다
const newStr = str.trim();
console.log(newStr.length, str.length);

if (newStr.trim().length === 0) alert('1글자라도 입력해주세요..');

// 글자 추출
// abc 123 DEF 456
result = newStr.substring(5);     // 5번째부터 끝까지 => 23 DEF 456
console.log(result);

result = newStr.substring(5, 10);     // 5번째부터 끝까지 => 23 DE
console.log(result);

result = newStr.substr(5, 4);         // 5번째부터 3개 추출 => 23 D
console.log(result);

result = newStr.replace('123', '숫자');         // 매칭되는 문자를 변경
console.log(result);                  // abc 숫자 DEF 456

result = newStr.split(' ');           // 지정한 문자를 기준으로 분리해서 배열로 반환
console.log(result);                  // ['abc', '123', 'DEF', '456']

result = newStr.includes('456');      // 포함여부
console.log(result);

result = newStr.indexOf('456');       // 위치값. 없으면 -1
console.log(result);                  // 12
