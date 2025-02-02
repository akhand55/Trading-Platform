import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

<div className="col-4 p-3 mt-5 universe_img">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p>Thematic investing platform that helps you invest in diversified basket of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5 universe_img ">
          <img src="media/images/sensibullLogo.svg" alt="" />
          <p>Thematic investing platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5 universe_img ">
          <img src="media/images/goldenpiLogo.png" alt="" />
          <p>Thematic investment platform.</p>
        </div>
        <div className="col-4 p-3 mt-5 universe_img ">
          <img src="media/images/streakLogo.png" alt="" />
          <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5 universe_img ">
          <img src="media/images/dittoLogo.png" alt="" />
          <p>Personalized advice on life and hea;th insurance. No spam and no mis-selling.</p>
        </div>
        <div className="col-4 p-3 mt-5 universe_img ">
          <img src="media/images/zerodhaFundhouse.png" alt="" />
          <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>

        

        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
