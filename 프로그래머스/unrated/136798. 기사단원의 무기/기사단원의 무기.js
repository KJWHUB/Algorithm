// const fn = (n) => {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n%i === 0) count++
//     }
//     return count
// }
const getDivisors = (num) => {
    let count = 0;
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            count++
            if(num / i != i) count++
        }
    }
    return count
}

function solution(number, limit, power) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        const a = getDivisors(i)
        count += a > limit ? power : a
    }
    return count;
}
