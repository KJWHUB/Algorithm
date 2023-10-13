function solution(players, callings) {
    
    // const pass = (item, n) => {
    //     const fI = players.indexOf(item)
    //     const front = players[fI - n]
        // players[fI - n] = item
        // players[fI] = front
    // }
    
    // 시간 초과 코드
    // callings.forEach((el) => {
    //     pass(el, 1)
    // })
    
    // 해시로 해결
    const keyPlayers = {}
    const keyRanks = {}
    
    players.forEach((el,i)=>{
        const rank = i+1
        keyPlayers[el] = rank
        keyRanks[rank] = el
    })
    
    callings.forEach((el) => {
        // el 앞에 있던 사람
        const losePlayer = keyRanks[keyPlayers[el]-1]

        // el 의 등수를 구한후 키랭크에 앞에있던사람을 value 로 집어넣음
        keyRanks[keyPlayers[el]] = losePlayer
        // 제낀사람 등수를 구한후 키랭크 제낀사람 등수에 불려진 el string 을 집어넣음
        keyRanks[keyPlayers[losePlayer]] = el
        
        // 키String 객체에 el의 value를 -1 을 함으로써 등수 상승
        keyPlayers[el] -= 1
        // 키String 객체에 제껴진 사람의 value 를 +1 을 함으로써 등수 하락
        keyPlayers[losePlayer] += 1
        
        // 등수 변경 완료
        
    })
    
    return Object.values(keyRanks)
}