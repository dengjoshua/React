import React, { Component } from 'react'
import Cushons from './cushons';
import { AppBar, Toolbar, Typography, Checkbox, Button } from '@material-ui/core'


class Home extends Component {
  render() {
    return (
      <div className="app">
 
                <nav className="nav navbar bg-primary">Welcome to mama's adverts</nav>
                <Checkbox />
                <Button>DEng</Button>

            <AppBar position="static">
              <Toolbar>        
                  <Typography> 
                  Deng Joshua 
                  </Typography>
                  </Toolbar>
            </AppBar>
                            <Cushons />


                <footer  className="bg-secondary footer" >
                    &copy;Copyright 2020
                </footer>     
     
      </div>
    )
  }
}

export default Home;