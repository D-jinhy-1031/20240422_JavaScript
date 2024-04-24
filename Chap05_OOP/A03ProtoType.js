console.log('---------------- [687] prototype chain -----------------');
// 이 생성자 함수를 이용하여 생성되는 오브젝트 객체의 부모(상위 객체)가 된다
// 이 생성자 함수로 만들어진 오브젝트 객체는 이 함수의 자식 객체가 된다 (상속)
// 이러한 상속을 prototype을 이용한 상속이라 한다
function Student(name, kor, eng) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;

  /*
  this.onTotal = function () {
    return this.kor + this.eng;
  };
  this.onAvg = function () {
    return this.onTotal() / 2;
  };
  this.display = function () {
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  };
  */
}
// console.dir(Student)   // prototype = {}

// prototype => 부모의 속성
// 1개만 만들어지므로 각각의 생성된 오브젝트가 가지고 있을 필요없음(메모리 낭비를 막음)
Student.prototype.onTotal = function () {
  return this.kor + this.eng;
};
Student.prototype.onAvg = function () {
  return this.onTotal() / 2;
};
Student.prototype.display = function () {
  console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
};

// static
Student.className = '3학년 1반';
Student.getArea = (w, h) => {
  // console.log(this);
  return w * h;
}

// hungbu, hangdan은 Student 함수에 의해 만들어진 자식 오브젝트 객체
const hungbu = new Student('흥부', 90, 80);
const hangdan = new Student('향단', 100, 80);

console.log(hungbu);
console.log(hangdan);

// this에 존재
console.log(hungbu.name);

// this에 존재하지 않음. 객체의 [[Prototype]]을 이용해 상위 
// Student 함수의 prototype을 참조
// 이런식으로 상위의 prototype을 거슬러 올라가 참조하는 것을 prototype chain이라 한다
// 모든 객체는 묵시적으로 Object를 상속받아 구현 (최 상위 객체)

// scope chain => { }를 거슬러 올라가면서 변수, 함수를 참조
// prototype chain => 상속 관계를 거슬러 올라가면서 변수, 함수를 참조
console.log(hungbu.onTotal())

hungbu.display();
hangdan.display();
console.log('');

console.log('---------------- getPrototypeOf -----------------');
// chrome 방식의 참조. 지금은 표준
// __proto__ => [[Prototype]]
console.log(hungbu.__proto__ === Student.prototype);

// ECMAScript 표둔
console.log(Object.getPrototypeOf(hungbu) === Student.prototype); // true

const str = 'Hello';
console.log(Object.getPrototypeOf(str) === String.prototype); // true

const arr = [10, 11];
console.log(arr);
console.log(arr.__proto__ === Array.prototype); // true
