// 자바스크립트 한 줄 주석

/*
  여러 줄 주석
  이 내부는 모두 주석문으로 처리된다.
*/

console.log('이 텍스트는 브라우저의 검색 - console 탭에 표시된다');

var x = 10;
console.log(x);     // 변수의 값 출력(확인);
console.log("");    // 한줄 띄우기

console.log('log: 로그 문구');
console.info('info: 안내 문구');
console.warn('warn: 경고 문구');
console.error('error: 에러 문구');
console.log("");

console.time("시간 체크");
for (var i = 1; i < 10000000; i++) { }
console.timeEnd("시간 체크");     // 시간 체크: 15.125 ms. 1000ms => 1s

// 구조
function onAdd() {
  return 10 + 20;
}
console.log(onAdd);
console.dir(onAdd);
console.log("Hello World");
console.log('');

// 자바스크립트 문자
// 문자는 싱글(') 또는 더블(")로 묶어야 한다.
// 둘 중에 어떤 것을 이용해도 된다. 시작과 종료가 동일해야 한다
console.log('Good Morning');
console.log("Good Afternoon");

// 문자와 변수를 연결하는 경우는 + 연산자를 이용한다
// 추후 ES1015의 "템플릿 문자"로 변경
var nickname = '놀부';
var age = 20;
console.log('이름은 ' + nickname);
console.log('이름은 ' + nickname + '나이는 ' + age);
console.log('');

// '' 내부에서는 ""을 1번 중첩 사용이 가능하다
console.log('i\'m a boy');    // 이스케이프
console.log('i"m a boy');
console.log("i'm a boy");
console.log('');

// 문장 뒤에 ;은 붙여도, 붙이지 않아도 에러는 아님
var y = 10;
var
  num
    =
    true;
console.log(y);
console.log(num);

// 이런 형태는 에러 발생
// let z = x + y (y + z).toString();

// return, throw, break, continue, yield 명령은 뒤에 값이 없으면
// 이어쓰기를 안하고 바로 return; 형태가 된다.


