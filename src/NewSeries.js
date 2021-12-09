import React, {Component} from 'react'

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

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(this.props.baseURL + '/reader/', {
      method: 'POST',
      body: JSON.stringify({title: this.state.title, author: this.state.author, artist: this.state.artist, cover: this.state.cover}),
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
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='title' name='title' placeholder='Title' onChange={(e) => this.handleChange(e)} value={this.state.title} />
        <input type='text' id='author' name='author' placeholder='Author' onChange={(e) => this.handleChange(e)} value={this.state.author} />
        <input type='text' id='artist' name='artist' placeholder='Artist' onChange={(e) => this.handleChange(e)} value={this.state.artist} />
        <input type='text' id='cover' name='cover' placeholder='Link to Cover Image' onChange={(e) => this.handleChange(e)} value={this.state.cover} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default NewSeries
