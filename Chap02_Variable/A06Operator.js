console.log('----------------- [147] Comparison Operator -----------------');

var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result);

// x가 y보다 크거나 같다
// >, <, >=, <=, 
result = x >= y;
console.log('x > y => ' + result);
console.log('');

// 동등 비교 => 사용하지 말자
// == (같음), !=(같지 않다)
result = x == y;
console.log('x == y => ' + result);

result = x != y;
console.log('x != y => ' + result);

// 자동 캐스팅. 연산에서는 숫자 아닌 값을 숫자로 변환해서 비교를 한다
// true => 1, false => 0
const check = true;
const one = 1;
console.log('check == one', check == one);    // true

// 문자 '1'을 숫자 1로 변경 후 비교
const str = '1';
console.log('str == one', str == one);        // true
console.log('');

// 일치 비교
var check1 = true;
var one1 = 1;

// ===은 타입부터 체크한다. 비교하는 두개 이상의 타입이 다르면 즉각 false 반환
// 즉 자동 캐스팅 안함
result = check1 === one1;
console.log('true === 1 => ' + result);

const str1 = '1';
console.log('str1 === one1 => ' + (str1 === one1));
console.log(`str1 === one1 => ${str1 === one1}`)


console.log('----------------- 3항 연산자-----------------');
var name = 'NolBu';
