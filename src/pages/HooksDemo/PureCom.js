import React from 'react'

export default class PureCom extends React.PureComponent {
  render() {
    // console.log('PureComponent render', this.props)
    return <div>这是 PureComponent测试 组件，props.option.a:{this.props.option.a}</div>
  }
}
/* 
  React创建了PureComponent组件创建了默认的shouldComponentUpdate行为。
  这个默认的shouldComponentUpdate行为会一一比较props和state中所有的属性，只有当其中任意一项发生改变是，才会进行重绘。
  需要注意的是，PureComponent使用 浅比较 判断组件是否需要重绘
  如果对象包含复杂的数据结构，它可能会因深层的数据不一样而产生错误的判断（表现为对象深层的数据已改变视图却没有更新）
  为了避免出现这种问题，推荐使用immutable.js （持久化数据结构）
*/