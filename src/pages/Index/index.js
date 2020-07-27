import React from 'react'

import './index.scss'

import { Link } from 'react-router-dom'
// 走马灯, 宫格
import { Carousel, Flex, Grid, WingBlank } from 'antd-mobile'

import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

const nav = [
	{ imgSrc: nav1, text: '整租', path: '/home/list' },
	{ imgSrc: nav2, text: '合租', path: '/home/list' },
	{ imgSrc: nav3, text: '地图找房', path: '/map' },
	{ imgSrc: nav4, text: '去出租', path: '/rent/add' }
]
const groups = [
	{ id: 1, title: '低价捡漏', desc: '高性价比房' },
	{ id: 2, title: '抢手房源', desc: '大家都在看' },
	{ id: 3, title: '新上热门', desc: '抢先看好房' },
	{ id: 4, title: '刚需必看', desc: '低价好户型' }
]
const news = [
	{ id: 1, title: '中海寰宇时代', from: '上海浦东', date: '2020.07.28' },
	{ id: 2, title: '招商-臻珑府', from: '上海长宁', date: '2020.07.24' },
	{ id: 3, title: '金融街武夷', from: '上海静安', date: '2020.07.22' },
	{ id: 4, title: '玉海园一期', from: '上海徐家汇', date: '2020.07.21' },
]
export default class News extends React.Component {
	state = {
		data: [], // 初始值为空时，赋值后自动轮播失效
		imgHeight: 176
	}
	componentDidMount() {
		// simulate img loading
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
			})
		}, 100)
	}
	// 渲染轮播图数据
	renderSwipers() {
		return this.state.data.map((val) => (
			<a
				key={val}
				href="http://www.alipay.com"
				style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
			>
				<img
					src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
					alt=""
					style={{ width: '100%', verticalAlign: 'top' }}
					onLoad={() => {
						// fire window resize event to change height
						window.dispatchEvent(new Event('resize'))
						this.setState({ imgHeight: 'auto' })
					}}
				/>
			</a>
		))
	}
	// 渲染导航
	renderNavItem() {
		return nav.map((item) => (
			<Flex.Item key={item.imgSrc}>
				<Link to={item.path}>
					<img src={item.imgSrc} alt="" />
					<p>{item.text}</p>
				</Link>
			</Flex.Item>
		))
	}
	// 渲染最新资讯
	renderNews() {
		return news.map(item => (
      <div className="news-item" key={item.id}>
        <div className="imgwrap">
          <img
            className="img"
            src={`https://picsum.photos/40?random=${item.id}`}
            alt=""
          />
        </div>
        <Flex className="content" direction="column" justify="between">
          <h3 className="title">{item.title}</h3>
          <Flex className="info" justify="between">
            <span>{item.from}</span>
            <span>{item.date}</span>
          </Flex>
        </Flex>
      </div>
    ))
	}
	render() {
		return (
			<div className="index">
				{/* 当轮播图数据加载的过程中，不渲染轮播图组件；当数据加载完成后，再渲染轮播图组件 */}
				<div className="swiper">
					{this.state.data.length > 0 ? (
						<Carousel
							autoplay={true}
							infinite
							beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
							afterChange={(index) => console.log('slide to', index)}
						>
							{this.renderSwipers()}
						</Carousel>
					) : null}
				</div>
				{/* 导航菜单 */}
				<Flex className="nav" justify="between">
					{this.renderNavItem()}
				</Flex>
				{/* 租房小组 */}
				<div className="groups">
					{/* 标题 */}
					<Flex justify="between" className="groups-title">
						<h3>租房小组</h3>
						<span>更多</span>
					</Flex>
					{/* 
						使用九宫格来实现布局

						data 表示：九宫格的数据源
						activeStyle 表示：每个菜单项的点击反馈
					*/}
					<Grid
						className="grid"
						data={groups}
						columnNum={2}
						hasLine={false}
						square={false}
						activeStyle
						renderItem={(item) => (
							<Flex className="grid-item" justify="between">
								<div>
									<p>{item.title}</p>
									<span>{item.desc}</span>
								</div>
								<div>
									<img src={`https://picsum.photos/40?random=${item.id}`} alt="" />
								</div>
							</Flex>
						)}
					/>
				</div>
				{/* 最新资讯 */}
				<div className="news">
					<h3 className="group-title">最新资讯</h3>
					<WingBlank size="md">{this.renderNews()}</WingBlank>
				</div>
			</div>
		)
	}
}
