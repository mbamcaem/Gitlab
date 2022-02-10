import React, { Component } from "react";

export default class Operan extends Component {
  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  }
  render() {
      const {makanan, gantiMakanan} = this.props //agar penulisan di this.props.makanan jadi makanan, ga panjang
    return (
      <div>
        <h2>Operan state yang menjadi props : {makanan}</h2>
        <button onClick={() => gantiMakanan("Soto props")}>Ganti makanan</button>
      </div>
    );
  }
}
