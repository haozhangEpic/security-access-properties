/*
 * @Author: zhanghao
 * @Date: 2023-07-19 14:16:46
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 14:41:41
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\rollup.config.js
 */
export default {
    input:'index.js',
    output:{
        file:'dist/index.js',
        formt:'umd',
        name:'sap',
        clean:true
    }
}