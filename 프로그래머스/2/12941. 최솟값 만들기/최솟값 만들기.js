function solution(A,B){
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    
    var answer = 0;
    
    A.forEach((el, i) => {
        answer += el*B[i]
    })
    

    return answer;
}