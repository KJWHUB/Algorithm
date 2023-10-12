function solution(keymap, targets) {
    const keyObj = {}
    
    for (let i = 65; i <= 90; i++) {
        keyObj[String.fromCharCode(i)] = 0
    }
    
    keymap.forEach((str) => {
        for(let i = 0; i < str.length; i++) {
            const key = keyObj[str[i]]
            if (key === 0 || key > i + 1) {
                keyObj[str[i]] = i + 1
            }
        }
    })
    
    const fn = (str) => {
        const arr = [...str].map((s) => keyObj[s])
        if (arr.includes(0)) {
            return -1
        }
        return arr.reduce((acc, curr) => acc + curr)
    }
    
    return targets.map((el) => fn(el));
}