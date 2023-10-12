function solution(board, moves) {
    var answer = 0;
    
    const colBoard = board[0].map((col, i) => board.map(row => row[i]))
    const basket = []
    
    const arm = (n) => {
        const col = colBoard[n - 1]
        if (col.every((el) => el === 0)) return 0
        const itemI = col.findIndex((el) => el > 0)
        const item = col[itemI]
        colBoard[n - 1].splice(itemI, 1, 0)
        return item
    }

    const basketCnt = () => {
        if (basket.length < 2) return
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
            basket.pop()
            basket.pop()
            answer += 2
        }
    }
    
    moves.forEach((el) => {
        const item = arm(el)
        if (item) basket.push(item)
        basketCnt()
    })
    
    return answer;
}