function solution(clothes) {
    let answer = 1;
    
    const hash = new Map()
    
    clothes.forEach(([costumeName, costumeType]) => {
        if (hash.has(costumeType)) {
            hash.set(costumeType, hash.get(costumeType) + 1)
        } else {
            hash.set(costumeType, 1)
        }
    })
    
    hash.forEach((value) => {
        answer *= value + 1;
    })

    answer -= 1;
    
    return answer;
}