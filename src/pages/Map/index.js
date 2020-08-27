import React from 'react'

import NavHeader from '../../components/NavHeder'

import style from './index.module.scss'

// 注意：如果要在脚手架代码中访问全局对象，应该 通过 window 来访问
// https://facebook.github.io/create-react-app/docs/using-global-variables
const BMapGL = window.BMapGL

export default class Map extends React.Component {
  componentDidMount() {
    this.initMap()
  }
  initMap() {
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
      <div className={style.map}>
        <NavHeader title="地图"></NavHeader>
        <div id="container" className={style.container}></div>
      </div>
    )
  }
} 