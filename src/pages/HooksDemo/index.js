import React, { useState, useReducer, useEffect } from 'react'

// React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件

// React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来
// React Hooks 就是那些钩子
// React 默认提供了一些常用钩子，你也可以封装自己的钩子

// React 默认提供的四个最常用的钩子:
/* 
  useState()：状态钩子
  useContext()：共享状态钩子
  useReducer()：action 钩子
  useEffect()：副作用钩子
*/

// 所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

import Navbar from './Navbar'
import Messages from './Messages'

import './index.scss'

import AppContext from './context'

export default function HooksDemo() {
  /* 
    useState() 这个函数接受状态的初始值，作为参数，下例的初始值为按钮的文字。
    该函数返回一个数组，数组的第一个成员是一个变量（下例是awesome），指向状态的当前值。
    第二个成员是一个函数，用来更新状态，约定是set前缀加上状态的变量名（下例是setAwesome）
  */
  const [awesome, setAwesome] = useState('awesome')
  function handleClick() {
    if (awesome === 'ahaha') return
    setAwesome('ahaha')
  }
  /* 
    React 本身不提供状态管理功能，通常需要使用外部库。这方面最常用的库是 Redux
    下面是 useReducer() 的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组
    数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数
  */
  const [state, dispatch] = useReducer(myReducer, { count: 0 })
  function myReducer(state, action) {
    switch (action.type) {
      case 'countUp':
        return {
          ...state,
          count: state.count + 1
        }
      default:
        console.log(action)
        return state
    }
  }
  /* 
    useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据
    以前，放在componentDidMount里面的代码，现在可以放在useEffect()
  */
  const personId = 1
  const [person, setPerson] = useState({})
  useEffect(() => {
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data)
      })
  }, [personId])

  return (
    /* 
      AppContext.Provider提供了一个 Context 对象，这个对象可以被子组件共享
      子组件中用 useContext() 钩子函数用来引入 Context 对象，从中获取username属性
    */
    <AppContext.Provider
      value={{
        tabItem: 'super',
        username: awesome,
        setAwesome // 通过 Provider.value 将方法提供出去
      }}
    >
      <div className="App">
        <Navbar name="123">{{ aa: 789 }}</Navbar>
        <Messages />
        <div className="useState">
          <button onClick={handleClick}>改变username</button>
        </div>
        <div className="useReducer">
          <button onClick={() => dispatch({ type: 'countUp' })}>+1</button>
          <button onClick={() => dispatch({})}>+1</button>
          <p>Count: {state.count}</p>
        </div>
        <div className="useEffect">
          <p>You're viewing: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
        </div>
      </div>
    </AppContext.Provider>
  )
}
