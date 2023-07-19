/*
 * @Author: zhanghao
 * @Date: 2023-07-13 16:31:45
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 14:41:20
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\utils\parsePropetoryPath.js
 */
// 将属性字符串转换为路径数组
function parsePropetoryPath(path){
    // 降[]替换为.路径
    path = path.replace(/[\[ | \]]/g, '.');
    if (path.indexOf('.') === 0) { return [] }
    let pathListByPoint = path.split('.');
    return pathListByPoint
}
parsePropetoryPath('adb.adf[0]222');

function findValueByPath(obj, parsePath) {
    let result = obj[parsePath[0]] ;
    let i = 1;
    let length = parsePath.length;
    while (i < length && parsePath[i] && result) {
        result = result[parsePath[i]];
        i++;
    }
    return result

}

/*
 * @Author: zhanghao
 * @Date: 2023-07-13 11:25:27
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 14:40:08
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\index.js
 */

const get = (obj, path,defaultValue) => {
    let result = undefined;
    // 判断对象是否合法
    if (typeof obj !== 'object') {
        return defaultValue || undefined 
    }
    // 解析路径
    let parsePath = parsePropetoryPath(path);
    // 开始寻找值
    result = findValueByPath(obj, parsePath);

    return result
};

export { get as default };
