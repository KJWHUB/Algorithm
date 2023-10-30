function solution(citations) {
    citations.sort((a, b) => b - a)
    let h = 0;
    
    for(let i = Math.max(...citations); i > 0; i--) {
        h = i
        const hMore = citations.filter((el) => el >= h)
        const hRemain = citations.filter((el) => el < h)
        
        if (hRemain.length === 0 && hMore.length >= h) {
            break
        }
        
        if (hMore.length >= h && Math.max(...hRemain) <= h) {
            break
        }
    }
    
    return h;
}