import React, { useContext } from 'react'
import AppContext from './context'

export default function Messages() {
  const { username } = useContext(AppContext)

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p><span>{ username }</span>useContext is awesome!</p>
    </div>
  )
}
