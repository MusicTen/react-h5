import React, { useContext } from 'react'
import AppContext from './context'

export default function Messages() {
  const { username, setAwesome } = useContext(AppContext)

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p><span>{ username }</span>useContext is awesome!</p>
      <button onClick={() => setAwesome(456)}>Messages更新父组件userName</button>
    </div>
  )
}
