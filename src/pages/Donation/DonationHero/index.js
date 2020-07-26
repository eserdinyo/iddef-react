import React from "react";
import "./style.scss";
import { Heart } from "../../../icons";

export default function index() {
  return (
    <div className="DonationHero">
      <div className="container">
        <div className="DonationHero-title">
          <Heart color="#c29e61" height="40" width="40" />
          <h1>Online Bağış</h1>
        </div>
        <div className="DonationHero-desc">
          İDDEF, tüm dünyada eğitim çalışmaları amacı ile kurulmuş, bu
          çalışmalarına destek olarak çeşitli alanlarda insani yardım
          faaliyetlerinde de bulunan, İstanbul merkezli İslami ve insani bir
          yardım kurumudur.
        </div>
      </div>
    </div>
  );
}
