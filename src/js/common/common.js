//iterate object
export const iterateObject = (obj) => {
    let result = ''
    const getProp = (subObj) => {
        if (typeof subObj === 'string') {return subObj} 
        for (const prop in subObj) {
            if (typeof (subObj[prop]) === 'object') {
                getProp(subObj[prop])
            } else {
                result +=`${prop}:${subObj[prop]}. ` 
            }
    }
}
    getProp(obj)
    return result
}