import React from 'react'

import './index.scss'

// 注意：如果要在脚手架代码中访问全局对象，应该 通过 window 来访问
// https://facebook.github.io/create-react-app/docs/using-global-variables
const BMapGL = window.BMapGL

export default class Map extends React.Component {
  componentDidMount() {
    // 创建百度地图对象
    // 参数：表示地图容器的id值
    const map = new BMapGL.Map('container')
    // 设置地图中心点坐标
    const point = new BMapGL.Point(121.63933, 31.2137)
     // 使用中心点坐标初始化地图
     map.centerAndZoom(point, 15)
  }
  render() {
    return (
      <div className="map">
        <div id="container" className="container"></div>
      </div>
    )
  }
} 