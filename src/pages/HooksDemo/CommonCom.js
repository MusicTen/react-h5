import React from 'react'

export default class CommonCom extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.option === nextProps.option) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  /* 
    在React Component的生命周期中，有一个shouldComponentUpdate方法。这个方法默认返回值是true。
    这意味着就算没有改变组件的props或者state，也会导致组件的重绘。这就经常导致组件因为不相关数据的改变导致重绘，这极大的降低了React的渲染效率。
  */
  render() {
    // console.log('CommonCom render', this.props)
    return <div>这是 CommonCom测试 组件，props.option.a:{this.props.option.a}</div>
  }
}