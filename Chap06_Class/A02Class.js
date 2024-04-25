// ES2022
class JumsuTwo {
  // private 속성 => 생성된 오브젝트 객체에서는 참조 불가
  // 이 클래스 내부에서만 참조할 수 있는 변수로 정의된다
  #name;
  #kor;
  _eng;

  constructor(name, kor, eng) {
    this.#name = name;
    this.#kor = kor;
    this._eng = eng;
    this._total = 0;
    this._age = 0;
  }

  onTotal() {
    this._total = this.#kor + this._eng;
    return this._total;
  };
  onAvg(x) {
    this._total = this.#kor + this._eng;
    return this._total / x;
  }
  display() {
    console.log(`${this.#name} / ${this.onTotal()} / ${this.onAvg(2)}`);
  }

  // static
  static className = '3학년 2반';
  static getArea = (x, y) => x * y;

  // this에 대한 접근을 위한 getter, setter 메서드 구현
  get name() {
    if (this._total > 180) {
      return this.#name
    } else {
      return '참조 권한이 없습니다';
    }
  }
  // set name(x) {
  //   if (x !== '') {
  //     this.#name = x;
  //   }
  // }
};

const hungbu = new JumsuTwo('흥부', 90, 95);
console.log(hungbu);
hungbu.display();
console.log('');

// console.log(hungbu.name());    // Error
// console.log(hungbu.#name);     // Error
console.log(hungbu.name);
hungbu.name = 'ABC';        // set 함수가 없어도 에러는 발생 안함 => 안바뀜
console.log(hungbu.name);
console.log('');

// #kor 변수에 대한 참조, 값 설정은 생성된 오브젝트를 이용해 할 수 없다
// console.log(hungbu.#kor);  // Error

console.log(JumsuTwo.className);
console.log(JumsuTwo.getArea(30, 30));
