import React from 'react'

export default function AA(props) {
  console.log(props.match.params.id)
  return (
    <div>动态路由</div>
  )
}