import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <div class="header">{props.title}</div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
