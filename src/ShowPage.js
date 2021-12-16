import React, {Component} from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
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
        <Grid item xs={4}>
        <Button variant='contained' startIcon={<ArrowBackIos/>} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant='contained' startIcon={<Menu />} onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant='contained' endIcon={<ArrowForwardIos />} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</Button>
        </Grid>
        </Grid>
        </div>
        <Grid container>
        {
          this.props.pages.map(page => {
            return(
              <>
              <Grid item xs={12}>
                <img class='readerPage' src={page.link} />
              </Grid>
              </>
            )
          })
        }
        </Grid>
        <div class='readerButtons'>
        <Grid container>
        <Grid item xs={4}>
        <Button variant='contained' startIcon={<ArrowBackIos/>} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant='contained' startIcon={<Menu />} onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</Button>
        </Grid>
        <Grid item xs={4}>
        <Button variant='contained' endIcon={<ArrowForwardIos />} onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</Button>
        </Grid>
        </Grid>
        </div>
      </div>
    )
  }

}

export default ShowPage
