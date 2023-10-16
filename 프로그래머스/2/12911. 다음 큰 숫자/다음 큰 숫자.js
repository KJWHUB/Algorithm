function solution(n) {
    const length1 = (num) => num.toString(2).replaceAll('0', '').length
    const nl = length1(n)
    
    let answer = n;
    
    
    while(true) {
        answer++
        if (nl === length1(answer)) break
    }
    
    return answer;
}