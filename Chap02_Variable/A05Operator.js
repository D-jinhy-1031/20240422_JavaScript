console.log('----------------- [128] Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

// 곱하기
result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

// 나누기 => 몫
result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

// 나누기 => 나머지
result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');

console.log('----------------- 단항 산술 연산자. ++, -- -----------------');
let count = 0;

// count 변수에 1씩 증가하고자 한다
count = count + 1;
console.log(count);   // 1

count++;        // count = count + 1;와 동일
console.log(count);   // 2

++count;
console.log(count);   // 3

// 값이 대입되는 경우는 주의
count = 0;

// ++ 변수 뒤에 있는 경우는 선 대입, 후 증가
// result에 count의 0 값이 먼저 대입된 후에 count가 1 증가된다
result = count++;
console.log(result, count);   // 0, 1

count = 0;
// 먼저 count 증가 후 그 결과를 result에 대입한다
result = ++count;
console.log(result, count);   // 1, 1

// 단항 산술 연산자는 증가인 ++과 1 빼기인  -- 만 존재한다
console.log('');


console.log('----------------- 할당 연산자. +=, -=, *=, /=, %= -----------------');
// 자기 자신에 1씩 증가, 감소 => ++, --를 사용
// 자기 자신에 1 이상 연산을 간단히 표현
count = 0;
count = count + 2;

count = 0;
count += 10;     // count = count + 10;
console.log(count);

count %= 3;
console.log(count);


// ES2015
const money = 10_000_000;
console.log(money);

const bytes = 0x09_67_89;
console.log(bytes);

const bits = 0b0001_0011_1111;
console.log(bits);

const floatValue = 1.234_567_89;
console.log(floatValue);
console.log('');

// 이전부터 발생한 문제
// 외부 라이브러리 이용
// 각 값을 * 10으로 정수로 변환 후 연산. 이후에 / 10으로 소수점으로 변환
const result1 = 0.3 - 0.2;
const result2 = 0.2 - 0.1;
console.log(result1, result2);    // 0.09999999999999998    0.1

console.log(result1 === result2); // false