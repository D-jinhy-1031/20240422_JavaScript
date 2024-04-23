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

// 오브젝트 객체에 객체명.속성명 = 값; 형태로 지정하면
// 지정한 객체에 속성명이 있으면 변경, 없으면 추가
const hangDan = new Object();   // const hangDan = { }

