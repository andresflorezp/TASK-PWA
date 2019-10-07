import React from 'react'
import Nav from "./NavBar";
import CardTask from "./cardTask";
import Ready from "../images/1.png";
import InProgress from "../images/2.png";
import Complete from "../images/3.png";
import ButtonAdd from "./ButtonAdd";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FilterLogo from "../images/filter.png"
class Task extends React.Component {


    render () {
      return (
        <div>
            <Nav/>
            <br/>
            <br/>
            <br/>
            <center>
            <Link to="/taskfilter" style={{textDecoration:"none"}}>
              <Button
              style={{ margin: "10px",position: "fixed",
                            top: "0.5",left:"30%"
                           ,color:"#fff",zIndex:"100" }}
                type='submit'
                
                variant='contained'
                color='secondary'
                className='submit'>
                Filter
                <img src={FilterLogo} alt="" srcset=""/>
              </Button>
            </Link>
            </center>
            <CardTask description="Implement View Login" assign="Andres Florez" date="12-05-13" state="ready" imageS={Ready}/>
            <CardTask description="Implement View Register" assign="Andres Florez" date="12-05-03" state="In Progress" imageS={InProgress}/>
            <CardTask description="Implement View Task" assign="Andres Florez" date="11-05-13" state="Completed" imageS={Complete}/>
            <CardTask description="Implement View NavBar" assign="Andres Florez" date="12-07-13" state="ready" imageS={Ready}/>
            <ButtonAdd/>
        </div>
      )
    }
  
  }
  
  export default Task