/*
 * @Author: zhanghao
 * @Date: 2023-07-13 11:25:27
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 14:40:08
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\index.js
 */
import { parsePropetoryPath, findValueByPath } from './utils/index'

const get = (obj, path,defaultValue) => {
    let result = undefined
    // 判断对象是否合法
    if (typeof obj !== 'object') {
        return defaultValue || undefined 
    }
    // 解析路径
    let parsePath = parsePropetoryPath(path)
    // 开始寻找值
    result = findValueByPath(obj, parsePath)

    return result
}
export default get