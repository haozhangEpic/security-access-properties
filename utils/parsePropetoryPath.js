/*
 * @Author: zhanghao
 * @Date: 2023-07-13 16:31:45
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 14:41:20
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\utils\parsePropetoryPath.js
 */
// 将属性字符串转换为路径数组
export function parsePropetoryPath(path){
    let flag = false
    let parsePath = []
    // 降[]替换为.路径
    path = path.replace(/[\[ | \]]/g, '.')
    if (path.indexOf('.') === 0) { return [] }
    let pathListByPoint = path.split('.')
    return pathListByPoint
}
parsePropetoryPath('adb.adf[0]222')
