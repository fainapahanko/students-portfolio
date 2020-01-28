import React from "react";
import Students from "./Students";
import Project from "./Project";
import { Button, Form, Label, Input, Pagination, PaginationItem, PaginationLink, Container, Row, Col, FormGroup } from "reactstrap";

class Main extends React.Component {
  state = {
    students: [],
    projects: [],
    filterOptions: {}
  };
  selectStudent = e => {
    e.preventDefault();
    const newPorjects = this.state.projects.filter(
      p => p.author === e.target.value
    );
    if (e.target.value !== "all") {
      this.setState({
        choosenProjects: newPorjects
      });
    } else {
      this.setState({
        choosenProjects: undefined
      });
    }
  };
  fetchStudents = async () => {
    let response = await fetch("http://localhost:5000/students", {
      method: "GET"
    });
    let students = await response.json();
    let arr = [];
    const numberPages = Math.floor(students.students.length);
    for (var i = 1; i <= numberPages; i++) {
      arr.push(i);
    }
    console.log(students.total)
    this.setState({
      students: students.students,
      studentsTotal: arr
    });
  };
  filterStudents = (e) => {
      e.preventDefault()
      console.log(this.state.filterOptions)
  }
  addFilterOptions = (e) => {
    e.preventDefault()
    this.setState({
        filterOptions: {[e.target.id]: e.target.value}
    })
  }
  fetchProjects = async () => {
    let response = await fetch("http://localhost:5000/projects", {
      method: "GET"
    });
    let projects = await response.json();
    console.log(projects.projects);
    this.setState({
      projects: projects.projects
    });
  };
  handlePageChange = async (pageNumber) => {
    // let skip = pageNumber
    // if(pageNumber == 1){
    //     skip = 0
    // } else {
    //     skip = pageNumber -1
    // }
    //limit = 2 soooooo first skip 0, second =2, third 
    // 1,2,3 1 => 0, 2 => 2, 3 => 4,4 = 6, 5 = 8, 6 = 9, 7 = 11
    //if(this.state.filterOptions.limit) limit = this.state.filterOptions.limit
    let response = await fetch(
      `http://localhost:5000/students/hm?limit=${1}&offset=${pageNumber-1}`,
      {
        method: "GET"
      }
    );
    const student = await response.json();
    this.setState({
      currentStudents: student
    });
  };
  componentDidMount = () => {
    this.fetchStudents();
    this.fetchProjects();
  };
  render() {
    return (
      <Container
        fluid
        className="p-4"
        style={{ backgroundColor: "#181818", minHeight: "100vh" }}
      >
        <Row>
          <Col md="4">
            <Row>
            {/* <Col md="12">
                <h2 className="m-3" style={{color: "white"}}>Filter</h2>
                <Form className="m-3" onSubmit={this.filterStudents}>
                    <Label style={{color: "white"}}>How name students per page</Label>
                    <Input onChange={this.addFilterOptions} id="limit" type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Input>
                    <Button className="mt-2" type="submit">Filter</Button>
                </Form>
            </Col> */}
              <Col md="12">
                {this.state.students.length > 0 && (
                  <div>
                    <Pagination className="ml-3">
                      {this.state.studentsTotal &&
                        this.state.studentsTotal.map((st, k) => (
                          <PaginationItem className="page-item" key={k}>
                            <PaginationLink
                              style={{
                                color: "black",
                                textDecoration: "none",
                                fontSize: "14px"
                              }}
                              onClick={() => this.handlePageChange(st)}
                            >
                              {st}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                    </Pagination>
                  </div>
                )}
              </Col>
              {this.state.currentStudents
                ? this.state.currentStudents.map((st, i) => (
                    <Students
                      fetchSt={this.fetchStudents}
                      fetchPr={this.fetchProjects}
                      student={st}
                      key={i}
                    />
                  ))
                : this.state.students.map((st, i) => (
                    <Students
                      fetchSt={this.fetchStudents}
                      fetchPr={this.fetchProjects}
                      student={st}
                      key={i}
                    />
                  ))}
            </Row>
          </Col>
          <Col md="7">
            <Row>
              <Col md="12">
                <FormGroup className="ml-3">
                  <Label for="exampleSelect" style={{ color: "white" }}>
                    Select Student
                  </Label>
                  <Input
                    onChange={this.selectStudent}
                    type="select"
                    name="select"
                    id="name"
                  >
                    <option>all</option>
                    {this.state.students &&
                      this.state.students.map((st, k) => (
                        <option key={k}>
                          {st.name} {st.surname}
                        </option>
                      ))}
                  </Input>
                </FormGroup>
              </Col>
              {this.state.choosenProjects
                ? this.state.choosenProjects.map((pr, i) => (
                    <Project
                      fetchSt={this.fetchStudents}
                      fetchPr={this.fetchProjects}
                      project={pr}
                      key={i}
                    />
                  ))
                : this.state.projects.map((pr, i) => (
                    <Project
                      fetchSt={this.fetchStudents}
                      fetchPr={this.fetchProjects}
                      project={pr}
                      key={i}
                    />
                  ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
