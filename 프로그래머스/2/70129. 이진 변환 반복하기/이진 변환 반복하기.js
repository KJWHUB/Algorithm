function solution(s) {
    let str = s.slice()
    var answer = [0, 0];
    
    while(str !== '1') {
        answer[0]++
        
        const L = str.length
        const deleteZeroL = str.replaceAll('0', '').length
        
        answer[1] += L - deleteZeroL
        
        str = deleteZeroL.toString(2)
    }
    
    return answer;
}