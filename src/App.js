import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'Name',
      email:'Email',
      gender:"Doesn't want to share",
      address:'',
      title:"Please Fill the Form",
      buttonText:'SUBMIT',
      display:true
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = (display, buttonText, title) => {
    // const display : this.state.display;

    const btnText = !(this.state.display) ? "SUBMIT" : "BACK";
    const titleText = !(this.state.display) ? "Please Fill the form" : "Your Submitted Details";
    
    this.setState({
      display:!this.state.display,
      buttonText:btnText,
      title : titleText
    });
  }

  render() {
    let content = <div></div>;
    let display = this.state.display;
    let {name,gender,email} = this.state;
    // let details = this.state.details;
    let genders = ["Male", "Female", "Transgender", "Doesn't want to share"];
    // details.gender = genders[3];
    if(display){
      
      content = 
      <div class="form">
        <TextField
          id="outlined-name"
          label="Name"
          // label={name}
          margin="normal"
          variant="outlined"
          // function(e) {function(e){e.target.value = {name}}; this.handleChange(e)}.bind(this)
          onChange={this.handleChange('name')}
        />
        <TextField
          id="outlined-name"
          label="Email"
          // label={email}
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('email')}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          // className={classes.textField}
          value={gender}
          onChange={this.handleChange('gender')}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu,
          //   },
          // }}
          helperText="Please select your gender"
          margin="normal"
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>;
    }
    else{
      content = 
      <div class="detailsCard">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Your name is {this.state.name}
            </Typography>
            <Typography variant="h5" component="h2">
              Your Email is {this.state.email}
            </Typography>
            <Typography variant="h5" component="h2">
              Your Gender is {this.state.gender}
            </Typography>
          </CardContent>  
        </Card>
      </div>
    }
    return (
      <div>
        <Header title={this.state.title}/>
        <div className="form-wrapper">
          <div>{content}</div>
          <Button variant="contained" color="primary" onClick={this.handleClick} >{this.state.buttonText}</Button>
        </div>
      </div>
    );    
  }
}

export default App;
