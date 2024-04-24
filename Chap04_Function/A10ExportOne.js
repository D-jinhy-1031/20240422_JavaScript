// A08ExportOne.js
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// export로 묶어서 전달도 가능
// as를 이용해서 이름을 변경해 전달도 가능
export { arr, user, onAdd as add }

console.log(`A10ExportOne ${name} / ${age} / ${onAdd(10, 20)}`);
