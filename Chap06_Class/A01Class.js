console.log('---------------- [697] Function -----------------');
const Jumsu = (function () {
  function Jumsu(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  Jumsu.prototype.onTotal = function () {
    return this.kor + this.eng;
  };
  Jumsu.prototype.onAvg = function () {
    return this.onTotal() / 2;
  };
  Jumsu.prototype.display = function () {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  };

  Jumsu.className = '3학년 1반';

  return Jumsu;
})();

const nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();
console.log(nolbu);
console.log('');

console.log('---------------- Class -----------------');
// ESNext
class JumsuTwo {
  constructor(name, kor, eng) {
    this._name = name;
    this._kor = kor;
    this._eng = eng;
    this._total = 0;
    this._age = 0;

    // 생성되는 객체에 포함되는 메서드
    this.view = function () {
      console.log(`${this._name} / ${this.onTotal()} / ${this.onAvg(2)}`);
    }
  }

  // constructor 함수 외부에 정의된 변수, 함수는 JumsuTwo의 prototype에 정의된다
  onTotal() {
    this._total = this._kor + this._eng;
    return this._total;
  };
  onAvg(x) {
    this._total = this._kor + this._eng;
    return this._total / x;
  }
  display() {
    console.log(`${this._name} / ${this.onTotal()} / ${this.onAvg(2)}`);
  }

  // static
  static className = '3학년 2반';
  static getArea = (x, y) => x * y;

  // this에 대한 접근을 위한 getter, setter 메서드 구현
  get name() {
    if (this._total > 180) {
      return this._name
    } else {
      return '참조 권한이 없습니다';
    }
  }
  set name(x) {
    if (x !== '') {
      this._name = x;
    }
  }
};

const hungbu = new JumsuTwo('흥부', 90, 95);    // constructor()가 호출된다
console.log(hungbu);
hungbu.display();

// getter / setter 참조
console.log(hungbu.name);
hungbu.name = 'ABC';
console.log(hungbu.name);

// static
console.log(JumsuTwo.className);
console.log(JumsuTwo.getArea(30, 30))