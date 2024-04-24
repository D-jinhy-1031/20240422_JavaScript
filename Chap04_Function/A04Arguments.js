/* eslint-disable prefer-rest-params */
console.log('---------------- [263] Arguments -----------------');
// 자바스크립트는 넘어오는 매개변수를 체크하지 않는다
// 함수 내부에서만 에러가 발생하지 않도록 작성하면 된다
function onAdd() {
  // 넘어오는 매개변수를 관리하는 유사 배열이다
  // 유사배열 => 객체의 key가 연속된 숫자로 되어 있는 구조
  // console.log(arguments);
  // console.log(arguments.length);
  let total = 0;
  /*
  total = total + arguments[0];
  total = total + arguments[1];
  total = total + arguments[2];
  */
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      total = total + arguments[i];
    }
  }
  console.log(`arguments.length: ${arguments.length} / ${total}`)
}

// console.dir(onAdd);
onAdd();
onAdd(1);
onAdd(1, 2);
onAdd(1, 2, 3);
onAdd(1, 2, 'abc', 3);
console.log('');

const onOne = function (x) {
  let total = 0;
  // arguments는 넘어오는 전체 매개변수를 관리한다
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      total = total + arguments[i];
    }
  }
  console.log('첫번째 매개변수의 값: ' + x);
  console.log(`arguments.length: ${arguments.length} / ${total}`)
}
onOne('A');
onOne('B', 1);
onOne('C', 1, 2);
onOne('D', 1, 2, 3);
onOne('E', 1, 2, 'abc', 3);
console.log('');


// ESNext: rest 매개변수 => ...변수명
const onTwo = function (x, y, ...args) {
  let total = 0;
  // rest 매개변수는 매개변수에 순차적으로 대입하고 남는 매개변수만 관리한다
  // rest 매개변수는 순수 배열이다 => 배열에 있는 각종 메서드를 사용 가능
  // 유사배열은 가지고 있는 메서드가 없음
  // console.log(args);
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      total = total + args[i];
    }
  }
  console.log('첫번째 매개변수의 값: ' + x);
  console.log(`arguments.length: ${args.length} / ${total}`)
}
onTwo('A1');
onTwo('B1', 1);
onTwo('C1', 1, 2);
onTwo('D1', 1, 2, 3);
onTwo('E1', 1, 2, 'abc', 3);
console.log('');

const onThree = (a, b, c, d, e, ...rest) => {
  console.log(`a=> ${a}`)
  console.log(`b=> ${b}`)
  console.log(`c=> ${c}`)
  console.log(`d=> ${d}`)
  console.log(`e=> ${e}`)
  console.log(`rest=> ${rest} / ${rest.length}`)
}
onThree(10, ...[20, 30, 40], 50, ...[60, 70, 80]);

/*
  arguments
    유사배열(연속된 숫자로 되어 있는 객체)
    length 속성으로 넘어오는 매개변수가 몇개인지 알 수 있다
    조작 메서드가 존재하지 않는다
    모든 매개변수를 관리한다
  ...rest
    배열
    length 속성으로 넘어오는 매개변수가 몇개인지 알 수 있다
    배열의 값을 조작 할 수 있는 메서드가 존재한다
    남는 매개변수를 관리한다
*/
