function solution(numbers) {
  const copy = numbers.map((x) => x.toString());

  copy.sort((a, b) => {
    return a + b > b + a ? -1 : 1;
  });

  if (copy[0] === "0") return "0";
  return copy.join("");
}