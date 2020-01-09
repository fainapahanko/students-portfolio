import React from 'react';
import UpdateStudent from './UpdateStudent' 
import {  Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap'
class Students extends React.Component {
    state = { 
        isOpen: false
     }
    toDelete = async() => {
        let response = await fetch("http://localhost:5000/students/" + this.props.student._id,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        return response
    }
    toUpdate = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        return ( 
            <Col className="m-3" md="4">
            <Card>
              <CardBody>
                <CardTitle>{this.props.student.name} {this.props.student.surname}</CardTitle>
                <CardSubtitle>{this.props.student.email}</CardSubtitle>
                <CardText>Projects {this.props.student.numberOfProjects}</CardText>
                <Button className="mr-3 btn-danger" onClick={this.toDelete}>Delete</Button>
                <Button className="btn-info" onClick={this.toUpdate}>Update</Button>
                {this.state.isOpen && <UpdateStudent toClose={this.toUpdate} student={this.props.student} modal={this.state.isOpen} />}
              </CardBody>
            </Card>
          </Col>
         );
    }
}
 
export default Students;