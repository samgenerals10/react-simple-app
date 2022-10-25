import React from 'react'
import sam from './Title.css'

function Title(props) {
  return (
    <div className='sam1'>
        <h1 className='sam'>{props.header}</h1>
    </div>
  )
}

export default Title