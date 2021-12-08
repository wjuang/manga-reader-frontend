import React, {Component} from 'react'

class HomeList extends Component {
  constructor(props){
    super(props)

    this.state ={
      manga: []
    }
  }

  render(){
    return(
      <div>
      {
        this.props.manga.map(manga => {
          return(
            <p>{manga.title}</p>
          )
        })
      }
      </div>
    )
  }
}

export default HomeList
