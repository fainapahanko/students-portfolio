import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainStudents from './Components/MainStudents'
import AddStudent from './Components/AddStudent'
import Main from './Components/Main'
import NavigationBar  from './Components/NavigationBar'
import Projects from './Components/Projects'

function App () {
    return(
        <Router>
            <NavigationBar />
            <Route path="/" exact component={Main} />
            <Route path="/students" component={MainStudents} />
            <Route path="/projects" component={Projects} />
            <Route path="/addStudent" component={AddStudent} />
        </Router>
    )
}

export default App;