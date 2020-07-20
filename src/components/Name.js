import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick1() {
    console.log('this is:', this);
  }
  // 箭头函数确保了 `this` 绑定在  handleClick 中
  handleClick2 = () => {
    console.log('this is:', this);
  }

  //事件处理中的传参
  handleClick3 = (idx) => {
    // 初始化就会被执行一次
    console.log('参数:', idx);
  }
  handleClick4 = (idx) => {
    console.log('参数:', idx);
  }
  handleClick5 = e => {
    // 使用data自定义属性传参
    console.log('参数:', e.target.dataset.id);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <button onClick={this.handleClick1}>点我</button>
          <button onClick={this.handleClick2}>点吧</button>
          <button onClick={this.handleClick3(3)}>传参3</button>
          <button onClick={this.handleClick4.bind(this, 4)}>传参4</button>
          <button data-id={5} onClick={this.handleClick5}>传参5</button>
        </div>
      </div>
    );
  }
}
export default Name;