<!--
 * @Author: zhanghao
 * @Date: 2023-07-19 15:22:30
 * @LastEditors: zhanghao
 * @LastEditTime: 2023-07-19 15:26:27
 * @Description: 
 * @FilePath: \JSON\zhanghaoepic-npm-test001\README.md
-->
## 下载

```node
npm i security-access-properties
```

## 使用

```javasc
import sap from 'security-access-properties'

let obj = {
    name:'你好',
    array:[
        {
            name:'世界'
        }
    ]
}
console.log(sap(obj,'name')) // 你好
console.log(sap(obj,'array[0].name')) // 世界
```
