import React from "react";
import HeadersLogo from "../../assets/imgcar.png";
import "./style.css";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="headers-container">
      <div className="headers">
        <div className="headers-text">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to={"/findcars"}>
            <button>Mulai Sewa Mobil</button>
          </Link>
        </div>
        <div className="headers-logo">
          <img src={HeadersLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Headers;
