import React, {Component} from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
// import ListItemIcon from '@mui/material/ListItemIcon'

export default function Sidebar(props){

  return(
    <>
      <Drawer
      variant='permanent'
      anchor='left'
      >
        <div>
          <Typography variant="h5">
            Makima Reader
          </Typography>

          <List>
            <Divider />
            <ListItem onClick={() => props.goHome()}><ListItemText primary='Home'/></ListItem>
            <Divider />
            <ListItem onClick={() => props.submitToggle()}><ListItemText primary='Add New Series'/></ListItem>
            <Divider />
            <ListItem onClick={() => props.loginToggle()}><ListItemText primary='Login/Register'/></ListItem>
            <Divider />
            <ListItem><ListItemText primary='About'/></ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  )

}