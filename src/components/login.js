import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import logo from '../images/logo.png'
//import '../css/style_registry.css'
import {Link}  from 'react-router-dom'

class login extends React.Component {


  render () {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <center>
            <img className='image' src={logo} style={{width:"25%",height:"25%"}}alt='Icon Easy Eat' />
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
          </center>
          <form className='form' noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password' />
            <br></br>
            <Link to="/task" style={{textDecoration:"none"}}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className='submit'>
                Sign In
              </Button>
            </Link>
            <br></br>
            <br></br>
            <Grid container>
             
              <Grid item>
                <Link to="/register" style={{textDecoration:"none"}}>
                {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    )
  }

}

export default login