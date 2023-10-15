function solution(today, terms, privacies) {
    var answer = [];
    
    const m1 = 28
    
    const tMap = new Map()
    terms.forEach((el) => {
        const [t, m] = el.split(' ')
        tMap.set(t, Number(m))
    })
    
    const processM = (m) => {
        if (m < 10) return `0${m}`
        return `${m}`
    }
    const processD = (d) => {
        const numD = Number(d) - 1
        if (numD < 10) return `0${numD}`
        return `${numD}`
    }
    
    privacies.forEach((el, i) => {
        const [date, tType] = el.split(' ')
        const [$Y, $M, $D] = date.split('.')
        const mDate = tMap.get(tType) + Number($M)
        
        let pY = mDate > 12 ? Number($Y) + Math.floor(mDate/12) : $Y
        let pM = mDate > 12 ? '0' + mDate%12 : processM(mDate)
        let pD = processD($D)
        
        if (pD === '00') {
            pD = '28'
            pM = processM(Number(pM) - 1)
        }
        if (pM === '00') {
            pM = '12'
            pY = `${Number(pY) - 1}`
        }
        const processDate = `${pY}.${pM}.${pD}`
        
        if (new Date(today) > new Date(processDate)) {
            answer.push(i + 1)
        }
    })
    
    return answer;
}