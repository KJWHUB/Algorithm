const getDivisors = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    
    divisors.sort((a, b) => a - b);
    return divisors;
}

function solution(brown, yellow) {
    var answer = [0, 0];
    
    const total = brown + yellow
    const d = getDivisors(total)
    
    console.log(d)
    
    for(let i = 0; i < d.length; i++) {
        const n = d[i]
        if (n**2 === total) {
            answer[0] = n
            answer[1] = n
            break
        }
        const test = d.lastIndexOf(total/n)
        
        if (test !== -1) {
            const w = d[test]
            const h = n
            if (w*2 + (h-2)*2 === brown) {
                answer[0] = w
                answer[1] = h
                break
            }
        }
    }
    
    return answer;
}