console.log('---------------- [702] 상속 -----------------');

class Jumsu {
  // 생성자 메서드. 반환문을 갖지 않는다.
  constructor(name, kor, eng) {
    // this = {};
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    // return this;
  }

  // prototype
  onTotal() {
    return this.kor + this.eng;
  }
  onAvg() {
    return this.onTotal() / 2;
  }
  display() {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  }
}

// 상속 => 기존의 클래스를 기반으로 기능을 확장
// Jumsu가 JumsuThree의 부모(상위 prototype)가 된다
// extends로 1개의 클래스만 지정 가능하다
class JumsuThree extends Jumsu {
  constructor(name, kor, eng, math) {
    // 부모(Jumsu)의 constructor()를 호출해서 부모의 자료구조를 생성한다
    super(name, kor, eng);
    this.math = math;
  }

  // 부모가 가진 메서드를 자식이 재 정의
  // 메서드의 오버라이드
  onTotal() {
    return this.kor + this.eng + this.math;
  }
  onAvg() {
    return (this.onTotal() / 3).toFixed(2);
  }
}
const one = new JumsuThree('향단', 98, 90, 80);
console.log(one);
one.display();
