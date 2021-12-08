import './App.css';
import React, {Component} from 'react'
import HomeList from './HomeList'

let baseURL = 'http://localhost:8000'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      allManga: []
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

  componentDidMount(){
    this.getManga()
  }

  render(){
    return(
      <div>
      <HomeList manga={this.state.allManga} />
      </div>
    )
  }
}

export default App;
