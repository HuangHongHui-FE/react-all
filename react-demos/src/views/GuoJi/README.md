### react-i18next

文档：https://react.i18next.com/

```js
# npm
npm install react-i18next i18next --save
# 如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
npm install i18next-http-backend i18next-browser-languagedetector --save
```

在程序入口引入 i118n

##### 检测当前浏览器语言国际化组件

```
npm install i18next-browser-languagedetector --save
```

##### 配置

```
在i18n.js,首先导入 LanguageDetector，其次 use(LanguageDetector), 使用插件，最终在 init 配置项里配置 lng: navigator.language, 至此切换浏览器语言国际化组件完成；
```

