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
      <table key={this.props.allManga}>
        <tbody>
          {
            this.props.manga.map(manga => {
              return(
                <>
                  <tr onClick={() => this.props.showToggle(manga)} key={manga.id}>
                    <td key={manga.id}>
                    {manga.title}
                    </td>
                  </tr>
                </>
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
