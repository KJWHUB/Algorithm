/*
    효율성 실패 코드
        for(let i = 0; i < participant.length; i++) {
        const fI = completion.indexOf(participant[i])
        if (fI === -1) {
            answer = participant[i]
            break
        } else {
            completion.splice(fI, 1)
        }
    }
*/

function solution(participant, completion) {
    var answer = '';
    const p = {}
    const c = {}
    
    const fn = (obj, arr) => {
        arr.forEach((el) => {
            if(obj[el]) {
                obj[el]++
            } else {
                obj[el] = 1
            }
        })
    }
    
    fn(p, participant)
    fn(c, completion)
    
    for(const key in p) {
        if (c[key]) {
            p[key] -= c[key]
            if (p[key] >= 1) {
                answer = key
                break
            }
        } else {
            answer = key
            break
        }
    }
    

    
    return answer;
}