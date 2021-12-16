import React, {Component} from 'react'
import UploadChapter from './UploadChapter'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'


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
      <Grid item md={4} xs={2} sm={4} lg={6} className='showInfo'>
        <h1 class="title">{this.props.manga.title}</h1>
        <h5 class="subtitle"><small>Author:</small> {this.props.manga.author}</h5>
        <h5 class="subtitle"><small>Artist:</small> {this.props.manga.artist}</h5>
        {
        (this.props.currentUser === this.props.manga.submittedBy) ? <button onClick={() => this.props.deleteSeries(this.props.manga.id)}>Delete</button> : ''
        }
      </Grid>
      <Grid item md={8} xs={10} sm={8} lg={6}>
        <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>
          <img class='cover' src={this.props.manga.cover} />
        </Box>
      </Grid>
      </Grid>
      { (this.props.currentUser) ?
      <UploadChapter currentUser={this.props.currentUser} manga={this.props.manga} addChapter={this.props.addChapter} baseURL={this.props.baseURL} /> : ''
      }
      <h4>Chapter List</h4>
      <TableContainer>
        <Table>
        <TableHead style={{ backgroundColor:'#630000',}}>
          <TableRow>
            <TableCell style={{color: 'white'}}>
            Number
            </TableCell >
            <TableCell style={{color: 'white'}}>
            Uploader
            </TableCell>
            <TableCell style={{color: 'white'}}>
            Upload Date
            </TableCell>
          </TableRow>
        </TableHead>
        {
          this.props.showChapters.map(chapter => {
            return(
              <>
                    <TableBody>
                    <TableRow key={chapter.id}>
                      <TableCell onClick={() => this.props.getPages(this.props.manga.id, chapter.number)}>
                        {chapter.number}
                      </TableCell>
                      <TableCell>
                        {chapter.submittedBy}
                      </TableCell>
                      <TableCell>
                        {chapter.uploaded}
                      </TableCell>
                      {
                      (this.props.currentUser === chapter.submittedBy) ? <TableCell onClick={() => this.props.deleteChapter(chapter)}><small>delete</small></TableCell> : ''
                      }
                      </TableRow>
                    </TableBody>
              </>
            )
          })
        }
        </Table>
        </TableContainer>
      </div>
    )
  }
}

export default ShowSeries
