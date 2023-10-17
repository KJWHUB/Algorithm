function solution(s) {
    const arr = [...s]
    const stack = []
    
    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === stack.at(-1)) {
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}