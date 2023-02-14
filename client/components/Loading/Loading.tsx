import React from 'react'
import './index.css'
type Props = {}

function Loading({}: Props) {
  return (
    <div className='flex'>
    <span className="loader"></span>
    </div>
  )
}

export default Loading