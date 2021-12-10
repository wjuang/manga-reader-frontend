import React, {Component} from 'react'

class ShowSeries extends Component {
  constructor(props){
    super(props)

    this.state = {
      manga: this.props.manga
    }
  }

  render(){
    return(
      <div>
        <h1>{this.props.manga.title}</h1>
        <h5>{this.props.manga.author}</h5>
        <h5>{this.props.manga.artist}</h5>
        <button onClick={() => this.props.deleteSeries(this.props.manga.id)}>Delete</button>
        {
          this.props.showChapters.map(chapter => {
            return(
              <>
                <tr key={chapter.id}>
                  <td>
                    {chapter.number}
                  </td>
                </tr>
              </>
            )
          })
        }
      </div>
    )
  }
}

export default ShowSeries
