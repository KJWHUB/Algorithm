function solution(bandage, MAX_HEALTH, attacks) {
    const [t, x, y] = bandage
    let s = 0
    let currentHealth = MAX_HEALTH
    let recoveryStack = 0
    
    while (attacks.length) {
        const [as, ad] = attacks[0]
        
        if (as === s) {
            attacks.shift()
            currentHealth -= ad
            recoveryStack = 0
            
            // death
            if (currentHealth <= 0) return -1
        } else if (currentHealth < MAX_HEALTH) {
            currentHealth = currentHealth + x > MAX_HEALTH 
                ? MAX_HEALTH 
                : currentHealth + x
            recoveryStack++
            
            if (recoveryStack === t) {
                currentHealth = currentHealth + y > MAX_HEALTH
                    ? MAX_HEALTH
                    : currentHealth + y
                recoveryStack = 0
            }
        } else {
            recoveryStack++
        }
        
        // next
        s++
    }
    
    return currentHealth;
}