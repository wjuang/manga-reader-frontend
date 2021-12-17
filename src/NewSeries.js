import React, {Component} from 'react'
import CoverImageWidget from './CoverImageWidget'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

class NewSeries extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
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
      body: JSON.stringify({title: this.state.title, author: this.state.author, artist: this.state.artist, description: this.state.description, cover: this.state.cover, submittedBy: this.props.currentUser}),
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
      <Box display='flex' justifyContent='center' alignItems='center'>
      <h1>Add a New Manga:</h1>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
      <CoverImageWidget setCover={this.setCover}/>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
      <p>{this.state.cover}</p>
      </Box>
      <form onSubmit={this.handleSubmit}>
      <Box display='flex' justifyContent='center' alignItems='center'>

        <TextField type='text' label='Title' id='title' name='title' placeholder='Title' onChange={(e) => this.handleChange(e)} value={this.state.title} />
        <TextField type='text' label='Author' id='author' name='author' placeholder='Author' onChange={(e) => this.handleChange(e)} value={this.state.author} />
        <TextField type='text' label='Artist' id='artist' name='artist' placeholder='Artist' onChange={(e) => this.handleChange(e)} value={this.state.artist} />
        </Box>
        <br/>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <TextField multiline rows={4} type='text' label='Description' id='description' name='description' placeholder='Description' onChange={(e) => this.handleChange(e)} value={this.state.description} />
        </Box>
        <br/>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <TextField type='submit' value='Submit' />
        </Box>
      </form>
      </> :
      <>
      <Box display='flex' justifyContent='center' alignItems='center'>
      <h1>Please Log In to upload a series!</h1>
      </Box>
      </>
      }
      </>
    )
  }
}

export default NewSeries
