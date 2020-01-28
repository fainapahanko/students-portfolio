import React from 'react';
import {  Card, CardText, CardBody,
    CardTitle, Button, Col, CardSubtitle} from 'reactstrap'
import UpdateProject from './UpdateProject';

class Project extends React.Component {
    state = {  }
    state = { 
        isOpen: false
     }
    toDelete = async() => {
        let response = await fetch("http://localhost:5000/projects/" + this.props.project._id + "/" + this.props.project.studentId,{
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

    render() { 
        return ( 
            <Col className="m-3" md="12">
            <Card>
              <CardBody>
                <CardTitle style={{fontSize: "24px", fontWeight: "bold"}}>{this.props.project.title}</CardTitle>
                <CardSubtitle style={{fontSize: "20px", fontWeight: "bold"}}>Author: {this.props.project.author}</CardSubtitle>
                <CardText style={{fontSize: "20px"}}>{this.props.project.description}</CardText>
                <div>
                    <a style={{fontSize: "20px"}} className="mr-4" href={this.props.project.repourl}>Github</a>
                    <a style={{fontSize: "20px"}} href={this.props.project.liveurl}>Live url</a>
                </div>
                <Button className="mr-3 btn-danger" onClick={this.toDelete}>Delete</Button>
                <Button className="btn-info mr-3" onClick={this.toUpdate}>Update</Button>
                {this.state.isOpen && <UpdateProject  modal={this.state.isOpen} toClose={this.toUpdate} project={this.props.project} />}
              </CardBody>
            </Card>
          </Col>
         );
    }
}
 
export default Project;