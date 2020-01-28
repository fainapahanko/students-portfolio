import React from 'react';
import Students from './Students'
import {Container, Row} from 'reactstrap'

class Main extends React.Component {
    state = { 
        students: []
    }
    fetchStudents = async() => {
        let response = await fetch("http://localhost:5000/students",{
            method: "GET"
        })
        let students = await response.json()
        this.setState({
            students: students
        })
    }
    componentDidMount = () => {
        this.fetchStudents()
    }
    render() { 
        return ( 
            <Container fluid className="p-5" style={{backgroundColor: "#181818", minHeight: "100vh"}}>
                <Row>
                    {this.state.students && this.state.students.map((st,i) => (<Students student={st} key={i} />))}
                </Row>
            </Container>
        );
    }
}
 
export default Main;