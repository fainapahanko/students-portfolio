import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal} from 'reactstrap'

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
      let response = await fetch("http://localhost:5000/projects/" + this.props.student._id + "/" + this.props.student.name + "/" + this.props.student.surname, {
          method: "POST",
          body: JSON.stringify(this.state.newProject),
          headers: {
              "Content-Type": "application/json"
          }
      })
      this.props.toClose()
      this.props.fetchSt()
      this.props.fetchPr()
      return response
    }
    render() { 
        return (
          <Modal isOpen={this.props.modal}>
            <div style={{backgroundColor: "white", borderRadius: "10px"}} className="p-4">
            <Form onSubmit={this.addStudentProject}>
            <FormGroup>
              <Label>Title</Label>
              <Input onChange={this.handleChange} type="text" id="title" placeholder="name" />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input onChange={this.handleChange} type="text" id="description" placeholder="Description" />
            </FormGroup>
            <FormGroup>
              <Label>RepoURL</Label>
              <Input onChange={this.handleChange} type="text" id="gitUrl" placeholder="RepoURL" />
            </FormGroup>
            <FormGroup>
              <Label>LiveURL</Label>
              <Input onChange={this.handleChange} type="text" id="liveUrl" placeholder="LiveURL" />
            </FormGroup>
            <Button className="btn-warning mr-3" type="submit">Add</Button>
            <Button className="btn-info" onClick={this.props.toClose} type="button">Cancel</Button>
            </Form>
            </div>
            </Modal>
        );
    }
}
 
export default AddProject;