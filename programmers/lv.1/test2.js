// factorial
const factorial = (n) => {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    x *= i;
  }
  return x;
};
// combination
const combination = (n, r) => factorial(n) / (factorial(r) * (n - r));

const fn = (n, arr) => {
  const temp = [];
  const a = Math.abs(n);

  for (let i = 1; i < a; i++) {
    if (arr.find((el) => el === a - i)) {
      temp.push([n, i, a - i]);
    }
  }

  const sortedArray = temp.map((arr) => [...arr].sort((a, b) => a - b));
  const uniqueArray = Array.from(
    new Set(sortedArray.map(JSON.stringify)),
    JSON.parse
  );

  return uniqueArray;
};

function solution(number) {
  var answer = 0;
  // 정렬
  number.sort((a, b) => a - b);

  const obj = {};
  number.forEach((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  console.log(obj);

  const zeroArr = number.filter((el) => el === 0);
  const negative = [...new Set(number.filter((el) => el < 0))];
  const positive = [...new Set(number.filter((el) => el > 0))];

  // (0, 0, 0)
  if (zeroArr.length >= 3) {
    answer += combination(zeroArr.length, 3);
  }

  // (-a, 0, a)
  if (zeroArr.length > 0) {
    negative.forEach((el) => {
      if (obj[Math.abs(el)]) {
        answer += obj[el] * obj["0"] * obj[Math.abs(el)];
      }
    });
  }

  // (-a, b, c) a = b + c
  negative.forEach((el) => {
    const list = fn(el, positive);
    if (list.length > 0) {
      list.forEach((el) => {
        answer += obj[el[0]] * obj[el[1]] * obj[el[2]];
      });
    }
  });

  return answer;
}
// [-2, 3, 0, 2, -5]	2
// [-3, -2, -1, 0, 1, 2, 3]	5
// [-1, 1, -1, 1]	0
const number = [-2, 3, 0, 2, -5];

console.log(solution(number));
