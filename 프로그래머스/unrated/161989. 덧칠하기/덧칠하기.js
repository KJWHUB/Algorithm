function solution(n, m, section) {    
    if (m === 1) {
        return section.length
    }

    if (n === m) {
        return 1
    }
    
    if (section.length === 1) {
        return 1
    }
    
    if (n/2 <= m) {
        const max = Math.max(...section)
        const min = Math.min(...section)
        
        return max - m + 1 > min ? 2 : 1
    }
    
   
    // 1. 카피배열 생성
    // 2. 배열의 0번쨰 부터 m번째 까지 카피배열의 속한 속성 제거 후 count++
    // 3. 카피 배열 갯수가 0 이 될때까지
    var answer = 0;
    let arr = [...section]
    
    while(arr.length > 0) {
        if(arr.length === 1) {
            answer++
            arr.shift()
            break
        }
        answer++
        const x = arr[0] + m - 1
        arr = arr.filter((el) => el > x)
    }
    
    
    return answer;
}