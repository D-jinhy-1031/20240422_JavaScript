console.log('---------------- Module  -----------------');
// 개별 export된 변수명과 동일한 이름으로 import 해야 한다
// 읽기 전용이다
// window 영역을 오염시키지 않는다
// ECMAScript Module => ESM 모듈이라 한다
import { name, age, check, arr, user as u, add } from './A10ExportOne.js';
import * as one from './A10ExportOne.js';

// default export된 요소는 사용하는 곳에서 임의의 이름으로 참조 가능
import two, { x, y } from './A10ExportTwo.js';
// import { x, y } from './A10ExportTwo.js';
// console.log(globalThis);
// console.log(two);

const dom = `
  Name: ${name} / ${one.name}<br>
  Age: ${age} / ${one.age}<br>
  Check: ${check}<br>
  Array: ${arr[0]} / ${arr[1]} / ${arr[100]}<br>
  Object: ${u.name} / ${u.age} / ${u.address}<br>
  function: ${add(20, 30)}<br>
  Program Name: ${two.progName}<br />
  Two Name: ${two.name()}<br>
  Total: ${two.getTotal(100, 90)}<br>
  Avg: ${two.getAvg(190, 2)}<br>
  X, Y: ${x} / ${y}<br>
`;
console.log(dom);

const elem = document.getElementById('app');
elem.innerHTML = dom;

console.log('');

// 즉시 실행 함수
const func = (function () {
  const x = 10;

  return { x }
})();
console.log(func.x);

// namespace
const app = {};
app.name = 'NolBu';
app.getName = function () {
  console.log(this.name);
};
app.getName();
console.log('');
