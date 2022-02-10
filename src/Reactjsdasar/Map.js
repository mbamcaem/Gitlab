import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 8000,
  },
  {
    nama: "Bakso",
    harga: 12000,
  },
  {
    nama: "Mie Ayam",
    harga: 10000,
  },
  {
    nama: "Nasi goreng",
    harga: 15000,
  },
];

//reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);
const filterharga = 8000
const total_bayar_filter = makanans.filter((makanan) => makanan.harga > filterharga).reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

// console.log(`hasilnya ${total_bayar_filter}`);

const Map = () => {
  return (
    <div>
      <h2>Map sederhana</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1} - {makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>Total harga : {total_bayar}</h2>

      <h2>Map lebih dari {filterharga}</h2>

      <ul>
        {makanans
          .filter((makanan) => makanan.harga > filterharga)
          .map((makanan, index) => (
            <li>
              {index + 1} - {makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>

      <h2>Total harga : {total_bayar_filter}</h2>
    </div>
  );
};

export default Map;
