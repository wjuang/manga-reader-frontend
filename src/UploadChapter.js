import React, {Component} from 'react'
import PageUploader from './PageUploader'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

class UploadChapter extends Component {
  constructor(props){
    super(props)

    this.state = {
      manga: this.props.manga,
      number: '',
      editNewChapter: false,
      chapterToEdit: []
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
      body: JSON.stringify({number: this.state.number, pagenumber: 0, submittedBy: this.props.currentUser}),
      headers: { 'Content-type' : 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.props.addChapter(data)
      this.setState({
        number: '',
        editNewChapter: true,
        chapterToEdit: data.data
      })
    })
  }

  togglePageUpload = () => {
    this.setState({
      editNewChapter: !this.state.editNewChapter
    })
  }

  pagenumberIncrease = () => {
    const copyChapter = this.state.chapterToEdit
    copyChapter.pagenumber += 1
    this.setState({
      chapterToEdit: copyChapter
    })
  }

  addPage = (chapter, page) => {
    // event.preventDefault()
    fetch(this.props.baseURL + '/reader/' + this.props.manga.id + '/' + chapter.number, {
      method: 'POST',
      body: JSON.stringify({chapternumber: chapter.number, number: chapter.pagenumber+1, link: page.url, user: this.props.currentUser}),
      headers: { 'Content-type' : 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      // this.setState({
      //
      // })
    })
  }

  render(){
    return(
      <>
      {
        (this.state.editNewChapter) ?
        <>
        <h4>Upload Pages for Chapter {this.state.chapterToEdit.number}</h4>
        <PageUploader togglePageUpload={this.togglePageUpload} chapter={this.state.chapterToEdit} pagenumberIncrease={this.pagenumberIncrease} addPage={this.addPage}/>
        <p>Page Count: {this.state.chapterToEdit.pagenumber}</p>
        </>
        :
        <>
        <h4>Upload Chapter:</h4>
        <form onSubmit={this.handleSubmit}>
          <TextField type='number' label="Chapter Number" id='number' name='number' placeholder='Chapter Number' onChange={(e) => this.handleChange(e)} value={this.state.number} />
          <TextField type='submit' value='Submit' />
        </form>
        </>
      }
      </>
    )
  }
}

export default UploadChapter
