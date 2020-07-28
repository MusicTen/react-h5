import React from 'react';

/* 
  1 导入react-router-dom
  2 导入页面组件
  3 配置路由规则
*/
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// 导入页面组件
import Home from './pages/Home'
import Map from './pages/Map'

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/map" component={Map}></Route>
      </Router>
    </div>
  );
}

export default App;
