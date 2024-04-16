function solution(progresses, speeds) {
  let answer = [];
  let count = 0;

  const completeProcess = () => {
    progresses.shift();
    speeds.shift();
    count++;
  };

  const updateProgresses = () => {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  };

  const checkProgress = () => {
    if (progresses[0] >= 100) {
      completeProcess();
      checkProgress();
    } else if ((progresses[0] < 100 || progresses.length === 0) && count > 0) {
      answer.push(count);
      count = 0;
    }
  };

  while (progresses.length > 0) {
    updateProgresses();
    checkProgress();
  }

  return answer;
}