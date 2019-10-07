import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './login'
import Register from './register'
import Task from "./Task";
import NewTask from "./NewTask";
import TaskFilter from "./TaskFilter";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/task" component={Task}/>
                            <Route path="/newtask" component={NewTask}/>
                            <Route path="/taskFilter" component={TaskFilter}/>
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        )

    }
}
export default App;