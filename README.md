## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn pre`

Builds the app for development to the `pre` folder.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

create-react-app 生成的项目看不到 webpack 相关的配置文件，使用该命令可暴露项目配置

### 利用 react-app-rewired 实现按需打包

作用是在不`npm run eject`的情况下，覆盖create-react-app的配置

### dotenv-cli

作用是可以使用.env文件指定的变量，然后`process.env`对象就有该变量的值了

### 单页面路由的history模式后端配置

使用history模式来实现的单页应用，访问项目进入首页，点击按钮跳入另一个路由，一切都是很正常的，但当这时刷新页面，发现就会出现404了。出现这样的错误Cannot GET /message/，因为默认浏览器会认为你是在请求服务端的路由，服务端那边没有对应的处理，所以自然就会出错了。

可以引入connect-history-api-fallback中间件来解决

### [git commit 规范工具的应用](https://www.dazhuanlan.com/2020/03/24/5e7a05d84e644/)

- 配置 Commitizen 需要三个 npm 包：Commitizen、cz-conventional-changelog、git-cz

- commitizen 有两个配置文件

  - .czrc

    ```json
    // 配置在 package.json 的根节点
    "config": {
        "commitizen": {
          "path": "cz-conventional-changelog"
        }
      }
    
    // 或者通过 .czrc 配置文件进行配置
    // .czrc
    { "path": "cz-conventional-changelog" }
    ```

  - changelog.config.js

    ```javascripta
    // changelog.config.js
    module.exports = {
        "list": [
            "test",
            "feat",
            "fix",
            "chore",
            "docs",
            "refactor",
            "style",
            "ci",
            "perf"
        ],
        "maxMessageLength": 64,
        "minMessageLength": 3,
        "questions": [
            "type",
            "scope",
            "subject",
            "body",
            "breaking",
            "issues",
            "lerna"
        ],
        "scopes": [],
        "types": {
            "chore": {
            "description": "Build process or auxiliary tool changes",
            "emoji": "🤖",
            "value": "chore"
            },
            "ci": {
            "description": "CI related changes",
            "emoji": "🎡",
            "value": "ci"
            },
            "docs": {
            "description": "Documentation only changes",
            "emoji": "✏️",
            "value": "docs"
            },
            "feat": {
            "description": "A new feature",
            "emoji": "🎸",
            "value": "feat"
            },
            "fix": {
            "description": "A bug fix",
            "emoji": "🐛",
            "value": "fix"
            },
            "perf": {
            "description": "A code change that improves performance",
            "emoji": "⚡️",
            "value": "perf"
            },
            "refactor": {
            "description": "A code change that neither fixes a bug or adds a feature",
            "emoji": "💡",
            "value": "refactor"
            },
            "release": {
            "description": "Create a release commit",
            "emoji": "🏹",
            "value": "release"
            },
            "style": {
            "description": "Markup, white-space, formatting, missing semi-colons...",
            "emoji": "💄",
            "value": "style"
            },
            "test": {
            "description": "Adding missing tests",
            "emoji": "💍",
            "value": "test"
            }
        }
    };
    ```

    

  