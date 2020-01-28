import React from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'

class AddStudent extends React.Component {
    state = { 
        newStudent: {}
     }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            newStudent: Object.assign(this.state.newStudent, {[e.target.id]:e.target.value})
        })
    }
    addStudent = async(e) => {
        e.preventDefault()
        try{
            let response = await fetch("http://localhost:5000/students", {
                method: "POST",
                body: JSON.stringify(this.state.newStudent),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return response
        } catch(err){
            console.log(err)
        }
        this.props.toClose()
    }
    render() { 
        return ( 
            <Container fluid className="p-5" style={{backgroundColor: "#181818", minHeight: "100vh"}}>
            <div style={{backgroundColor: "white", borderRadius: "10px"}} className="p-4">
            <Form onSubmit={this.addStudent}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handleChange} required type="email" name="email" id="email" placeholder="ivanpetron@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input onChange={this.handleChange} required type="text" id="name" placeholder="Ivan" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Surname</Label>
              <Input onChange={this.handleChange} required type="text" id="surname" placeholder="Petrov"/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Date of Birth</Label>
              <Input onChange={this.handleChange} required type="date" id="dateOfBirth" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">ImageUrl</Label>
              <Input onChange={this.handleChange} type="text" id="imgUrl" />
            </FormGroup>
            <Button className="btn-warning" type="submit">Add</Button>
            </Form>
            </div>
            </Container>
         );
    }
}
 
export default AddStudent;