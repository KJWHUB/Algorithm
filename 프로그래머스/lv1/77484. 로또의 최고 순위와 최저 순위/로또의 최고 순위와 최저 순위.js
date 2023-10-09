function solution(lottos, win_nums) {
    
    const rank = new Map([
        [6, 1],
        [5, 2],
        [4, 3],
        [3, 4],
        [2, 5],
        [1, 6],
        [0, 6],
    ])
    
    const zero = lottos.filter((el) => el === 0)
    const a = lottos.filter((el) => win_nums.includes(el))
    
    const max = rank.get(zero.length + a.length)
    const min = rank.get(a.length)
    
    
    return [max, min];
}