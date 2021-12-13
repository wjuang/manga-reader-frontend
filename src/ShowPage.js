import React, {Component} from 'react'

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
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber-1)}>Previous</p>
        <p onClick={() => this.props.showToggle(this.props.manga)}>Chapter List</p>
        <p onClick={() => this.props.getPages(this.props.manga.id, this.props.pages[0].chapternumber+1)}>Next</p>
        {
          this.props.pages.map(page => {
            return(
              <>
                <img src={page.link} />
              </>
            )
          })
        }
      </div>
    )
  }

}

export default ShowPage
