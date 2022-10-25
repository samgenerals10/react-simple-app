import React, { Component } from 'react'
import describ from './Description.css'
import "./Description.css"





export default class Description extends Component {

  render() {
    return (
      <div className='describ'>
        <h1>{this.props.details}</h1>
      </div>
    )
  }
}
