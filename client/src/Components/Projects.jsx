import React from 'react';
import Project from './Project'
import {Container} from 'reactstrap'

class Projects extends React.Component {
    state = { 
        projects: []
     }
     componentDidMount = () => {
         this.fetchProjects()
     }
     fetchProjects = async() => {
        let response = await fetch("http://localhost:5000/projects",{
            method: "GET"
        })
        let project = await response.json()
        this.setState({
            projects: project
        })
        console.log(this.state)
     }
    render() { 
        return ( 
            <Container fluid className="p-5" style={{backgroundColor: "#181818", minHeight: "100vh"}}>
                {this.state.projects && this.state.projects.map((pr, i) => <Project project={pr} key={i} />)}
            </Container>
         );
    }
}
 
export default Projects;