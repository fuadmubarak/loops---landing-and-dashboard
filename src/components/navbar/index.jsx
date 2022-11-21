import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="shadow w-full fixed top-0 z-50">
      <div className="md:flex items-center justify-between bg-gray-50 py-4 md:px-10 px-7">
        <div
          className="font-bold text-xl cursor-pointer flex items-center text-gray-800"
          onClick={() => navigate(`/`)}
        >
          <img src={require("./img/loopslogo.png")} alt="" className="logo1" />
        </div>
        <div className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden"></div>
        <Button
          type="primary"
          shape="round"
          size={"large"}
          onClick={() => navigate(`/Dashboard`)}
        >
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default Navbarr;
