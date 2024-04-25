console.log('---------------- [409] Array Like Object -----------------');
/*
유사 배열(Array Like Object)
  1. 0 이상의 정수 값으로 프로퍼티 이름을 갖는다.
  2. length 프로퍼티가 있다.
  3. 요소의 추가, 삭제에 따라 length의 값이 변경되어야 한다.

  HTML DOM의 li 등이 Array Like Object이다.
*/

const arr = {
  0: 'nolbu',
  1: 'hungbu',
  length: 2,
  push: function (item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  },
  pop() {
    Array.prototype.pop.call(this);
  }
}
console.log(arr[0]);        // nolbu
console.log(arr[1]);        // hungbu
console.log(arr.length);    // 2
console.log(arr);

arr.push(30);
console.log(arr);

arr.pop();
console.log(arr);