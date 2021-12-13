import React, {Component} from 'react'

class UploadChapter extends Component {
  constructor(props){
    super(props)

    this.state = {
      manga: this.props.manga,
      number: null
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(this.props.baseURL + '/reader/' + this.props.manga.id, {
      method: 'POST',
      body: JSON.stringify({number: this.state.number, pagenumber: 0}),
      headers: { 'Content-type' : 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.props.addChapter(data)
      this.setState({
        number: null
      })
    })
  }

  render(){
    return(
      <>
      <p>Upload Chapter:</p>
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='number' name='number' placeholder='Chapter Number' onChange={(e) => this.handleChange(e)} value={this.state.number} />
        <input type='submit' value='Submit' />
      </form>
      </>
    )
  }
}

export default UploadChapter
