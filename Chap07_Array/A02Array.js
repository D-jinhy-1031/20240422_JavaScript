console.log('---------------- [390] Array -----------------');
let arr = [10, 11, 100, 101, 1000, 11, 100];
console.log(arr);


// 배열 맨 뒤에 요소 추가. result는 추가된 후의 전체 요소 수
let result = arr.push(2000);
console.log(arr, result);

// 배열 맨 앞에 요소 추가. result는 추가된 후의 전체 요소 수
result = arr.unshift(1);
console.log(arr, result);

// 배열 맨 뒤에 요소 삭제. result는 삭제된 값
result = arr.pop(2000);
console.log(arr, result);

// 배열 맨 앞에 요소 삭제. result는 삭제된 값
result = arr.shift(2000);
console.log(arr, result);
console.log('');

// 위치를 지정해서 수정, 삭제, 추가
// arr.splice(시작위치, 몇개를, [수정값]);
// [10, 11, 100, 101, 1000, 11, 100];
result = arr.splice(1, 0, 20);  // 1번째 위치에 20을 추가
console.log(arr, result);       // result는 값 없음 []

// [10, 20, 11, 100, 101, 1000, 11, 100];
// 수정 값이 없으면 삭제
result = arr.splice(1, 2);      // 1번째 위치에서 2개 삭제
console.log(arr, result);       // result는 추출이 되는 값이 배열로 [20, 11]

// [10, 100, 101, 1000, 11, 100]
result = arr.splice(1, 1, 20, 11);  // 100이 20, 21로 치환
console.log(arr, result);           // result는 [100]

// [10, 20, 11, 101, 1000, 11, 100]
result = arr.splice(1, 3, 2000);    // 20, 11, 101이 삭제되고 2000이 추가
console.log(arr, result);           // result는 [20, 11, 101]
console.log('');

// 위치 찾기
arr = [10, 11, 100, 101, 1000, 11, 100];

// 처음부터 검색해서 처음 찾은 위치 값
result = arr.indexOf(11);           // 1
console.log(result);

// 검색을 두번째 위치에서 시작한다
result = arr.indexOf(11, 2);        // 5
console.log(result);

// 찾는 값이 없으면 -1을 리턴한다
result = arr.indexOf(5000);         // -1
console.log(result);

// 값이 없는 경우만 배열에 추가
if (arr.indexOf(5000) === -1) {
  arr.push(5000);
}
console.log(arr);   // [10, 11, 100, 101, 1000, 11, 100, 5000]

// 뒤에서부터 검색해라. 찾은 위치값은 앞에서부터 카운트 한다
result = arr.lastIndexOf(11);       // 5
console.log(result);

// 뒤로부터 3개는 건너띄고 찾기 시작
result = arr.lastIndexOf(11, 3);    // 1
console.log(result);
console.log('');


// 배열의 모든 요소값 지정한 문자로 묶어서 문자열로 반환
result = arr.join(' * ');
console.log(result);    // 10 * 11 * 100 * 101 * 1000 * 11 * 100 * 5000
console.log('')


console.log('---------------- Sort -----------------');
arr = [10, 11, 100, 101, 1000, 11, 100];
result = arr.sort();
console.log(result);    // [10, 100, 100, 1000, 101, 11, 11]
console.log(arr);       // 원본이 수정된다

const compare = (x, y) => {
  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
}
arr.sort(compare);
console.log(arr);       // [10, 11, 11, 100, 100, 101, 1000]

const compareObject = (key) => {
  const compare = (x, y) => {
    if (x[key] > y[key]) return 1;
    else if (x[key] < y[key]) return -1;
    else return 0;
  }
  return compare;
}

const objArray = [
  { name: 'NolBu', age: 35 },
  { name: 'BangJa', age: 18 },
  { name: 'HungBu', age: 25 },
];
objArray.sort(compareObject('name'));
console.log(objArray)
