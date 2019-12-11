import React from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'

class AddProject extends React.Component {
    state = { 
        newStudent: {}
     }
    handleChange = (e) => {
        this.state.newStudent[e.target.id] = e.target.value
    }
    addStudentProject = async() => {
        let st = this.state.newStudent
        console.log(st)
        let response = await fetch("http://localhost:5000/students", {
            method: "POST",
            body: JSON.stringify(st),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response
    }
    render() { 
        return (
            <div style={{backgroundColor: "white"}}>
            <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input onChange={this.handleChange} type="text" id="name" placeholder="name" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">created</Label>
              <Input onChange={this.handleChange} type="text" id="created" placeholder="1 month age" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">RepoURL</Label>
              <Input onChange={this.handleChange} type="text" id="RepoURL" placeholder="RepoURL" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">LiveURL</Label>
              <Input onChange={this.handleChange} type="text" id="LiveURL" placeholder="LiveURL" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">StudentID</Label>
              <Input onChange={this.handleChange} type="text" id="StudentID" placeholder="password placeholder" />
            </FormGroup>
            <Button onClick={this.addStudentProject}>Add</Button>
            </Form>
            </div>
        );
    }
}
 
export default AddProject;