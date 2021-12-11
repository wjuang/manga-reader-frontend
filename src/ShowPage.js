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
