console.log('---------------- [682] OOP -----------------');
/*
  this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)이다.
  즉 this 바인딩은 호출 방식에 따라 동적으로 결정된다.
  일반 함수로서 호출 => 전역객체
  메서드로 호출 => 메서드를 호출한 객체 마침표 앞의 객체
  생성자 함수로 호출 => 생성자 함수가 생성할 인스턴스
*/
const person = {
  name: 'NolBu',
  kor: 100,
  eng: 80,

  onTotal: function () {
    return this.kor + this.eng;
  },
  onAvg: function () {
    return this.onTotal() / 2;
  },
  display: function () {
    // console.log(this);               // 객체 자체가 this
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  },
};
console.log(person);
person.display();
console.log('');

const nolbu = {
  name: 'NolBu',
  kor: 100,
  eng: 80,

  onTotal: function () {
    return this.kor + this.eng;
  },
  onAvg: function () {
    return this.onTotal() / 2;
  },
  display: function () {
    // console.log(this);               // 객체 자체가 this
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  },
};
console.log(nolbu);
nolbu.display();
console.log('');

console.log('---------------- 생성자 함수 -----------------');
// 생성자 함수는 관례상 함수명의 첫 글자를 대문자로 정의한다
// 동일한 객체를 생성할 목적으로 사용한다
function Student(name, kor, eng) {
  // 이 함수를 new Student()로 호출하면
  // this = {}
  this.name = name;
  this.kor = kor;
  this.eng = eng;

  // 메서드
  this.onTotal = function () {
    return this.kor + this.eng;
  };
  this.onAvg = function () {
    return this.onTotal() / 2;
  };
  this.display = function () {
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  };

  // 어떤 객체를 new로 생성해도 동일한 값이 생성된 오브젝트 객체에 포함된다
  // 같은 값인데 각각 가지고 있을 필요가 있을까? => static
  // this.className = '3학년 1반';

  // this.getArea = function (w, h) {
  //   return w * h;
  // }

  // return this;
}

// JavaScript에서는 함수도 객체다
// static 변수, 함수 정의
// 각 생성된 객체마다 동일한 값, 동일한 동작을 1개만 작성할 목적
Student.className = '3학년 1반';
Student.getArea = (w, h) => {
  return w * h;
}
console.dir(Student);

const hungbu = new Student('흥부', 90, 80);
const hangdan = new Student('향단', 100, 80);
console.log(hungbu);
console.log(hangdan);

hungbu.display();
hangdan.display();

console.log(Student.className);
console.log(Student.getArea(10, 10));



/*
JavaScript은 undefined, null 이외는 모두 객체.
undefined.명령(), null.명령() => 에러

const today = new Date();
console.log(today.toLocaleString());

const num = new Number(10);
num.toFixed(num, 2);

const str = new String('Hello');
const obj = new Object();
*/

