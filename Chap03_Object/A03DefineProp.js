/* eslint-disable no-prototype-builtins */
console.log('----------------- [362] defineProperty -----------------');

const obj = {
  name: 'NolBu',
  age: 30,
};

// 객체의 각 속성이 어떤 형태로 작성되어 있는지 확인
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

obj.address = 'Seoul';
// 전체 속성 참조
console.log(Object.getOwnPropertyDescriptors(obj));

// address는 writable: true, enumable: ture, configuable: true
// 수정, 변경, 삭제가 가능한 속성이다
obj.address = 'Busan';
delete obj.address;
console.log(obj);
console.log('');


// 수정, 변경, 삭제가 안되도록 생성
Object.defineProperty(obj, 'address', {
  value: '서울',
  writable: false,        // 수정 불가
  configurable: false,    // 삭제 불가
  enumerable: false,      // for ~ in 구문에 노출 안함
});

obj.address = 'Busan';
delete obj.address;
console.log(obj);

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

