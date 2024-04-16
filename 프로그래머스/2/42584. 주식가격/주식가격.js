function solution(prices) {
  return prices.map((won, index) => {
    let s = 0;
    for (let i = index + 1; i < prices.length; i++) {
      s++;
      if (won > prices[i]) break;
    }
    return s;
  });
}