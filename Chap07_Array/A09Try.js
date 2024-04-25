console.log('---------------- Error -----------------');
const error = new Error('표시되는 메시지 값');
console.error(error);
console.error(error.message);
console.log('');

let money = 10_000;
const bank = (num) => {
  // throw => 호출한 곳으로 처리를 바로 이동시킨다
  // throw 이후의 로직은 실행되지 않는다
  if (money - num < 0) throw new Error('잔금이 부족합니다');
  else {
    money = money - num;
  }
  console.log(`잔금이 ${money}남았습니다`);
}

// Error를 회피
console.log(`-------- START ---------`);
try {
  bank(30000);    // Error 가 발생하면 catch 구문으로 이동한다
  console.log('정상 처리되었습니다')
} catch (err) {
  // throw new Error('잔금이 부족합니다');를 err가 받는다
  console.error(err.message);
  console.log('은행에 문의 해 주세요');
}

console.log(`-------- END ---------`);
