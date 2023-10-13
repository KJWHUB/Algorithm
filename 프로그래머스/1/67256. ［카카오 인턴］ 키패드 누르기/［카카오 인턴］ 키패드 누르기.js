function solution(numbers, hand) {
    const handMap = new Map([['left', 'L'], ['right', 'R']])
    const keyPad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*', 0, '#']
    ]
    const lMap = keyPad.map((el) => el[0])
    const rMap = keyPad.map((el) => el[2])
    const centerMap = keyPad.map((el) => el[1])
    const l = [3, 0]
    const r = [3, 2]
    let answer = '';
    
    const fingerCalculate = (n) => {
        let direction = ''
        if (lMap.includes(n)) {
            direction = 'L'
        } else if (rMap.includes(n)) {
            direction = 'R'
        } else {
            const fI = [centerMap.indexOf(n), 1]
            const lD = Math.abs(fI[0] - l[0]) + Math.abs(fI[1] - l[1])
            const rD = Math.abs(fI[0] - r[0]) + Math.abs(fI[1] - r[1])
            if (lD !== rD) {
                direction = lD > rD ? 'R' : 'L'    
            } else {
                direction = handMap.get(hand)
            }
        }
        return direction
    }
    
    const changeLocation = (n, f) => {
        const nI = keyPad.findIndex((el) => el.includes(n))
        const nCoord = [nI, keyPad[nI].indexOf(n)]
        let item = f === 'L' ? l : r
        const fn = (item, nCoord) => {
            nCoord.forEach((el, i) => {
                item[i] = el
            })
        }
        fn(item, nCoord)
    }
    
    // 클릭
    const clickKey = (n) => {
        let finger = ''
        // 눌러야할 손가락 계산
        finger = fingerCalculate(n)
        // 눌러야할 손가락 위치 변경
        changeLocation(n, finger)
        // 누른 손가락 결과에 +=
        answer += finger
    }
    
    
    numbers.forEach((el) => {
        clickKey(el)
    })
    
    return answer;
}