console.log('---------------- [431] Map -----------------');
// ESNext
const myMap = new Map([
  ['one', 10],
  ['two', 20],
]);
console.log(myMap);
console.log(`전체 요소 수=> ${myMap.size}`);    // 2

const peron = [
  { name: 'NolBu', age: 35 },
  { name: 'BangJa', age: 18 },
  { name: 'HungBu', age: 25 },
];
const product = [
  { name: 'TV', price: 35000 },
  { name: 'Phone', price: 18000 },
  { name: 'Nodebook', price: 25000 },
];

const sendData = {
  peron,
  product,
};
console.log(sendData.peron[0].name);
console.log('');


// 다양한 메서드를 제공해 준다
const productMap = new Map([
  ['person', peron],
  ['product', product]
]);
console.log(`전체 요소 수=> ${productMap.size}`);    // 2

// 가져오기
const one = productMap.get('person');
console.log(one[0], one[0].name);

// 추가
productMap.set('three', 'Hello');
console.log(productMap);

// 값 포함 여부, 삭제
if (productMap.has('three')) {
  productMap.delete('three');
}
console.log('');

// 순환
productMap.forEach((item) => {
  for (let i = 0; i < item.length; i++) {
    if ('age' in item[i]) {
      console.log(`${item[i].name} / ${item[i].age}`)
    } else if ('price' in item[i]) {
      console.log(`${item[i].name} / ${item[i].price}`)
    }
  }
});
console.log('');

// 모두 삭제
productMap.clear();
console.log(productMap)