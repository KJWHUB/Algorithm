const fn = (n, length) => {
    
}

function solution(s, skip, index) {
    const az = []
    for (let i = 97; i < 123; i++) {
        az.push(String.fromCharCode(i))
    }
    const azf = az.filter((el) => !skip.includes(el))
    const arr = [...s]
    const map = arr.map((el) => {
        const fI = azf.indexOf(el)
        if (fI + index > azf.length - 1) {
            return azf[(fI + index) % azf.length]
        }
        
        return azf[fI + index]
    })
    return map.join('');
}