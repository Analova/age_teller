import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Age from "./Age";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1992-09-23"
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate });
  }

  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input your birthday</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          ></FormControl>{" "}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          <Age date={this.state.birthday} />
        </Form>
      </div>
    );
  }
}

export default App;
