import React, {Component} from 'react'
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react'
import CloudinaryUploadWidget from './UploadWidget'

class PageUploader extends Component {
  constructor(props){
    super(props)

    this.state = {
      pages: []
    }
  }

  render(){
    return(
      <>
        <CloudinaryUploadWidget />
      </>
    )
  }
}

export default PageUploader
