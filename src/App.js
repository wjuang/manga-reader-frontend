import './App.css';
import React, {Component} from 'react'
import HomeList from './HomeList'
import NewSeries from './NewSeries'
import ShowSeries from './ShowSeries'
import ShowPage from './ShowPage'
import PageUploader from './PageUploader'
import LoginPage from './Login'
import SignUpPage from './Signup'
import Logout from './Logout'
import {useAuth} from './Firebase'
import 'semantic-ui-css/semantic.min.css'
import {Grid, Menu, Segment} from 'semantic-ui-react'

let baseURL = 'http://localhost:8000'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      allManga: [],
      showManga: [],
      showPage: false,
      showChapters: [],
      showPages: [],
      readPage: false,
      homePage: true,
      submitting: false,
      currentUser: '',
      loggingIn: false
    }
  }

  getManga = () => {
    fetch(baseURL + '/reader/')
    .then (res => {
      if (res.status === 200){
        return res.json()
      } else {
        return []
      }
    })
    .then (data => {
      this.setState({
        allManga: data.data
      })
    })
  }

  addSeries = (series) => {
    const copyAllManga = [...this.state.allManga]
    copyAllManga.push(series.data)
    this.setState({
      allManga: copyAllManga,
    })
  }

  showToggle = (manga) => {
    this.getChapters(manga.id)
    this.setState({
      showPage: true,
      showManga: manga,
      readPage: false,
      homePage: false,
      submitting: false,
      loggingIn: false
    })
  }

  deleteSeries = (id) => {
    fetch(baseURL + '/reader/' + id, {
      method: 'DELETE'
    }).then( res=> {
      // console.log(res)
      const findIndex = this.state.allManga.findIndex(manga => manga.id === id)
      const copyAllManga = [...this.state.allManga]
      copyAllManga.splice(findIndex, 1)
      this.setState({
        allManga: copyAllManga,
        showPage: false,
        showManga: [],
        homePage: true,
      })
    })
  }

  getChapters = (seriesId) => {
    fetch(baseURL + '/reader/' + seriesId + '/chapters')
    .then (res => {
      if (res.status === 200){
        return res.json()
      } else {
        return []
      }
    })
    .then (data => {
      this.setState({
        showChapters: data.data
      })
    })
  }


  getPages = (seriesId, chapterNumber) => {
    fetch(baseURL + '/reader/' + seriesId + '/' + chapterNumber + '/pages')
    .then (res => {
      if (res.status === 200){
        return res.json()
      } else {
        return []
      }
    })
    .then (data => {
      this.setState({
        showPages: data.data,
        readPage: true,
        showPage: false,
      })
    })
  }

  goHome = () => {
    this.setState({
      homePage: true,
      showPage: false,
      readPage: false,
      submitting: false,
      loggingIn: false
    })
  }

  addChapter = (chapter) => {
    const copyChapters = [...this.state.showChapters]
    copyChapters.push(chapter.data)
    this.setState({
      showChapters: copyChapters,
    })
  }

  deleteChapter = (chapter) => {
    fetch(baseURL + '/reader/' + chapter.seriesid + '/' + chapter.number, {
      method: 'DELETE'
    }).then( res=> {
      // console.log(res)
      const findIndex = this.state.showChapters.findIndex(chap => chap.number === chapter.number)
      const copyChapters = [...this.state.showChapters]
      copyChapters.splice(findIndex, 1)
      this.setState({
        showChapters: copyChapters
      })
    })
  }

  submitToggle = () => {
    this.setState({
      showPage: false,
      homePage: false,
      readPage: false,
      submitting: true
    })
  }

  changeUser = (user) => {
    this.setState({
      currentUser: user,
    })
  }

  loginToggle = () => {
    this.setState({
      loggingIn: true
    })
  }

  logoutUser = () => {
    this.setState({
      currentUser: undefined,

    })
  }

  componentDidMount(){
    this.getManga()
    this.setState({
      currentUser: '1'
    })
  }

  render(){
    return(
      <Grid>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name='home'
            onClick={() => this.goHome()}
          />
          <Menu.Item
            name='Add New Series'
            onClick={() => this.submitToggle()}
          />
          <Menu.Item
            name='Log In or Register'
            onClick={() => this.loginToggle()}
          />
          <Menu.Item
            name='About'
          />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
        {
          (this.state.currentUser) ?
          <>
            <Logout logoutUser={this.logoutUser} />
          </>
          :
          ''
        }
        { (this.state.loggingIn) ?
        <>
        <SignUpPage changeUser={this.changeUser}/>
        <LoginPage changeUser={this.changeUser} loginToggle={this.loginToggle}/>
        </>
        :
        ''

        }

        {
          (this.state.showPage) ? <ShowSeries baseURL={baseURL} currentUser={this.state.currentUser} manga={this.state.showManga} deleteSeries={this.deleteSeries} showChapters={this.state.showChapters} getPages={this.getPages} showPages={this.state.showPages} toggleReader={this.toggleReader} addChapter={this.addChapter} deleteChapter={this.deleteChapter} /> : ''
        }
        {
          (this.state.readPage) ? <ShowPage currentUser={this.state.currentUser} pages={this.state.showPages} getPages={this.getPages} manga={this.state.showManga} chapters={this.state.showChapters} showToggle={this.showToggle}/> : ''
        }
        {
        (this.state.homePage) ? <HomeList manga={this.state.allManga} showToggle={this.showToggle}/> : ''
        }
        {
        (this.state.submitting) ? <NewSeries currentUser={this.state.currentUser} baseURL={baseURL} addSeries={this.addSeries} /> : ''
        }
        </Grid.Column>
      </Grid>
    )
  }
}

export default App;
