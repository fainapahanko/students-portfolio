import React from 'react';
import Students from './Students'
import {Container, Row, Col} from 'reactstrap'
import AddProject from './AddProject'

class Main extends React.Component {
    state = { 
        students: []
    }
    fetchStudents = async() => {
        let response = await fetch("http://localhost:5000/students",{
            method: "GET"
        })
        let students = await response.json()
        console.log(students)
        this.setState({
            students: students
        })
    }
    componentDidMount = () => {
        this.fetchStudents()
    }
    render() { 
        return ( 
            <Container fluid className="p-4" style={{backgroundColor: "#181818", minHeight: "100vh"}}>
                <Row>
                    <Col md="8">
                        <Row>
                            {this.state.students && this.state.students.map((st,i) => (<Students student={st} key={i} />))}
                        </Row>
                    </Col>
                    <Col md="4">
                        <AddProject />
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Main;