import React, { Component } from "react";
import SubLifecycle from "./SubLifecycle";
//rconst
export default class lifecycle extends Component {
  //rcc
  constructor(props) {
    super(props);

    this.state = {
      makanan: "bakso",
      data: {},
      tampilHalamansub: false,
    };
  }

  //fungsinya mengambil data dari API, masukan ke state
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>

        {this.state.tampilHalamansub && 
          <SubLifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

        <button
          onClick={() =>
            this.setState({tampilHalamansub: !this.state.tampilHalamansub })}>Tampilkan halaman sub</button>
      </div>
    );
  }
}
