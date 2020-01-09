import React from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'

class AddProject extends React.Component {
    state = { 
      newProject: {}
     }
    handleChange = (e) => {
      e.preventDefault()
      this.setState({
          newProject: Object.assign(this.state.newProject, {[e.target.id]:e.target.value})
      })
    }
    addStudentProject = async(e) => {
      e.preventDefault()
      let response = await fetch("http://localhost:5000/projects", {
          method: "POST",
          body: JSON.stringify(this.state.newProject),
          headers: {
              "Content-Type": "application/json"
          }
      })
      return response
    }
    render() { 
        return (
          <Container fluid className="p-5" style={{backgroundColor: "#181818", minHeight: "100vh"}}>
            <div style={{backgroundColor: "white", borderRadius: "10px"}} className="p-4">
            <Form onSubmit={this.addStudentProject}>
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
              <Input onChange={this.handleChange} type="date" id="created"/>
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
            <Button className="btn-warning" type="submit">Add</Button>
            </Form>
            </div>
            </Container>
        );
    }
}
 
export default AddProject;