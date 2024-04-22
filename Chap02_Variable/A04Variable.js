console.log('----------------- [079] Type -----------------');
// 변수의 기본형 
const intValue = 10;
const floatValue = 10.25;
const strValue = 'Hello';
const boolValue = true;     // or false
const unValue = undefined;
const nullValue = null;     // type이 object이지만 기본형으로 취급한다

const symbolValue = Symbol(); // ES2015
const bitIntValue = 10n;      // ESNext(ES6)

console.log('intValue: ' + intValue + ', typeof: ' + typeof intValue);
console.log('floatValue: ' + floatValue + ', typeof: ' + typeof floatValue);
console.log('strValue: ' + strValue + ', typeof: ' + typeof strValue);
console.log('boolValue: ' + boolValue + ', typeof: ' + typeof boolValue);
console.log('unValue: ' + unValue + ', typeof: ' + typeof unValue);
console.log('nullValue: ' + nullValue + ', typeof: ' + typeof nullValue);

console.log(symbolValue, typeof symbolValue);
console.log(bitIntValue, typeof bitIntValue);
console.log('');

// 위의 타입 이외는 전부 참조형 변수(리퍼런스)
const arr1 = [10, 11];
const user1 = { name: 'A', age: 1 };
const today = new Date();
console.log(arr1, typeof arr1);
console.log(user1, typeof user1);
console.log(today, typeof today);
console.log('');


// escpe 문자
console.log('i\'m a boy');
console.log("i\"m a boy");
console.log('i \\ m a boy');

// \t는 tab, \n은 줄바꿈
console.log('i \t\t m a boy');
console.log('i \n\n\n m a boy');
console.log('');


const uniGA = '\uAC00';
console.log(uniGA, typeof uniGA);
