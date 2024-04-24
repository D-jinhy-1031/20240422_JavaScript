/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
console.log('---------------- [307] 중첩함수, 콜백함수 -----------------');

// 중첩함수
function outer() {
  // 함수 내부에 선언된 변수는 함수 내부의 { } 내부에서만 참조 가능하다
  const x = 10;

  const inner = function (y) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }

  inner(20);
}
outer();
// inner();  // 함수 내부에 선언된 변수는 함수 내부의 { } 내부에서만 참조 가능하다
// console.log(x);
console.log('');

/*
함수는 일급객체
  1. 리터럴에 의해 생성 가능
  2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
  3. 함수의 인자나 리턴 값으로 사용 가능
  4. 동적으로 프로퍼티 생성 가능 => 함수도 객체다
*/

function outer2(x) {
  console.log('outer 함수 호출', x);
}
// 4. 동적으로 프로퍼티 생성 가능 => 함수도 객체다
outer2.greet = 'Good Morning';
console.dir(outer2);
console.log(outer2.greet);
console.log('');

console.log('----------- 함수의 인자나 리턴 값이 될 수 있다. -------------');
function outer1() {
  const x = 10;

  const inner = function (y) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }

  return inner;
}
const inner1 = outer1();
// console.log(inner1);
inner1(20);
outer1()(30);
console.log('')


console.log('---------------- [604] Promise -----------------');
const sleep = (ms) => {
  console.log('----- START -----');
  // Date.now() => 1970-01-01 00:00:00 기준으로 현재까지의 경과시간을 ms로 돌려준다
  // ms => 1000이 1초
  const timeout = Date.now() + ms;
  // console.log(timeout, typeof timeout);
  while (timeout > Date.now()) { }
  console.log('----- END -----');
};
// sleep(2000);

const one = function (ms) {
  console.log('----- START -----');
  setTimeout(() => {
    const result = 3000;
    console.log(`one result: ${result}`)
  }, ms)
  console.log('----- END -----');
}
// one(2000);

const two = function (ms) {
  console.log('----- START -----');
  setTimeout(() => {
    const result = 3000;
    // console.log(`one result: ${result}`);
    return result;   // setTimeout이 호출한 함수라 리턴값도 setTimeout 함수가 받는다
  }, ms)
  console.log('----- END -----');
}
// console.log(two(2000));     // undefined


const three = function (ms) {
  console.log('----- START -----');
  setTimeout(() => {
    const result = 3000;
    console.log(`three result: ${result}`)

    // result의 참조 범위는 함수 내부로 제한된다
    setTimeout(() => {
      const value = result + 5000;
      console.log(`three value: ${value}`);
    }, result);
  }, ms)
  console.log('----- END -----');
}
// three(2000);

// 고계함수. higher order function => higher order component(react)
const four = function (ms, callback) {
  console.log('----- START -----');
  setTimeout(() => {
    const result = 3000;
    callback(result);
  }, ms)
  console.log('----- END -----');
}

const inner = function (x) {
  console.log(`Hello World: ${x}`);
}
// four(2000, inner);


const five = function (ms, one, two) {
  console.log('----- START -----');
  setTimeout(() => {
    const result = 3000;
    // console.log(`three result: ${result}`)
    one(result);

    setTimeout(() => {
      const value = result + 5000;
      // console.log(`three value: ${value}`);
      two(value);
    }, result);
  }, ms)
  console.log('----- END -----');
}
const innerTwo = (x) => {
  console.log(`Good Morning: ${x}`);
}
// five(2000, inner, innerTwo);

// ESNext
const six = (ms) => {
  // resolve => then이 전달하는 함수 (정상 처리된 경우 실행할 함수)
  // reject => catch가 전달하는 함수 (에러, 실패시 실행할 함수)
  const promise = new Promise((resolve, reject) => {
    if (ms < 1000) reject(new Error('시간이 너무 짧습니다'));
    else {
      setTimeout(() => {
        const result = 3000;
        resolve(result);
      }, ms)
    }
  });

  return promise;
}
six(2000)
  .then((resp) => {
    console.log(`성공: ${resp}`);

    // return은 뒤의 값을 Promise로 만들어서 반환
    // 따라서 이 return 처리는 다음 then이 받아 처리한다
    return six(1500);
  })
  .then((resp) => {
    console.log(`두번째 처리: ${resp}`);

    return resp;
  })
  .then((resp) => {
    console.log(`세번째 처리: ${resp}`);
  })

  .catch((error) => {
    console.error(`실패: ${error}`);
  })


console.log('----- 프로그램 종료 -----');