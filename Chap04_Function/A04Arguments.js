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
