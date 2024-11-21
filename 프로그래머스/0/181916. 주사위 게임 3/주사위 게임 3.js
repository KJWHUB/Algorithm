function solution(a, b, c, d) {
    const map = {}
    
    const calculate = {
        all: (p) => 1111 * p,
        triple: (p, q) => (10 * p + q) ** 2,
        double: (p, q) => (p + q) * Math.abs(p - q),
        doubleAndDifferent: (q, r) => q * r,
        different: () => Math.min(a, b, c, d)
    }
    const arr = [a,b,c,d]
    
    arr.forEach((n) => {
        map[n] = (map[n] || 0) +1
    })
    
    const entries = Object.entries(map)
    
    if (entries.length === 1) {
        return calculate.all(a)
    }
    
    if (entries.length === 4) {
        return calculate.different()
    }

    if (entries.length === 3) {
        const [[q], [r]] = entries.filter(([_, count]) => count === 1)
        return calculate.doubleAndDifferent(Number(q), Number(r))
    }
    
    const [[p, pCount], [q, qCount]] = entries
    .sort(([_a, aValue], [_b, bValue]) => bValue - aValue)
    .map(([key, value]) => [Number(key), value])
    
    if (pCount === qCount) {
        return calculate.double(p, q)
    } else {
        return calculate.triple(p, q)
    }
}