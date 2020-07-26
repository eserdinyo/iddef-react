import React from "react";
import { Heart } from "../../../icons";
import "./style.scss";

export default function index() {
  return (
    <div className="DonationItem">
      <div className="DonationItem-img">
        <img src="https://cdn.iddef.org/products/2018_02_14_11_04_06_DFlG3I1r9WOImw6.jpg" />
      </div>
      <div className="DonationItem-body">
        <div className="DonationItem-title">Adak Kurban - Küçükbaş</div>
        <div className="DonationItem-desc">
          Adak küçükbaş kurban bağışlarınızı ihtiyaç sahiplerine ulaştırıyoruz.
        </div>
        <div className="DonationItem-footer">
          <div className="DonationItem-input-wrapper">
            <input type="number" placeholder="700" />
            <span>₺</span>
          </div>
          <button className="DonationItem-add btn">
            <Heart color="#fff" height="22" />
          </button>
        </div>
      </div>
    </div>
  );
}
