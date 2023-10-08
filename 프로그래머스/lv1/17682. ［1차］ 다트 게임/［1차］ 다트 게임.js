const SDT = (s) => {
    let n = 1
    switch (s) {
        case 'S':
            break
        case 'D':
            n = 2
            break
        case 'T':
            n = 3
            break
    }
    return n
}

function solution(dartResult) {
    
    const regN = /[^0-9]/g
    const regSDT = /[^S|D|T]/g
    const regSA = /[^*|#]/g
    
    const res = [...dartResult]
    const newArr = res.reduce((acc, curr) => {
        if (Number((acc[acc.length - 1])) && curr === '0') {
            return acc + curr
        }
        if ((Number(curr) || curr === '0') && typeof(acc[acc.length - 1]) !== 'number') {
            return acc + '|' + curr
        }
        return acc + curr
    }).split('|')
    
    console.log('newARR :::', newArr)
    
    const c = newArr.map((el,i, self) => {
        const elArr = []
        let cnt = Number(el.replaceAll(regN, ''))
        cnt **= SDT(el.replaceAll(regSDT, ''))
        
        elArr.push(cnt)
        if (/[*#]/.test(el)) elArr.push(el.replaceAll(regSA, ''))
        
        return elArr
    })
    
    c.forEach((el, i, self) => {
        if (el[1]) {
            switch (el[1]) {
                case '*':
                    el[0] *= 2
                    if (i - 1 >= 0) {
                        self[i - 1][0] *= 2
                    }
                    break
                case '#':
                    el[0] *= -1
                    break
            }
            el.pop()
        }
        
    })
    
    console.log(c)
    
    return c.flat().reduce((acc, curr) => acc + curr);
}