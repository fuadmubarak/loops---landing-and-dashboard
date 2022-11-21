import "./card.css";
import React from 'react'

const Cardd = () => {
  return (
      <>
      <div className="cardmain">
          <img src={require("./img/bpjs.png")} alt="" className="" />
              <div className="cardcon">
                  <b>Pembayaran PLN</b>
                  <b>Rp. 50.000</b>
              </div>
      </div>
      </>
  )
}

export default Cardd