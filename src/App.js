import './App.css';
import React, {Component} from 'react'
import HomeList from './HomeList'
import NewSeries from './NewSeries'
import ShowSeries from './ShowSeries'

let baseURL = 'http://localhost:8000'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      allManga: [],
      showManga: [],
      showPage: false
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
    this.setState({
      showPage: !this.state.showPage,
      showManga: manga
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
        showManga: []
      })
    })
  }

  componentDidMount(){
    this.getManga()
  }

  render(){
    return(
      <div>
        {
          (this.state.showPage) ? <ShowSeries manga={this.state.showManga} deleteSeries={this.deleteSeries} /> : ''
        }
        <HomeList manga={this.state.allManga} showToggle={this.showToggle}/>
        <NewSeries baseURL={baseURL} addSeries={this.addSeries} />
      </div>
    )
  }
}

export default App;
