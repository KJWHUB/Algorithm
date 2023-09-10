const mineral = {
  all: "A",
  gold: "G",
  silver: "S",
  none: "N",
};
Object.freeze(mineral);

const city = (g, s, w, t) => {
  const temp = new Map();
  for (let i = 0; i < g.length; i++) {
    const item = {
      g: g[i],
      s: s[i],
      w: w[i],
      t: t[i],
      t2: t[i] * 2,
      mineral: "",
      nowG: 0,
      nowS: 0,
    };
    if (g[i] && s[i]) {
      item.mineral = mineral.all;
    } else if (g[i]) {
      item.mineral = mineral.gold;
    } else if (s[i]) {
      item.mineral = mineral.silver;
    } else {
      item.mineral = mineral.none;
    }
    temp.set(i, item);
  }
  return temp;
};

// 갈때
const go = (item) => {
  return {
    t: item.t,
    g: item.nowG,
    s: item.nowS,
  };
};
// 올때
const back = (item) => {
  return item.t;
};

/**
 * 주어진 마을리스트에서 가장 빠르게 광물을 전달할수 있는 시간 을 구하는 함수.
 *
 * @param {Number} a 금 kg
 * @param {Number} b 은 kg
 * @param {Array} g 도시에 존재하는 금
 * @param {Array} s 도시에 존재하는 은
 * @param {Array} w 트럭이 옮길수 있는 적재 최대량
 * @param {Array} t 시간
 * @returns {Number}
 */
function solution(a, b, g, s, w, t) {
  let time = 0;
  let gold = 0;
  let silver = 0;
  // 도시 객체화
  const cityMap = city(g, s, w, t);

  // 경우
  // 1. 도시가 1개 일때

  // 도시가 한번 적재 할때의 경우
  // 1. w
  // 2. a-gold, a-silver
  // 3.

  console.log(cityMap);
  var answer = -1;
  return answer;
}

const a = 10;
const b = 10;
const g = [100];
const s = [100];
const w = [7];
const t = [10];

// const a = 90;
// const b = 500;
// const g = [70, 70, 0];
// const s = [0, 0, 500];
// const w = [100, 100, 2];
// const t = [4, 8, 1];

console.log(solution(a, b, g, s, w, t));
