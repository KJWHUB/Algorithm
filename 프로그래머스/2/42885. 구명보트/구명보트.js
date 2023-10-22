function solution(people, limit) {
    var answer = 0;
    
    const boat = []
    const copy = people.slice().sort((a, b) => a - b)
    while(copy.length > 0) {
        
        if (copy.length > 1) {
            const max = copy.pop()
            boat.push(max)
            
            if (boat.length === 2 && boat[0] + max > limit) {
                boat.shift()
                answer++
            }
            
            const min = copy[0]
            if (min + boat[0] <= limit) {
                copy.shift()
                boat.shift()
                answer++
            }
            
        } else if (copy.length === 1) {
            
            const l = copy.shift()
            if (boat.length === 0) {
                answer++
                break
            }
            if (boat.length === 1) {
                if (boat[0] + l <= limit) {
                    answer++                
                } else {
                   answer += 2 
                }
                break
            }
            if (boat.length === 2) {
                if (boat[1] + l <= limit) {
                    answer += 2
                } else {
                    answer += 3
                }
                break
            }
        }
    }
    
    return answer;
}