import React, {Component} from 'react'
import UploadChapter from './UploadChapter'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

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
      <Grid container>
      <Grid item md={4} xs={2} sm={4} lg={6}>
        <h1 class="title">{this.props.manga.title}</h1>
        <h5 class="subtitle">{this.props.manga.author}</h5>
        <h5 class="subtitle">{this.props.manga.artist}</h5>
        {
        (this.props.currentUser === this.props.manga.submittedBy) ? <button onClick={() => this.props.deleteSeries(this.props.manga.id)}>Delete</button> : ''
        }
      </Grid>
      <Grid item md={8} xs={10} sm={8} lg={6}>
        <img class='cover' src={this.props.manga.cover} />
      </Grid>
      <Grid item>
      { (this.props.currentUser) ?
      <UploadChapter currentUser={this.props.currentUser} manga={this.props.manga} addChapter={this.props.addChapter} baseURL={this.props.baseURL} /> : ''
      }
      <p>Chapter List</p>
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
                      {
                      (this.props.currentUser === chapter.submittedBy) ? <td onClick={() => this.props.deleteChapter(chapter)}><small>delete</small></td> : ''
                      }
                    </tr>
                  </tbody>
                </table>
              </>
            )
          })
        }
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default ShowSeries
