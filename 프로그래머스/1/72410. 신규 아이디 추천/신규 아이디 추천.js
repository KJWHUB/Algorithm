function solution(new_id) {
    const rul = {
        length: (str) => str.length >= 3 && str.length <= 15,
        available: (str) => /^[a-z0-9\-_\.]+$/.test(str),
        checkedDot: (str) => /^(?!\.)(?!.*\.{2})(?![\s\S]*\.$)/g.test(str)
    }
    
    const transform = {
        lv1: (str) => str.toLocaleLowerCase(),
        lv2: (str) => str.replaceAll(/[^a-z0-9-_.]/g, ''),
        lv3: (str) => str.replaceAll(/\.{2,}/g, '.'),
        lv4: (str) => str.replaceAll(/^\.|\.$/g, ''),
        lv5: (str) => str || 'a',
        lv6: (str) => str.substring(0, 15).replace(/\.$/, ''),
        lv7: (str) => {
            if (str.length <= 2) {
                return str + str[str.length - 1].repeat(str.length === 1 ? 2 : 1)
            }
            return str
        }
    }
    
    if (Object.values(rul).every((el) => el(new_id))) return new_id
    
    let answer = new_id.slice()
    Object.values(transform).forEach((fn, i) => {
        
        answer = fn(answer)
        
        // console.log(`step ${i+1}`, answer)
    })
    return answer;
}