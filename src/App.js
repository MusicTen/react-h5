import React from 'react';

/* 
  1 导入react-router-dom
  2 导入页面组件
  3 配置路由规则
*/
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

// 导入页面组件
import Home from './pages/Home'
import Map from './pages/Map'
import Test from './pages/Test'
import HooksDemo from './pages/HooksDemo'
import AA from './pages/AA'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/map" component={Map}></Route>
          <Route exact path="/test" component={Test}></Route>
          <Route path="/test/:id" component={AA}></Route>
          <Route path="/hooks" component={HooksDemo}></Route>
          { /* Switch 在其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配。也用来匹配404页面 */ }
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
