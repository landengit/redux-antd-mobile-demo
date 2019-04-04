# react16 + redux6 + webpack4 + redux-thunk2 + antd-mobile2 + connected-react-router + immutable

支持国际化、热更新、less 等等

## Install
```bash
cnpm install
```

## Run
```bash
npm run dev
```

## 项目结构
```markdown
├── config   (配置信息：webpack配置，页面内config)
│
├── dist   (打包生成:本地:npm run build)
│
├── mock  (mock数据)
│
├── src  (项目入口)
│ │
│ └── i18n (国际化文件)
│ │
│ └── **page** (页面集合)
│ │ │
│ │ └─── your page  (各业务页面文件)
│ │ │ │
│ │ │ └─── components  (当前页面拆的子组件)
│ │ │ └─── redux       (当前页面的redux相关：action、reducer)
│ │ │ └─── index.js    (当前页面的的页面层:页面渲染 view)
│ │ │ └─── index.less  (当前页面的的样式)
│ │ │
│ │ └─── common (公共页面、组件、方法)
│ │ │
│ │ └─── Home (落地页)
│ │
│ └── store (redux的store、routes、reducers等)
│ │
│ └── utils (工具包)
│
├── node_modules  (打包生成:node依赖包)
│
├── .babelrc   (babel配置文件)
│
├── package   (node依赖包配置)
│
├── readMe   (！！！！！！读我)
```