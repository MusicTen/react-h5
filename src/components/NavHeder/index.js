import React from 'react'

import { NavBar, Icon } from 'antd-mobile'

import './index.scss'

export default function NavHeader(props) {
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
    >
      { props.title }
    </NavBar>
  )
}
