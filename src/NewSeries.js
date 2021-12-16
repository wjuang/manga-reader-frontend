import React, {Component} from 'react'
import CoverImageWidget from './CoverImageWidget'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

class NewSeries extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      author: '',
      artist: '',
      cover: ''
    }
  }

  setCover = (link) => {
    this.setState({
      cover: link
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.currentUser)
    fetch(this.props.baseURL + '/reader/', {
      method: 'POST',
      body: JSON.stringify({title: this.state.title, author: this.state.author, artist: this.state.artist, cover: this.state.cover, submittedBy: this.props.currentUser}),
      headers: { 'Content-type' : 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.props.addSeries(data)
      this.setState({
        title: '',
        author: '',
        artist: '',
        cover: ''
      })
    })
  }

  render(){
    return(
      <>
      {

      (this.props.currentUser) ?
      <>
      <h1>Add a New Manga:</h1>
      <CoverImageWidget setCover={this.setCover}/>
      <p>{this.state.cover}</p>
      <form onSubmit={this.handleSubmit}>
        <TextField type='text' label='Title' id='title' name='title' placeholder='Title' onChange={(e) => this.handleChange(e)} value={this.state.title} />
        <TextField type='text' label='Author' id='author' name='author' placeholder='Author' onChange={(e) => this.handleChange(e)} value={this.state.author} />
        <TextField type='text' label='Artist' id='artist' name='artist' placeholder='Artist' onChange={(e) => this.handleChange(e)} value={this.state.artist} />
        <TextField type='submit' value='Submit' />
      </form>
      </> :
      <>
      <h1>Please Log In to upload a series!</h1>
      </>
      }
      </>
    )
  }
}

export default NewSeries
