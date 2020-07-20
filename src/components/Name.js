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
  
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick1}>点我</button>
        <button onClick={this.handleClick2}>点吧</button>
      </div>
    );
  }
}
export default Name;