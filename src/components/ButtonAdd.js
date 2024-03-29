import React from 'react';
import Fab from '@material-ui/core/Fab';
import {Link}  from 'react-router-dom'
//import {Link}  from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

export default class AddTask extends React.Component {

    render() {

        return (
            <Link to="/newtask">
                <Fab  aria-label="add" style={{ margin: "10px",position: "fixed",
                            bottom: "0",
                            right: "0",backgroundColor:"#0074D9",color:"#fff" }}>
                
                    <AddIcon/>
                </Fab>
            </Link>

        )
    }

}