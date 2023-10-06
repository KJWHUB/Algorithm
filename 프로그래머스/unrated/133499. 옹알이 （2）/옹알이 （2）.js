function solution(babbling) {
    // const reg1 = /^(aya|ye|woo|ma)/g
    const regStr = /^[A-D]*$/
    const regABCD = /^(?!.*(A{2}|B{2}|C{2}|D{2}))[ABCD]+$/
    const regA = /aya/g
    const regB = /ye/g
    const regC = /woo/g
    const regD = /ma/g
    
    
    return babbling.filter((el) => {
        const str = el
        .replace(regA, "A")
        .replace(regB, "B")
        .replace(regC, "C")
        .replace(regD, "D")
        
        return regStr.test(str) && regABCD.test(str)
    }).length;
}