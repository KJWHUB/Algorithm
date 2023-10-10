function solution(s) {
    var answer = 0;
    
    const arr = [...s]
    
    if (arr.every((el) => el === s[0])) return 1
    
    const str = arr.reduce((acc, curr, i) => {
        const word = acc + curr
        // 만약에 acc[0] 의 갯수만큼 다른문자가 있다면 공백 카운터 업 후 공백리턴
        const notCnt = word.replaceAll(word[0], '').length
        const cnt = word.length - notCnt
        
        if (notCnt === cnt) {
            answer++
            return ''
        }
        
        if (i === arr.length - 1) {
            answer++
        }
        
        return acc + curr
    })
    
    return answer;
}