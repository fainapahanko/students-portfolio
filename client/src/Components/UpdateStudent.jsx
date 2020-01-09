import React from "react";
import {Button,Modal, Form, FormGroup, Label, Input} from 'reactstrap'

class UpdateStudent extends React.Component {
  state = {
      student: this.props.student
  }
  handleChange = (e) => {
      e.preventDefault()
      this.setState({
          student: Object.assign(this.state.student, {[e.target.id]:e.target.value})
      })
  }
  updateStudent = async(e) => {
      e.preventDefault()
      try{
          let response = await fetch("http://localhost:5000/students/" + this.props.student._id,{
              method: "PUT",
              body: JSON.stringify(this.state.student)
          })
          return response
      } catch(err){
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
        <Form onSubmit={this.updateStudent} className="p-4">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder={this.props.student.email} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input onChange={this.handleChange} type="text" id="name" placeholder={this.props.student.name} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Surname</Label>
              <Input onChange={this.handleChange} type="text" id="surname" placeholder={this.props.student.surname} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Date of Birth</Label>
              <Input onChange={this.handleChange} type="date" id="dateOfBirth" placeholder={this.props.student.surname} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">ImageUrl</Label>
              <Input onChange={this.handleChange} type="text" id="imgUrl" placeholder={this.props.student.imgUrl} />
            </FormGroup>
            <Button className="btn-warning mr-3" type="submit">Update</Button>
            <Button className="btn-info" onClick={this.props.toClose} type="button">Cancel</Button>
            </Form>
        </Modal>
      </div>
    );
  }
}

export default UpdateStudent;
