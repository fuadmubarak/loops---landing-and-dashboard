import React from 'react'

const Footerr = () => {
  return (
      <div className="footerland">
          <div className="foos1">
              <img src={require("./img/loopscircle.png")} alt="" className="foolog" />
              <p>Terms Privacy Policy</p>
          </div>
          <div className="foos2">
              <div className="fooprod">
                  <h1 className="title">Products</h1>
                  <p>Top Up</p>
                  <p>Payment Bills</p>
                  <p>Promo</p>
                  <p>History</p>
              </div>
              <div className="foores">
                  <h1 className="title">Resources</h1>
                  <p>Java</p>
                  <p>React Js</p>
                  <p>MySql</p>
                  <p>GitHub</p>
              </div>
              <div className="foocomp">
                  <h1 className="title">Company</h1>
                  <p>Indivara Group</p>
                  <p>Jatis Mobile</p>
                  <p>Loops</p>
              </div>
              <div className="foojoin">
                  <h1 className="title">Join</h1>
                  <p>
                      ayo join sekarang dan dapatkan <br />
                      berbagai keuntungannya
                  </p>
                  <button className="join">Gabung Sekarang!</button>
              </div>
          </div>
          <div className="foos3">
              <div className="f1">
                  <p>Made at JDT 11. All right reserved.</p>
              </div>
              <div className="f2">
                  <button>
                      <img
                          src={require("./img/github.png")}
                          alt=""
                          className="flogo"
                      />
                  </button>
                  <button>
                      <img
                          src={require("./img/twitter.jpg")}
                          alt=""
                          className="flogo"
                      />
                  </button>
                  <button>
                      <img
                          src={require("./img/facebook.png")}
                          alt=""
                          className="flogo"
                      />
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Footerr