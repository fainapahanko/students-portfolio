import React from 'react';
import {  Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap'
class Students extends React.Component {
    state = {  }
    toDelete = async() => {
        let response = await fetch("http://localhost:5000/students/" + this.props.student.id,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        return response
    }
    render() { 
        return ( 
            <Col className="m-3" md="4">
            <Card>
              <CardBody>
                <CardTitle>{this.props.student.name}</CardTitle>
                <CardSubtitle>{this.props.student.description}</CardSubtitle>
                <CardText>Created {this.props.student.created}</CardText>
                <CardText>RepoLink <a href={this.props.student.RepoURL}>{this.props.student.RepoURL}</a></CardText>
                <CardText>ProjectLink <a href={this.props.student.LiveURL}>{this.props.student.LiveURL}</a></CardText>
                <Button onClick={this.toDelete}>Delete</Button>
              </CardBody>
            </Card>
          </Col>
         );
    }
}
 
export default Students;