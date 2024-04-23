/* eslint-disable no-extend-native */
/* eslint-disable no-prototype-builtins */
console.log('---------------- [335] Object -----------------');

const hungbu = {
  // 요소는 어떤 요소가 먼저 만들어 질지 모름
  name: '흥부',
  kor: 90,
  eng: 20,
  total: 0,     // total = hungbu.kor + hungb.eng;  형태로 참조하면 에러
  avg: 0,

  // 객체 내부에 선언된 함수를 특별히 메서드(메소드 - method)라 한다
  onTotal: function () {
    // console.log(this);
    this.total = this.kor + this.eng;
  },
  // ESNext 방식. Vue의 options API 방식에서 자주 사용됨
  onAvg() {
    this.avg = (this.kor + this.eng) / 2;
  },
  display() {
    console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다`);
  }
};
hungbu.onTotal();
hungbu.onAvg();
hungbu.display();

hungbu.className = '2학년 3반';   // 없는 속성 추가
hungbu.view = function () {        // 없는 메서드 추가
  console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다`);
}
console.log(hungbu.className);
hungbu.view();

// 수정도 가능
hungbu.eng = 100;
hungbu.onTotal();
hungbu.onAvg();
hungbu.display();
console.log('');

// 오브젝트 객체에 객체명.속성명 = 값; 형태로 지정하면
// 지정한 객체에 속성명이 있으면 변경, 없으면 추가
// 변경
hungbu.name = 'HungBu';

// 추가
hungbu.grade = '반장';
console.log(hungbu);

// 삭제
delete hungbu.grade;
console.log(hungbu);

// 참조
console.log(`${hungbu.name} / ${hungbu.kor}`);
hungbu.display();
console.log('');

Object.prototype.toText = function () { };

// 모든 속성을 순환 참조
for (const key in hungbu) {
  // 부모 속성이 가지고 있는 커스텀 속성은 표시되지 않고 순수 자신의 속성면 표시
  if (hungbu.hasOwnProperty(key)) {
    console.log(key, typeof key);
    console.log(hungbu[key]);
  }
}
console.log(hungbu);
