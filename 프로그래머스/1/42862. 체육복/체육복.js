function solution(n, lost, reserve) {
    lost.sort((a, b) => a-b)
    reserve.sort((a, b) => a-b)
    
    
    const lostFilter = lost.filter((el) => !reserve.includes(el))
    const reserveFilter = reserve.filter((el) => !lost.includes(el))
    
    console.log(lostFilter, reserveFilter)
    
    reserveFilter.forEach((el) => {
        const f = lostFilter.indexOf(el - 1)
        const b = lostFilter.indexOf(el + 1)
        
        if (f !== -1) {
            lostFilter.splice(f, 1)
        } else if (b !== -1) {
            lostFilter.splice(b, 1)
        }
    })
    
    console.log('마지막 도난 리스트 상태', lostFilter)
    
    return n - lostFilter.length;
}