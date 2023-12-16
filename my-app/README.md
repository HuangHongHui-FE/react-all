#### 1、执行顺序
1、首次App函数执行
2、layout effect
3、effect
4、点击触发re-render，App函数再次执行
5、对上次的layout effect进行cleanup
6、本次的layout effect
7、对上次的effect进行cleanup
8、本次的effect

#### 2、eslint提交规范

1、feat（feature，产品新功能，通常是能够让用户觉察到的变化，小到文案或样式修改）
2、fix（bug fix，修复 bug）
3、docs（documentation，更新文档或注释）
4、style（code formatting, missing semi colons, … 代码格式调整，对逻辑无影响：比如为按照 eslint 或团队风格修改代码格式。注意不是 UI 变更）
5、refactor（重构：代码优化但不影响现有功能或添加功能。比如文件、变量重命名、代码抽象为函数，消除魔法数字等）
6、test（when adding missing tests 单测相关变更）
7、chore（杂项：其他无法归类的变更，比如代码合并）
8、perf （性能提升变更）
9、ci（持续集成脚本相关变更）
10、build（代码构建相关变更：比如修复部署时的构建问题、构建脚本 webpack 或 gulp 相关变更）
11、temp（临时代码：不计入 CHANGELOG，比如必须部署到某种环境才能测试的变更。如测试真机上 transparent title 启动参数是否设置成功）