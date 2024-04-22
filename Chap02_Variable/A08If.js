console.log('----------------- [213] Conditional Statument -----------------');

// var 변수는 함수를 제외한 { } scope를 갖지 않는다.
console.log('');

var kor, eng, avg;
kor = 100;
eng = 80;
avg = (kor + eng) / 2;

// 단순 IF
/*
  if(조건문) {
    조건문이 true인 경우 실행할 구문...
    조건문이 true인 경우 실행할 구문...
    ...
  }
*/
// 조건 참: 1 => if 조건 체크 => 2 => 3 => 4번이 순차적으로 실행
// 조건 거짓: 1 => if 조건 체크 => 4번 실행
console.log('1. 단순 if 구문 시작');
// if (avg) {         // avg가 값이 있으면 true
if (avg >= 80) {
  console.log('2. 평균이 80점 이상입니다');
  console.log('3. 합격입니다..');
}
console.log('4. 단순 if 구문 } 이후 영역');
console.log('');


// IF ~ ELSE
// 조건 참: 1 => if 조건 체크 => 2 => 3 => 6번이 순차적으로 실행
// 조건 거짓: 1 => if 조건 체크 => 4 => 5 => 6번 순서대로 실행
console.log('1. if ~ else 구문 시작');
if (avg >= 80) {
  console.log('2. 평균이 80점 이상입니다');
  console.log('3. 합격입니다..');
} else {
  console.log('4. 안따깝게 평균이 80점 이하입니다');
  console.log('5. 불 합격입니다..');
}
console.log('6. if ~ else 구문 } 이후 영역');
console.log('');

// 다중 IF
// 조건을 여러개 선언하여 해당 조건이 참인 { } 블럭을 실행하고 전체 if 구문을 
// 벗어난다
avg = 65
let hakJum = 'F';

console.log('1. 다중 IF 구문 시작');
if (avg >= 90) {
  // let hakJum = 'F';
  console.log('2. 평균이 90점 이상입니다');
  console.log('3. 훌룡합니다...');
  // console.log('4. 학점은 A입니다');
  hakJum = 'A';
} else if (avg >= 80) {
  console.log('2. 평균이 80점 이상입니다');
  console.log('3. 괜찮은 점수 입니다');
  // console.log('4. 학점은 B입니다');
  hakJum = 'B';
} else if (avg >= 70) {
  console.log('2. 평균이 70점 이상입니다');
  console.log('3. 평균 점수입니다');
  // console.log('4. 학점은 C입니다');
  hakJum = 'C';
} else {
  console.log('2. 평균이 70점 이하입니다');
  console.log('3. 낙제 점수입니다');
  // console.log('4. 학점은 F입니다');
}
console.log(`4. 학점은 ${hakJum}입니다`);

console.log('6. if ~ else 구문 } 이후 영역');
console.log('');



// switch
// 다중 if 구문에서 조건이 === 인 경우 switch 구문으로 변경 가능
var year = 2000;

// 형 변환. prompt로 들어오는 값은 무조건 문자열이다
var month = Number(window.prompt('월을 입력해 주세요'));
// console.log(typeof month);    // '3'이라는 문자
var day = 0;

if (month === 1 || month === 3 || month === 5) {
  day = 31;
} else if (month === 2) {
  day = 28;
  // } else if (month === 3) {
  //   day = 31;
} else if (month === 4) {
  day = 30;
  // } else if (month === 5) {
  //   day = 31;
} else if (month === 6) {
  day = 30;
} else if (month === 7) {
  day = 31;
} else if (month === 8) {
  day = 31;
} else if (month === 9) {
  day = 30;
} else if (month === 10) {
  day = 31;
} else if (month === 11) {
  day = 30;
} else if (month === 12) {
  day = 31;
} else {
  day = '월을 잘못 입력하셨습니다'
}
console.log(`${month}는 ${day}일까지 존재합니다`);

// 스위치
switch (month) {
  // if(month === 1){ }와 동일
  case 1:
  case 3:
  case 5:
  case 7:
  case 8: case 10: case 12:
    day = 31;
    break;
  case 2:
    day = 28;
    break;
  // case 3:
  //   day = 31;
  //   break;
  case 4: case 6: case 9: case 11:
    day = 30;
    break;
  // case 5:
  //   day = 31;
  //   break;
  // case 6:
  //   day = 30;
  //   break;
  // case 7:
  //   day = 31;
  //   break;
  // case 8:
  //   day = 31;
  //   break;
  // case 9:
  //   day = 30;
  //   break;
  // case 10:
  //   day = 31;
  //   break;
  // case 11:
  //   day = 30;
  //   break;
  // case 12:
  //   day = 31;
  //   break;
  default:
    day = '월을 잘못 입력';
    break;
}
console.log(`switch ${month}는 ${day}일까지 존재합니다`);