import React, {Component} from 'react'
import UploadChapter from './UploadChapter'

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
                <table>
                  <tbody>
                    <tr key={chapter.id}>
                      <td onClick={() => this.props.getPages(this.props.manga.id, chapter.number)}>
                        {chapter.number}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          })
        }
        <UploadChapter manga={this.props.manga} addChapter={this.props.addChapter} baseURL={this.props.baseURL} />
      </div>
    )
  }
}

export default ShowSeries
