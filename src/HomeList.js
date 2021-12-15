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
      
      <TableContainer component={Paper}>
      <Table key={this.props.allManga}>
        <TableHead>
          <TableRow>
            <TableCell>
            Title
            </TableCell>
            <TableCell>
            Chapters
            </TableCell>
            <TableCell>
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
    )
  }
}

export default HomeList
