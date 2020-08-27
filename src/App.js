import React, { Suspense, lazy } from 'react';
/*
  Suspense 就是实现所谓的延迟加载效果，既然要实现延迟的效果，就必然要有一个提醒的组件
  这就是它的属性fallback，这个属性当然可以是一个组件
  这比我们以前去写一个一个的loading组件便捷的很多
  但是这个组件有个缺点，目前只支持组件的加载，对于网络数据的请求，暂不支持
*/

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
/* 
  1 导入react-router-dom
  2 导入页面组件
  3 配置路由规则
*/

// 导入页面组件
import Home from './pages/Home'
/* 
  lazy是react提供的组件懒加载的能力，在官方没有支持lazy之前
  在react中我们一般使用react-loadable来实现组件懒加载的能力
  但是，lazy并不支持服务端渲染（SSR），所以在使用ssr的情况下，lazy暂时不能使用
*/
const Map = lazy(() => import('./pages/Map')) // 这里改变了
const HooksDemo = lazy(() => import('./pages/HooksDemo'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Test = lazy(() => import('./pages/Test'))
const AA = lazy(() => import('./pages/AA'))
const Address = lazy(() => import('./pages/Address'))

function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/map" component={Map}></Route>
            <Route exact path="/test" component={Test}></Route>
            <Route path="/test/:id" component={AA}></Route>
            <Route path="/hooks" component={HooksDemo}></Route>
            <Route path="/address" component={Address}></Route>
            { /* Switch 在其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配。也用来匹配404页面 */ }
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App;
