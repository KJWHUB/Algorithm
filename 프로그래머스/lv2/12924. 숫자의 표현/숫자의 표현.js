/*
    효율성 실패 코드
    function solution(n) {
    var answer = 0;
    
    const arr = new Array(n).fill().map((el, i) => i + 1)
    const fn = (copyArr) => {
        let x = false
        if (copyArr.length > 1) {
            copyArr.reduce((acc, curr) => {
                if (acc === n) {
                    x = true
                }
                return acc + curr
            })
        } else if (copyArr.length === 1) {
            x = true
        }
        return x
    }
    arr.forEach((el, i) => {
        const t = arr.slice(i)
        if (fn(t)) answer++
    })
    return answer;
    }
*/

function solution(n) {
    let answer = 1;
    
    const fn = (i) => {
        let x = 0
        let plus = i
        while(x <= n) {
            x += plus
            if (x === n) break
            plus++
        }
        return x === n
    }
    
    for (let i = 1; i <= Math.floor(n/2); i++) {
        if (fn(i)) answer++
    }
    
    return answer
}