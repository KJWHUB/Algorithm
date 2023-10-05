function solution(N, stages) {
    const stArr = new Array(N + 1).fill(0).map((el, i) => [i + 1, 0])
    
    for(let i = 0; i < stages.length; i++) {
        const x = stages[i]
        const findItem = stArr.find((el) => el[0] === x)
        
        if (findItem) {
            findItem[1]++
        }
    }

    let cnt = stages.length
    const c = stArr.map((el, i) => {
        el[2] = cnt
        cnt -= el[1]
        return el
    })
    c.pop()
     
    return c.sort((a, b) => b[1]/b[2] - a[1]/a[2]).map((el) => el[0]);
}