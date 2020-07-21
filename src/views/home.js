
import React from 'react';
import Name from '@/components/Name';
import WebSite from '@/components/WebSite';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "MusicTen",
      site: "https://www.gituh.com"
    }
  }
  componentWillMount() {
    // 此时props和state以及函数都已经加载完毕但是内存中的虚拟DOM还没有开始渲染
    console.log('componentWillMount')
  }
  componentDidMount() {
    // 组件已经完成了挂载，此时，我们的 state 上的数据，和内存的虚拟DOM，以及浏览器中的页面，已经完全一致了。
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    // 在组件卸载及销毁之前直接调用。
    // 在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount()中创建的订阅等。
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <WebSite site={this.state.site} />
      </div>
    );
  }
}
export default Home;