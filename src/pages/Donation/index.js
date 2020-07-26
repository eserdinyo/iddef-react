import React from "react";
import Item from "./DonationItem";
import Hero from "./DonationHero";
import "./style.scss";

export default function Donation() {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="Donation-wrapper">
          {[1, 2, 3, 4].map(() => (
            <Item />
          ))}
        </div>
      </div>
    </div>
  );
}
