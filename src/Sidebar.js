import React, {Component} from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import eyes from './assets/makima.bmp'
import Login from '@mui/icons-material/Login'
import AddBox from '@mui/icons-material/AddBox'
import Home from '@mui/icons-material/Home'
import Logout from './Logout'



// import ListItemIcon from '@mui/material/ListItemIcon'

export default function Sidebar(props){

  return(
    <div class='drawerwrap'>
      <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        backgroundColor: '#630000'
      }}
      >
          <img src={eyes} className='eyes'/>

          <List>
            <Divider />
            <ListItem onClick={() => props.goHome()}><Home /> <ListItemText primary='Home'/></ListItem>
            <Divider />
            <ListItem onClick={() => props.submitToggle()}><AddBox /> <ListItemText primary='New Series'/></ListItem>
            <Divider />
            <ListItem onClick={() => props.loginToggle()}><Login /> <ListItemText primary='Login/Register'/></ListItem>
            <Divider />
            <ListItem><ListItemText primary='About'/></ListItem>
            <Divider />
          </List>
      </Drawer>
    </div>
  )

}
