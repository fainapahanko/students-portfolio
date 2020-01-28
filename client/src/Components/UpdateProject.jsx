import React from "react";
import {Button,Modal, Form, FormGroup, Label, Input} from 'reactstrap'

class UpdateProject extends React.Component {
  state = {
      project: this.props.project
  }
  handleChange = (e) => {
      e.preventDefault()
      this.setState({
          project: Object.assign(this.state.project, {[e.target.id]:e.target.value})
      })
  }
  UpdateProject = async(e) => {
      e.preventDefault()
      try{
          let response = await fetch("http://localhost:5000/projects/" + this.props.project._id,{
              method: "PUT",
              body: JSON.stringify(this.state.project),
              headers: {
                "Content-Type": "application/json"
            }
          })
          this.props.fetchPr()
          return response
      } catch(err){
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
        <Form onSubmit={this.UpdateProject} className="p-4">
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input onChange={this.handleChange} type="text" name="email" id="title" placeholder={this.props.project.title} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input onChange={this.handleChange} type="text" id="description" placeholder={this.props.project.description} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">GitUrl</Label>
              <Input onChange={this.handleChange} type="text" id="gitUrl" placeholder={this.props.project.gitUrl} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">LiveUrl</Label>
              <Input onChange={this.handleChange} type="text" id="liveUrl" placeholder={this.props.project.liveUrl} />
            </FormGroup>
            <Button className="btn-warning mr-3" type="submit">Update</Button>
            <Button className="btn-info" onClick={this.props.toClose} type="button">Cancel</Button>
            </Form>
        </Modal>
      </div>
    );
  }
}

export default UpdateProject;
