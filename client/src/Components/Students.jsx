import React from 'react';
import UpdateStudent from './UpdateStudent' 
import AddProject from './AddProject'
import {  Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardImg} from 'reactstrap'
class Students extends React.Component {
    state = { 
        isOpen: false,
        isOpenProject: false
     }
    toDelete = async() => {
        let response = await fetch("http://localhost:5000/students/" + this.props.student._id,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        this.props.fetchSt()
        this.props.fetchPr()
        return response
    }
    toUpdate = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    newProject = () => {
        this.setState({
            isOpenProject: !this.state.isOpenProject
        })
    }
    render() { 
        return ( 
            <Col className="m-3" md="12">
            <Card>
              <CardBody>
                {this.props.student.imgUrl &&  <CardImg top width="100%" src={this.props.student.imgUrl} alt="Card image cap" />}
                <CardTitle style={{fontSize: "28px", fontWeight: "bold"}}>{this.props.student.name} {this.props.student.surname}</CardTitle>
                <CardSubtitle style={{fontSize: "18px"}}>Email: {this.props.student.email}</CardSubtitle>
                <CardText style={{fontSize: "18px"}}>Number of projects: {this.props.student.numberOfProjects}</CardText>
                <Button className="mr-3 btn-danger" onClick={this.toDelete}>Delete</Button>
                <Button className="btn-info mr-3" onClick={this.toUpdate}>Update</Button>
                <Button className="btn-info" onClick={this.newProject}>Add project</Button>
                {this.state.isOpenProject && <AddProject toClose={this.newProject} fetchSt={this.props.fetchSt} fetchPr={this.props.fetchPr} student={this.props.student} modal={this.state.isOpenProject} />}
                {this.state.isOpen && <UpdateStudent toClose={this.toUpdate} student={this.props.student} modal={this.state.isOpen} />}
              </CardBody>
            </Card>
          </Col>
         );
    }
}
 
export default Students;