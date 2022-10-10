# react技术大杂烩

#### npm start

#### npm test

#### npm run build

#### npm run eject

### 目录结构

```
router               --路由信息
static               --静态资源信息
utils                --一堆工具函数
views                --页面信息
```

### 01-react项目less配置

第一步：暴露出webpack配置文件

```
npm run eject (此命令一旦运行不可逆)
```

第二步：安装less以及less-loader

```
npm install less less-loader --save-dev
```

第三步：修改webpack的配置文件

```js
//运行完以上命令后，项目根目录下会多出一个 config 文件夹，找到里面的 webpack.config.js 这个文件

// 增加
const lessRegex = /\.less$/; 
const lessModuleRegex = /\.module\.less$/;

// 全局搜索Oneof ，添加
{
    test: lessRegex,
        exclude: lessModuleRegex,
            use: getStyleLoaders(
                {
                    importLoaders: 2,
                    sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                },
                "less-loader"
            ),
                sideEffects: true,
},
    {
        test: lessModuleRegex,
            use: getStyleLoaders(
                {
                    importLoaders: 2,
                    sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                    modules: {
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                },
                "less-loader"
            ),
    },
```

通过模块的方式引入 

```
import styles from "./index.module.less";
```

直接引入 

```
import "./index.less"
```

