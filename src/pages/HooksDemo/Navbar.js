import React, { useContext } from 'react'
import AppContext from './context'

export default function Navbar(props) {
  console.log('父子传值:', props)
  const { tabItem } = useContext(AppContext)
  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{ tabItem }</p>
    </div>
  )
}
