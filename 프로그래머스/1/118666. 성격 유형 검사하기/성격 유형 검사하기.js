function solution(survey, choices) {
    const point = new Map([
        [1, 3],
        [2, 2],
        [3, 1],
        [4, 0],
        [5, 1],
        [6, 2],
        [7, 3]
    ])
    const category = new Map([
        ['R', 0],
        ['T', 0],
        ['C', 0],
        ['F', 0],
        ['J', 0],
        ['M', 0],
        ['A', 0],
        ['N', 0],
    ])
    
    const ctgrUpdate = (key, n) => {
        category.set(key, category.get(key) + point.get(n))
    }
    
    survey.forEach(([b, g], i) => {
        const n = choices[i]
        if (n > 4) {
            ctgrUpdate(g, n)
        } else if (n < 4) {
            ctgrUpdate(b, n)
        }
    })
    
    const list = [...category]
    const arr = []
    for(let i = 0; i < category.size; i += 2) {
        arr.push([list[i], list[i + 1]])
    }
    
    return arr
        .map((el) => {
            return el.reduce((acc, curr) => {
                if (acc[1] === curr[1]) return [acc[0], curr[0]].sort()[0]
                    return acc[1] > curr[1] ? acc[0] : curr[0]
                })
        })
        .join('');
}