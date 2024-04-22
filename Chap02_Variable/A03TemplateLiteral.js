console.log('---------------- [088] Template Literals -----------------');
// ESNext
const userName = 'NolBu';
const age = 30;
const address = 'Seoul';

console.log(userName + '님의 나이는 ' + age + '입니다.');
console.log(userName + '님은 ' + address + '에 거주합니다');
console.log(userName + '님의 나이는 ' + age + '입니다.\n' + userName + '님은 ' + address + '에 거주합니다');
console.log('');

console.log(`${userName}님의 나이는 ${age}입니다`);
console.log(`${userName}님은 ${address}에 거주합니다`);
console.log(`${userName}님의 나이는 ${age}입니다.
${userName}님은 ${address}에 거주합니다`);
console.log('');

// 식이 올 수 있다
console.log(`10 + 20의 합은 ${10 + 20}입니다.`);

const arr = [10, 11];
console.log(`배열 arr의 첫번째 값은 ${arr[0]}이고 총 ${arr.length}개 있습니다`);
console.log('');


const x = 10;
const y = 20;

// 문자열과 변수가 연결되면 결과는 항상 문자열이 된다
// '10 + 20 = '
// '10 + 20 = ' + x => '10 + 20 = 10'
// '10 + 20 = 10' + y => '10 + 20 = 1020'
console.log(x + ' + ' + y + ' = ' + x + y + '입니다');
console.log(x + ' + ' + y + ' = ' + (x + y) + '입니다');
console.log(`${x} + ${y} = ${x + y}입니다`);

var a = 10;
var b = 20;
console.log(`${a} + ${b} = ${a + b}입니다`);