import { Navbarr , Cardd, Footerr } from "@components";
import { Carousel } from 'antd';
import React from 'react'

const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
};


const Dashboard = () => {
  return (
      <>
      <Navbarr />
      <section className="maindash">

          <div className="wrapsec">

          <div className="section1">

              <p className="greeting">Hello, Welcome Back</p>
              <div className="contopup">

                  <div className="topupwrap">
                      <p className="tBalance">Balance</p>
                      <p className="aBalance">$100</p>
                      <button className="btnTopUp">Top Up</button>
                  </div>

              </div>

              <div className="conpromo">

                  <Carousel autoplay>

                      <div>
                          <h3 style={contentStyle}><img src={require("./img/promo1.png")} alt="" className="carlog" /></h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}><img src={require("./img/promo2.png")} alt="" className="carlog" /></h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}><img src={require("./img/promo3.png")} alt="" className="carlog" /></h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}><img src={require("./img/promo1.png")} alt="" className="carlog" /></h3>
                      </div>

                  </Carousel>

              </div>

          </div>

          <div className="section2">

              <div className="conshortcut">

                  <div className="scwrap">
                      <p className="sctext">Shortcut</p>

                      <div className="sccont">
                      <div className="consc">
                          <button className="btnBills"><img src={require("./img/paybill.png")} alt="" className="sclogo" /></button>
                          <p className="scitem">Bills</p>
                      </div>
                      <div className="consc">
                          <button className="btnPromo"><img src={require("./img/promo.png")} alt="" className="sclogo" /></button>
                          <p className="scitem">Promo</p>
                      </div>
                      <div className="consc">
                          <button className="btnHistory"><img src={require("./img/history.jpg")} alt="" className="sclogo" /></button>
                          <p className="scitem">History</p>
                      </div>
                      </div>



                  </div>

              </div>

              <div className="conrecent">

                  <div className="recentwrap">

                      <Cardd />
                      <Cardd />
                      <Cardd />
                      <Cardd />
                      <Cardd />
                      <Cardd />


                  </div>

              </div>

          </div>

          </div>

          <Footerr/>



      </section>
      </>
  )
}

export default Dashboard
