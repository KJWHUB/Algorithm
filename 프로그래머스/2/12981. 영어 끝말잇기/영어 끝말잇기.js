function solution(n, words) {
    var answer = [0, 0];
    const setO = new Set()
    
    for(let i = 0; i < words.length; i++) {
        // 회차 증가
        if (i === 0 || i%n === 0) answer[1]++
       
        const bSize = setO.size
        setO.add(words[i])
        const aSize = setO.size
        
        // 체크
        if (i !== 0 && (bSize === aSize || words[i][0] !== words[i - 1]?.at(-1))) {
            const numH = i%n + 1
            answer[0] = numH
            break
        }
        
        // 통과
        if (i === words.length - 1) answer[1] = 0
    }

    return answer;
}