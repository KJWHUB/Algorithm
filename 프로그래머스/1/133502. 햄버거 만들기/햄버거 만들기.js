// 시간 초과 코드
function solution(ingredient) {
    var answer = 0;
    
//     ingredient.reduce((acc, curr) => {
//         const plus = acc + curr
//         if (plus.length >= 4 && plus.slice(plus.length - 4) === '1231') {
//             answer++
//             return plus.slice(0, plus.length - 4)
//         }
        
//         return acc + curr
//     }, '')
    
    const a = []
    
    ingredient.forEach((el,i) => {
        a.push(el)
        if (a.length >= 4 && a.slice(a.length - 4).join("") === '1231') {
            answer++
            a.splice(a.length - 4, a.length)
        }
    })
    
    return answer;
}