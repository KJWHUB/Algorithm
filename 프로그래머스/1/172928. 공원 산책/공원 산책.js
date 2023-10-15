function solution(park, routes) {
    const width = park[0].length
    const hight = park.length
    const now = [0, 0]
    const wall = []
    
    const goTry = {
        N: (n) => {
            const [x, y] = now
            // 조건 1) 공원을 벗어나는지
            if (y - n < 0) return
            // 조건 2) 장애물을 만나는지
            const fWall = wall.filter((w) => w[0] === x).filter((w) =>  w[1] < y && w[1] >= y - n)
            if (fWall.length !== 0) return
            
            now[1] = y - n
        },
        S: (n) => {
            const [x, y] = now
            // 조건 1) 공원을 벗어나는지
            if (y + n > hight - 1) return
            // 조건 2) 장애물을 만나는지
            const fWall = wall.filter((w) => w[0] === x).filter((w) =>  w[1] > y && w[1] <= y + n)
            if (fWall.length !== 0) return
            
            now[1] = y + n
        },
        W: (n) => {
            const [x, y] = now
            // 조건 1) 공원을 벗어나는지
            if (x - n < 0) return
            // 조건 2) 장애물을 만나는지
            const fWall = wall.filter((w) => w[1] === y).filter((w) =>  w[0] < x && w[0] >= x - n)
            if (fWall.length !== 0) return
            
            now[0] = x - n
        },
        E: (n) => {
            const [x, y] = now
            // 조건 1) 공원을 벗어나는지
            if (x + n > width -1) return
            // 조건 2) 장애물을 만나는지
            const fWall = wall.filter((w) => w[1] === y).filter((w) =>  w[0] > x && w[0] <= x + n)
            if (fWall.length !== 0) return
            
            now[0] = x + n
        }
    }
    
    // 1. (시작점, 장애물) 구하기
    for(let i = 0; i < park.length; i++) {
        [...park[i]].forEach((el, x) => {
            if (el === 'X') {
                wall.push([x, i])
            } else if (el === 'S') {
                now[0] = x
                now[1] = i
            }
        })
    }
    
    // 2. 계산
    routes.forEach((el) => {
        const [op, n] = el.split(' ')
        goTry[op](Number(n))
    })
    
    return now.reverse();
}