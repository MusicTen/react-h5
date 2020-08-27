import React from 'react'
import { withRouter } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'
import './index.scss'

function NavHeader(props) {
  function goback() {
    console.log(props.history)
    props.history.goBack()
  }
  return (
    <NavBar
      mode="light"
      icon={<Icon onClick={() => goback()} type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
    >
      { props.title }
    </NavBar>
  )
}

// withRouter: 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
export default withRouter(NavHeader)