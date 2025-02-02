import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h5 className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 traday and F&O trades</h5>
      </div>
      <div className="row p-5 mt-5 ">
<div className="col-4  text-center">
    <img src="media/images/pricing0.svg" alt="" />
    <h3>Free equity delivery</h3>
    <p className="text-muted ">All equity delivery investments (NSE,BSE), are absolutely free -- ₹0 brokerage.</p>
</div>
<div className="col-4 text-center">
    <img src="media/images/intradayTrades.svg" alt="" />
    <h3>Intraday and F&O trades</h3>
    <p className="text-muted">Flat Rs.20 or 0.03%(whichever is lower) per executed order on intraday trades across equity, currency,and commodity trades.</p>
</div>
<div className="col-4 text-center">
    <img src="media/images/pricingMF.svg" alt="" />
    <h3>Free direct Mf</h3>
    <p className="text-muted">All direct mutual fund investments are absolutely free - ₹ 0 commission & DP charges.</p>
</div>


      </div>
    </div>
  );
}

export default Hero;
