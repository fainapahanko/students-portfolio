import React from 'react';
import Main from './Main';
import AddStudent from './AddStudent'
import NavBar from './NavMenu'
import {Route, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                 <NavBar />
                <Route path="/" exact component={Main} />
                <Route path="/add$student" exact component={AddStudent} />
            </Router>
         );
    }
}
 
export default App;