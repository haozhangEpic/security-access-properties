export function findValueByPath(obj, parsePath) {
    let result = obj[parsePath[0]] ;
    let i = 1;
    let length = parsePath.length
    while (i < length && parsePath[i] && result) {
        result = result[parsePath[i]]
        i++
    }
    return result

}