import React, { useState, useEffect } from "react";
import axios from 'axios'

function Machine({ coin, onOk }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5c77c5b330000051009d64c9')
      .then(res => {
        console.log(res)
        setItems(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const test = (price, coin, name) => {
    if (price <= coin) {
      onOk(price);
      alert("Enjoy " + name)
    }
    else {
      alert("เงินไม่พอที่จะซื้อ " + name)
    }
  }

  return (
    <div className="border border-dark bg-light mt-4">
        <div className="row container mt-2">
          {items.map(item => (
            <div className="col" key={item.id}>
              <h6>{item.name}</h6>
              <div className="mt-1"> <img src={item.image} style={{ width: "auto", height: "150px" }}/> </div>
              <div className="mt-1">ราคา {item.price} ฿</div>
              <button type="button" id={item.id} className="btn btn-outline-success mb-2" onClick={() => { test(item.price, coin, item.name) }}
              disabled={(item.in_stock === false? true: false)}>เลือก</button>
            </div>
          ))}
        </div>
    </div>
  );
}
export default Machine;
