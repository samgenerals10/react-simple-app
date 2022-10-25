import React from 'react'
import image from "./pic1.jpg"
import   './Image.css'
// import photo from 'Image.css'

 function Image() {
  return (
    <div className='mainphoto'>
        <img src={image} width="15%" height="15%" alt='' className='photo'/>
    </div>
  )
}

export default Image