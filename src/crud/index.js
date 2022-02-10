import React, { Component } from "react";
import Formulis from "./Formulis";
import { NavbarComponent } from "./NavbarComponent";
import Tabel from "./Tabel";
//rafc
export default class Crud extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.id === "") { //add new data
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          }
        ]
      })

      // console.log("data add new submit : ", this.state);


    } else {                  //update data
      console.log("this.state.id : ", this.state.id);
      //munculkan data yg bukan dipilih
      console.log("data update sebelum di update : ", this.state);
      const makananTdkDipilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

       // console.log("tampilkan data selain yg dipilih")

        //
      this.setState({
        makanans: [
          ...makananTdkDipilih,
          {
            id: this.state.id,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          }
        ]
      })

      console.log("data setelah di update : ", this.state);

    }
  

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {

    const makananYangDipilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan
      })

    this.setState({
      nama: makananYangDipilih[0].nama,
      deskripsi: makananYangDipilih[0].deskripsi,
      harga: makananYangDipilih[0].harga,
      id: makananYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    //console.log("id nya " + id);
    const makananbaru = this.state.makanans
        .filter((makanan) => makanan.id !== id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

    this.setState({
      makanans : makananbaru
    })
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
          <Formulis
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
