console.log('----------------- [221] Loop Statument -----------------');
/*
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
*/

// for
/*
  for을 처음 만나면 1 => 2번이 참이면 => 4번 실행
                        2번이 거짓이면 => for 구문을 벗어남
  for을 처음 만나 2번이 참이면 } 까지 실행 후 다시 for를 실행
    3번 => 2번 참이면 => 4번 실행
           2번이 거짓이면 => for 구문을 벗어남

  for(1.변수초기화; 2.조건; 3.변수증감) {
    4. 반복 실행해야 할 구문...
    반복 실행해야 할 구문...
  }

  조건이 계속 참이되면 for문을 벗어날 수 없다 => 무한 반복
*/
for (let i = 1; i <= 5; i++) {
  // i는 for { } 내부에서만 사용할 수 있는 지역변수다
  console.log('Good Morning: ' + i);
}
console.log('Good Morning for 종료 ')
// console.log(i);          // Error

let result = 0;
/*
result = result + 1;
result = result + 2;
result = result + 3;
*/
for (let i = 1; i <= 100; i++) {
  result = result + i;
}
console.log(result);
console.log('');

console.log('----- 1부터 100까지 중 짝수의 합 -----')
result = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    result = result + i;
  }
}
console.log(result);
console.log('');

result = 0;

let i = 1;
for (; i <= 100;) {
  if (i % 2 === 0) {
    result = result + i;
  }
  i++;
}
console.log(result);
console.log('');

// for => 반복횟수가 정해져 있는 경우
// while => 반복횟수가 정해져 있지 않은 경우
let k = 1;
while (k <= 100) {        // while (함수()) { }
  if (k % 2 === 0) {
    result = result + k;
  }
  k++;
}
console.log(result);
console.log('');

// confirm() => 확인 => true, 취소 => false
while (window.confirm()) {
  console.log('확인을 선택...')
}
console.log('');


// do~while
// 실행을 해 봐야 반복 여부를 알 수 있는 경우
let kor = 0;
do {
  kor = window.prompt('점수를 입력해 주세요');
  console.log(`입력하신 값은 ${kor}입니다`);
} while (kor < 0 || kor > 100);
