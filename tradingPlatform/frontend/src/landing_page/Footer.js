import React from "react";
import { Link, Links } from "react-router-dom";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top pt-5">
        <div className="row">
          <div className="col">
          <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "50%" }}
            alt="Logo"
          />
        </Link>
            {/* <img src="media/images/logo.svg" style={{ width: "50%" }} alt="" /> */}
            <p className="text-muted" style={{ fontSize: "14px" }}>
              © 2010 - 2024, Zerodha Broking Ltd.All rights reserved.
            </p>

            <div>
              <div style={{}} className="footer_icon">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <hr />
              <div style={{}} className="footer_icon">
              <a href=""><i class="fa-brands fa-youtube"></i></a>  
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
               <a href=""><i class="fa-brands fa-telegram"></i></a>
              </div>
            </div>
          </div>

          <div className="col">
            <p>Company</p> <br />
            <div className="footer_anchor">
              <a href="">About</a>
              <br />
              <a href="">Products</a>
              <br />
              <a href="">Pricing</a>
              <br />
              <a href="">Referral programmer</a>
              <br />
              <a href="">Careers</a>
              <br />
              <a href="">Zerodha.tech</a>
              <br />
              <a href="">Press & media</a>
              <br />
              <a href="">Zerodha Cares (CSR)</a>
              <br />
            </div>
          </div>

          <div className="col">
            <p>Support</p> <br />
            <div className="footer_anchor">
              <a href="">Contact us</a>
              <br />
              <a href="">Support portal</a>
              <br />
              <a href="">Z-Connect blog</a>
              <br />
              <a href="">List of charges</a>
              <br />
              <a href="">Downloads & resources</a>
              <br />
              <a href="">Videos</a>
              <br />
              <a href="">Market overview</a>
              <br />
              <a href="">How to file a complaint?</a>
              <br />
              <a href="">Status of your complaints</a>
              <br />
            </div>
          </div>
          <div className="col">
            <p>Account</p> <br />
            <div className="footer_anchor">
              <a href="" style={{ textDecoration: "none" }}>
                Open an Account
              </a>{" "}
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Fund transfer
              </a>{" "}
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                60 day challenge
              </a>{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="text-muted mt-5 " style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
