console.log('---------------- property shadowing -----------------');
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

console.log(nolbu);

// nolbu도 Person에 의해 생성된 오브젝트 객체다
// 객체는 동적으로 속성 또는 메서드를 추가할 수 있다
// 자신의 객체의 display()를 먼저 참조하므로 부모의 display가 가려지게 된다
// 부모가 가지고 있는 메서드를 동일한 이름으로 재정의 => 메서드 오버라이드
nolbu.display = function () {
  console.log(`nolbu의 display: ${this.name} / ${this.age}`);
}
nolbu.display();
