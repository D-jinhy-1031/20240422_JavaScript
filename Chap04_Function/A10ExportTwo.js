// A08ExportTwo.js
const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = '놀부';

  const getName = function () {
    return name;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return {
    progName,
    name: getName,
    getTotal,
    getAvg,
  };
})();
// default가 붙은 요소는 문서중에 딱 1개만 지정 가능
export default jumsu;
// export default x = 10;

// 개별 export는 default와 함께 사용 가능
export const x = 10;
export const y = 20;
