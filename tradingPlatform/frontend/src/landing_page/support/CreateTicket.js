import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h3 className="fs-3  text-muted">
          To create a ticket, select a relevant topic
        </h3>

        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-solid fa-plus"></i> &nbsp; Account Opening
            </a>
            <div className="createTicket_div">
              <a href="">Getting started</a>
              <a href="">Online</a>
              <a href="">Offline</a>
              <a href="">Charges</a>
              <a href="">Company, Partnership and HUF</a>
              <a href="">Non Resident Indian (NRI)</a>
            </div>
          </div>
        </div>

        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-regular fa-user"></i> &nbsp; Your Zerodha Account
            </a>
            <div className="createTicket_div">
              <a href="">Login credentials</a>
              <a href="">Your Profile</a>
              <a href="">Account modification and segment addition</a>
              <a href="">CMR & DP ID</a>
              <a href="">Nomination</a>
              <a href="">Transfer and conversion of shares</a>
            </div>
          </div>
        </div>

        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-solid fa-chart-simple"></i> &nbsp; Trading and
              Markets
            </a>
            <div className="createTicket_div">
              <a href="">Trading FAQs</a>
              <a href="">Kite</a>
              <a href="">Margins</a>
              <a href="">Product and order types</a>
              <a href="">Corporate actions</a>
              <a href="">Kite features</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-5 mb-5">
        
        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-solid fa-wallet"></i> &nbsp; Funds
            </a>
            <div className="createTicket_div">
              <a href="">Fund withdrawal</a>
              <a href="">Adding funds</a>
              <a href="">Adding bank accounts</a>
              <a href="">eMandates</a>
            </div>
          </div>
        </div>

        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-solid fa-terminal"></i> &nbsp; Console
            </a>
            <div className="createTicket_div">
              <a href="">IPO</a>
              <a href="">Portfolio</a>
              <a href="">Funds statement</a>
              <a href="">Profile</a>
              <a href="">Reports</a>
              <a href="">Referral program</a>
            </div>
          </div>
        </div>

        <div className="col-4 mt-5 createTicket">
          <div>
            <a href="" className="createTicket_a">
              <i class="fa-solid fa-coins"></i> &nbsp; Coin
            </a>
            <div className="createTicket_div">
              <a href="">Understanding mutual funds and Coin</a>
              <a href="">Coin app</a>
              <a href="">Coin web</a>
              <a href="">Transactions and reports</a>
              <a href="">National Pension Scheme (NPS)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
