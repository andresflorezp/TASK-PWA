import React from 'react'
import Nav from "./NavBar";
import CardTask from "./cardTask";
import Ready from "../images/1.png";
import InProgress from "../images/2.png";
import Complete from "../images/3.png";
import ButtonAdd from "./ButtonAdd";
class Task extends React.Component {


    render () {
      return (
        <div>
            <Nav/>
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