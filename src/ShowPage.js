import React, {Component} from 'react'
import Grid from '@mui/material/Grid'

class ShowPage extends Component {
  constructor(props){
    super(props)

    this.state ={
      pages: this.props.pages
    }
  }

  render(){
    return(
      <div>
        <Grid container>
        <Grid item xs={4}>
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</p>
        </Grid>
        <Grid item xs={4}>
        <p onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</p>
        </Grid>
        <Grid item xs={4}>
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</p>
        </Grid>
        </Grid>
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
        <Grid container>
        <Grid item xs={4}>
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</p>
        </Grid>
        <Grid item xs={4}>
        <p onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</p>
        </Grid>
        <Grid item xs={4}>
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</p>
        </Grid>
        </Grid>
      </div>
    )
  }

}

export default ShowPage
