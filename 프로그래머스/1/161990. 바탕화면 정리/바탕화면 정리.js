function solution(wallpaper) {
    const start = [0, 0]
    const end = [0, 0]
    
    const xList = []
    const yList = []
    
    wallpaper.forEach((col, x) => {
        [...col].forEach((s, y) => {
            if (s === '#') {
                xList.push(x)
                yList.push(y)
            }
        })
    })
    
    const xMax = Math.max(...xList)
    const xMin = Math.min(...xList)
    const yMax = Math.max(...yList)
    const yMin = Math.min(...yList)
    
    start[0] = xMin
    start[1] = yMin
    end[0] = xMax + 1
    end[1] = yMax + 1
    
    
    return [start, end].flat();
}