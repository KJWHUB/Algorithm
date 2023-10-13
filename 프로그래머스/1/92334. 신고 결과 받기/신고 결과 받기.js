function solution(id_list, report, k) {
    const reportProcess = new Set(report)
    const userObj = {}
    
    id_list.forEach((el) => userObj[el] = { list: [], count: 0 })
    
    reportProcess.forEach((el) => {
        const [reporter, reportedUser] = el.split(' ')
        userObj[reporter].list.push(reportedUser)
        userObj[reportedUser].count++
    })
    
    const listCalculate = (id) => {
        let email = 0
        userObj[id].list.forEach((el) => {
            if (userObj[el].count >= k) email++
        })
        return email
    }
    
    return id_list.map((el) => listCalculate(el));
}