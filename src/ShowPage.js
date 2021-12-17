import React, {Component} from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import Menu from '@mui/icons-material/Menu'


class ShowPage extends Component {
  constructor(props){
    super(props)

    this.state ={
      pages: this.props.pages
    }
  }

  render(){
    return(
      <div class='reader'>
      <div class='readerButtons'>
        <Grid container>
        <Grid item xs={12}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <h1 class='chapterNumber'>{this.props.showChapterNumber}</h1>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' startIcon={<ArrowBackIos/>} onClick={() => this.props.getPages(this.props.manga.id, this.props.showChapterNumber-1)}>Previous</Button>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' startIcon={<Menu />} onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</Button>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' endIcon={<ArrowForwardIos />} onClick={() => this.props.getPages(this.props.manga.id, this.props.showChapterNumber+1)}>Next</Button>
        </Box>
        </Grid>
        </Grid>
        </div>

        <Grid container>
        {
          this.props.pages.map(page => {
            return(
              <>
              <Grid item xs={12}>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img class='readerPage' src={page.link} />
              </Box>
              </Grid>
              </>
            )
          })
        }
        </Grid>
        <div class='readerButtons'>
        <Grid container>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' startIcon={<ArrowBackIos/>} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</Button>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' startIcon={<Menu />} onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</Button>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='contained' endIcon={<ArrowForwardIos />} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</Button>
        </Box>
        </Grid>
        </Grid>
        </div>
      </div>
    )
  }

}

export default ShowPage
