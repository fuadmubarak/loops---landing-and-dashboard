import { Navbarr, Footerr } from "@components";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbarr />
      <section className="mainland">

        <div className="sec1">
          <didv className="c1">
            <img src={require("./img/loopslogo.png")} alt="" className="logo" />
          </didv>
          <div className="c2">
            <div className="c2cont">
              <h2>Tentang Loops</h2>
              <p>
                Mau bayar apapun jadi semudah lewat sentuhan jari. melewati
                loops, kamu bisa melakukan transaksi apapun dengan praktis mulai
                dari transfer uang hingga pembayaran tagihan. ayo! segera
                bergabung dan nikmati layanannya dengan metode yang lebih cepat,
                praktis, dan aman.
              </p>
            </div>
          </div>
        </div>

        <div className="sec2">
          <div>
            <p className="sistem">
              Transaksi dengan aman <br />
              dan nyaman
            </p>
            <div className="con">
              <div className="card">
                <img
                  src={require("./img/layanan.png")}
                  alt=""
                  className="cardlog"
                />
                <h2>Layanan Terlengkap</h2>
                <p>
                  kemudahan untuk transaksi, kirim uang, dan pembayaran tagihan
                  pada merchant
                </p>
              </div>

              <div className="card">
                <img
                  src={require("./img/kemanan.png")}
                  alt=""
                  className="cardlog"
                />
                <h2>Keamanan terjamin</h2>
                <p>
                  Loops menjamin 100% kemanan transaksi digital dengan garansi
                  uang kembali
                </p>
              </div>

              <div className="card">
                <img
                  src={require("./img/sistem.png")}
                  alt=""
                  className="cardlog"
                />
                <h2>Sistem Tercanggih</h2>
                <p>
                  Loops dibangun dengan teknologi keamanan kelas dunia dengan
                  sistem jaringan yang diawasi 24 jam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec3">
          <div className="s3cont">
            <div className="merch">
              <p className="merchname">Merchant Kami</p>
            </div>
            <div className="merchlist">
              <img
                src={require("./img/bpjs.png")}
                alt=""
                className="merchitem"
              />
              <img
                src={require("./img/Logo_PLN.png")}
                alt=""
                className="merchitem"
              />
              <img
                src={require("./img/pdam.png")}
                alt=""
                className="merchitem"
              />
              <img
                src={require("./img/myrep.png")}
                alt=""
                className="merchitem"
              />
            </div>
          </div>
        </div>

        <Footerr/>

        {/*<div className="footerland">*/}
        {/*  <div className="foos1">*/}
        {/*    <img src={require("./img/loopscircle.png")} alt="" className="foolog" />*/}
        {/*    <p>Terms Privacy Policy</p>*/}
        {/*  </div>*/}
        {/*  <div className="foos2">*/}
        {/*    <div className="fooprod">*/}
        {/*      <h1 className="title">Products</h1>*/}
        {/*      <p>Top Up</p>*/}
        {/*      <p>Payment Bills</p>*/}
        {/*      <p>Promo</p>*/}
        {/*      <p>History</p>*/}
        {/*    </div>*/}
        {/*    <div className="foores">*/}
        {/*      <h1 className="title">Resources</h1>*/}
        {/*      <p>Java</p>*/}
        {/*      <p>React Js</p>*/}
        {/*      <p>MySql</p>*/}
        {/*      <p>GitHub</p>*/}
        {/*    </div>*/}
        {/*    <div className="foocomp">*/}
        {/*      <h1 className="title">Company</h1>*/}
        {/*      <p>Indivara Group</p>*/}
        {/*      <p>Jatis Mobile</p>*/}
        {/*      <p>Loops</p>*/}
        {/*    </div>*/}
        {/*    <div className="foojoin">*/}
        {/*      <h1 className="title">Join</h1>*/}
        {/*      <p>*/}
        {/*        ayo join sekarang dan dapatkan <br />*/}
        {/*        berbagai keuntungannya*/}
        {/*      </p>*/}
        {/*      <button className="join">Gabung Sekarang!</button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="foos3">*/}
        {/*    <div className="f1">*/}
        {/*      <p>Made at JDT 11. All right reserved.</p>*/}
        {/*    </div>*/}
        {/*    <div className="f2">*/}
        {/*      <button>*/}
        {/*        <img*/}
        {/*          src={require("./img/github.png")}*/}
        {/*          alt=""*/}
        {/*          className="flogo"*/}
        {/*        />*/}
        {/*      </button>*/}
        {/*      <button>*/}
        {/*        <img*/}
        {/*          src={require("./img/twitter.jpg")}*/}
        {/*          alt=""*/}
        {/*          className="flogo"*/}
        {/*        />*/}
        {/*      </button>*/}
        {/*      <button>*/}
        {/*        <img*/}
        {/*          src={require("./img/facebook.png")}*/}
        {/*          alt=""*/}
        {/*          className="flogo"*/}
        {/*        />*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </>
  );
};

export default LandingPage;
