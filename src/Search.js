import React, {Component} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


export default class Search extends Component {

  constructor(props){
    super(props)

    this.state = {
      query: ''
    }
  }

  handleSubmit = (query) => {
    console.log(query)
    this.setState({
      filteredManga: []
    })
    let copyFiltered = []
    this.props.allManga.filter(manga => {
      if (query === '') {
        return
      } else if (manga.title.toLowerCase().includes(query.toLowerCase())) {
        copyFiltered.push(manga)
      }
    })
    this.setState({
      filteredManga: copyFiltered
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    }, this.handleSubmit(event.target.value))
  }

  render(){
    return(
      <>
      <div class='searchForm'>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <form>
            <label htmlFor='search'>
              <h1>Search all series:</h1>
            </label>
            <TextField label='Title' type='text' id='query' placeholder='Enter title' onChange={(e) => this.handleChange(e)} />
          </form>
        </Box>
      </div>
        {
          (this.state.query && this.state.filteredManga) ?
          <>
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
                this.state.filteredManga.map(manga => {
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
          </>
          : ''
        }
      </>
    )
  }
}
