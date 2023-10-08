function solution(nums) {
    const n = nums.length/2
    const set = new Set(nums)
    
    if (set.size >= n) {
        return n
    }
    
    return set.size;
}