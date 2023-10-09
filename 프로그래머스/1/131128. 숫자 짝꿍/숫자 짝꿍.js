// 시간 초과 코드
// function solution(X, Y) {
    
//     const x = [...X]
//     const y = [...Y]
    
//     const arr = []
    
//     const min = X.length <= Y.length ? x : y
//     const max = X.length <= Y.length ? y : x
    
//     for(let i = 0; i < min.length; i++) {
//         if (max.length === 0) break
//         const item = max.findIndex((el) => el === min[i])
//         if (item !== -1) {
//             arr.push(max.splice(item, 1)[0])
//         }
//     }
    
    
//     if (arr.length === 0) return '-1'
//     if (arr.every((el) => el === '0')) return '0'
    
//     return arr.sort((a, b) => b - a).join('');
// }


function solution(X, Y) {
    
    const listX = new Array(10).fill(0)
    const listY = new Array(10).fill(0)
    
    const x = [...X]
    const y = [...Y]
    
    x.forEach((el) => listX[el]++)
    y.forEach((el) => listY[el]++)
    
    const arr = []
    
    for(let i = 0; i < 10; i++) {
        // console.log('ii', i, listX[i], listY[i])
        if (listX[i] !== 0 && listY[i] !== 0) {
            const cnt = listX[i] <= listY[i] ? listX[i] : listY[i]
            arr.push(`${i}`.repeat(cnt))
        }
    }
    
    console.log('arr :::', arr)
    
    
    if (arr.length === 0) return '-1'
    if (arr.length === 1 && [...arr[0]].every((el) => el === '0')) return '0'
    
    return arr.reverse().join('');
}