/* eslint-disable no-new-object */
console.log('----------------- [335] Object -----------------');
const nolbu = 'NolBu';
const kor = 100;
const eng = 80;
const total = kor + eng;
const avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

// 관련 있는 값을 하나의 변수로 묶어서 사용하자
// 이름으로 묶는다 => Object
// 연속되는 번호로 묶는다 => Array (배열)
// Object 객체
const hungbu = {
  name: '흥부',
  kor: 90,
  eng: 80,
  total: 0,
  avg: 0,       // ESNext에서는 마지막 요소에도 ,를 붙일수 있다
}
console.log(hungbu.name);
console.log(hungbu.kor);

hungbu.total = hungbu.kor + hungbu.eng;
hungbu.avg = hungbu.total / 2;

console.log(hungbu);
console.log(`${hungbu.total} / ${hungbu.avg}`);
console.log('');

// 오브젝트 객체에 객체명.속성명 = 값; 형태로 지정하면
// 지정한 객체에 속성명이 있으면 변경, 없으면 추가
const hangDan = new Object();   // const hangDan = { }
hangDan.name = '향단';
hangDan.kor = 100;
hangDan.eng = 80;
hangDan.total = hangDan.kor + hangDan.eng;
hangDan.avg = hangDan.total / 2;

console.log(hangDan);
console.log(`${hangDan.total} / ${hangDan.avg}`);
console.log('');

// 오브젝트의 속성명은 자바스크립트 변수 명명 규칙을 따른다
// 자바스크립트 변수 명명 규칙을 따르지 않는 경우는 문자열로 지정
// 숫자 키도 허용한다
const bangJa = {
  name: 'BangJa',
  'kor': 90,
  'b-eng': 80,
  0: 0,
  1: 0,
}
console.log(bangJa.name, bangJa.kor);
// 오브젝트 객체에 키가 문자열 또는 숫자로 지정한 경우는 변수명['문자열']
// 또는 변수명[숫자] 형태로 참조한다
console.log(bangJa['b-eng'], bangJa[0], bangJa[1]);
console.log('');

// 객체의 키 값이 변수로 불러오는 경우는 무조건 [] 방식으로 참조
const key = 'name';
console.log(bangJa.key);    // undefined
console.log(bangJa[key]);
