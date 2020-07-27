import React from 'react'
import { Route } from 'react-router-dom'
// 导入样式
import './index.scss'
// 导入TabBar组件
import { TabBar } from 'antd-mobile'
// 导入组件
import Index from '../Index'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'
// 菜单项数据：
const TABBARLIST = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/list' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/profile' }
]
export default class Home extends React.Component {
	constructor(props) {
		super()
		this.state = {
			selectedTab: props.location.pathname,
			hidden: false,
		}
		console.log(props)
	}
	// 因为点击 Index首页 菜单，切换路由的时候，触发了 Home 组件的更新阶段
  // 所以，我们只要在更新阶段的钩子函数中，来处理下 菜单 高亮即可
  componentDidUpdate(prevProps) {
		// console.log('Home 组件更新了，路由发生了切换')

    // console.log('上一次的props：', prevProps)
    // console.log('最新的props：', this.props)

    const pathName = this.props.location.pathname
    const prevPathName = prevProps.location.pathname

		if (pathName !== prevPathName) {
			this.setState({
				selectedTab: pathName
			})
		}
	}
	// 渲染底部TabBar菜单项
  renderTabBarItems = () => {
    return TABBARLIST.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.path}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          // 路由地址切换，让组件更新（ 组件接收到新的props --> 新的路由信息 ）
          this.props.history.push(item.path)

          // 因为添加 componentDidUpdate 钩子函数，在这个钩子函数中，已经处理了
          // 组件更新时，来让菜单高亮，所以，这个代码就可以省略了。
          // this.setState({
          //   selectedTab: item.path
          // })
        }}
      />
    ))
  }
	render() {
		return (
			<div className="home">
				{/* 去掉了 /index ，但是，要给 Index 组件的路由规则添加 exact 属性 */}
				<Route exact path="/home" component={Index}></Route>
				<Route path="/home/list" component={HouseList}></Route>
				<Route path="/home/news" component={News}></Route>
				<Route path="/home/profile" component={Profile}></Route>
				<div className="tabBar">
					<TabBar tintColor="#21B97A" noRenderContent={true}>
						{this.renderTabBarItems()}
					</TabBar>
				</div>
			</div>
		)
	}
}
