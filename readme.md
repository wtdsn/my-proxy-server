## 正向代理代码实践


### 项目结构
```
proxy
├─ client    // 页面资源文件
│  ├─ index.html
│  └─ js
│     ├─ ajax.js
│     └─ index.js
├─ proxy    // 代理 server
│  ├─ app.js
└─ server     // 后台服务
   ├─ app.js

```

### 安装
通过打开 proxy 和 server 目录。通过命令
`npm install`  或者 `yarn` 安装项目依赖


### 运行
分别进入 proxy 和 server 目录文件下 ， 通过 node 执行 app.js 文件
`node ./app.js`

proxy server 会运行在 localhost:3000 上
后台的服务 会运行在 localhost:3001 上

在游览器输入 ： localhost:3000 会打开 client 里面的 index.html 页面。
页面会显示一个 button 按钮 。内容为 `获取验证码`
点击可以获取验证码。

多次点击，验证码会从 1000 开始递增。表示请求成功 ， 并且 cookie 有效
否则请求失败！
