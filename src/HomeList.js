import React, {Component} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
      <div class="splashTitle">
      <h1>Makima Reader</h1>
      </div>
      <TableContainer component={Paper}>
      <Table key={this.props.allManga}>
        <TableHead style={{ backgroundColor:'#630000',}}>
          <TableRow>
            <TableCell style={{color: 'white'}}>
            Title
            </TableCell >
            <TableCell style={{color: 'white'}}>
            Chapters
            </TableCell>
            <TableCell style={{color: 'white'}}>
            Last Updated
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.manga.map(manga => {
              return(
                <>
                  <TableRow onClick={() => this.props.showToggle(manga)} key={manga.id}>
                    <TableCell key={manga.id}>
                    {manga.title}
                    </TableCell>
                    <TableCell>
                    {manga.chaptercount}
                    </TableCell>
                    <TableCell>
                    {manga.updated}
                    </TableCell>
                  </TableRow>
                </>
              )
            })
          }
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    )
  }
}

export default HomeList
