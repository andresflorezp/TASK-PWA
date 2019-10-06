import React from 'react'
import Nav from "./NavBar";
import ButtonAdd from "./ButtonAdd";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import {withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class newTask extends React.Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render(){

    
        return (
            <div>
                <Nav />
                <br/>
                <br/>
                <br/>
                <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <center>
            
            <Typography component='h1' variant='h5'>
              New Task
            </Typography>
          </center>
          <form className='form' noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='description'
              label='Description'
              name='description'
              autoComplete='description'
              autoFocus />
              <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='responsable'
              label='Responsable'
              name='responsable'
              autoComplete='responsable'
              autoFocus />
              <FormControl fullWidth>
                <InputLabel  htmlFor="age-customized-select">Status</InputLabel>
                <Select
                //value={age}
                //onChange={handleChange}
                //input={<BootstrapInput name="age" id="age-customized-select" />}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ready</MenuItem>
                <MenuItem value={20}>In-Progress</MenuItem>
                <MenuItem value={30}>Complete</MenuItem>
                </Select>
            </FormControl>
            <br/><br/>
            <FormControl fullWidth>
            <DatePicker fullWidth
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
            </FormControl>
              
          
            <br></br><br/>
            <Link to="/task" style={{textDecoration:"none"}}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className='submit'>
                Create New Task!!
              </Button>
            </Link>
            <br></br>
            <br></br>
        
          </form>
        </div>
        
      </Container>
                
            </div>
        )
    }

}

export default newTask