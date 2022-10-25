import React, { Component } from 'react'
import Description from '../Description/Description'
import Title from '../Title/Title'
import Image from '../Image/Image'





export default class SimpleCard extends Component {
  render() {
    return (
      <div>
        <Description details="I am a Software Developer at Codetrain." />
        
        <Title header="Sam Generals"/>
        <Image />
      </div>
    )
  }
}
