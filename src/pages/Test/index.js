import React from 'react'
import { Tabs } from 'antd-mobile'

import './index.scss'

const tabs = [{ title: '古装' }, { title: '科幻' }, { title: '动漫' }]
const items = [
  // type 0:古装, 1:科幻, 2:动漫
  { title: '见龙卸甲', type: 0 },
  { title: '藏龙卧虎', type: 0 },
  { title: '大兵小将', type: 0 },
  { title: '龙门飞甲', type: 0 },
  { title: '变形金刚', type: 1 },
  { title: '复仇者联盟', type: 1 },
  { title: '星球大战', type: 1 }
]
export default class Map extends React.Component {
  state = {
    tabItems0: this.handleItem(0),
    tabItems1: this.handleItem(1)
  }
  componentDidMount() {}
  handleItem(idx) {
    return items
      .map(v => {
        v.isShow = false
        return v
      })
      .filter(v => v.type === idx)
  }
  // 渲染古装电影列表
  renderTabGZItem() {
    return (
      <div className="space">
        {this.state.tabItems0.map((v, i) => (
          <div
            key={i}
            className="item"
            onClick={this.handleGZItem.bind(this, i)}
          >
            <div className="main">
              <h3>{v.title}</h3>
              <p>点击查看详情{i + 1}</p>
            </div>
            {v.isShow && <div className="detail"></div>}
          </div>
        ))}
      </div>
    )
  }
  // 古装电影列表事件处理
  handleGZItem = idx => {
    console.log('参数:', idx)
    this.setState({
      tabItems0: this.state.tabItems0.map((v, i) => {
        if (i === idx) {
          v.isShow = !v.isShow
        }
        return v
      })
    })
  }
  // 渲染科幻电影列表
  renderTabKHItem() {
    return (
      <div className="space">
        {this.state.tabItems1.map((v, i) => (
          <div
            key={i}
            className="item"
            onClick={this.handleKHItem.bind(this, i)}
          >
            <div className="main">
              <h3>{v.title}</h3>
              <p>点击查看详情{i + 1}</p>
            </div>
            {v.isShow && <div className="detail"></div>}
          </div>
        ))}
      </div>
    )
  }
  // 科幻电影列表事件处理
  handleKHItem = idx => {
    this.setState({
      tabItems1: this.state.tabItems1.map((v, i) => {
        if (i === idx) {
          v.isShow = !v.isShow
        }
        return v
      })
    })
  }
  render() {
    return (
      <div className="test">
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
          {this.renderTabGZItem()}
          {this.renderTabKHItem()}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff'
            }}
          >
            Content of third tab
          </div>
        </Tabs>
      </div>
    )
  }
}
