import React, {Component} from 'react'

class HomeList extends Component {
  constructor(props){
    super(props)

    this.state ={
      manga: this.props.manga
    }
  }

  render(){
    return(
      <div>
      <table key={this.props.allManga}>
        <tbody>
          {
            this.props.manga.map(manga => {
              return(
                <tr key={manga.id}>
                  <td>
                  {manga.title}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    )
  }
}

export default HomeList
