import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-8 p-4 text-muted">
            <a href="" className="">
            <h1 className="fs-5 mb-5 text-center" style={{color:"#387ed1"}}>Brokerage calculator</h1>
            </a>
          
          <ul style={{textAlign:"left",lineHeight:"1.8"}} className="fs-6">
            <li className='mb-3'>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.
            </li>
            <li className='mb-3'>Digital contract notes will be sent via e-mail.
            </li>
            <li className='mb-3'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charge apply.
            </li>
            <li className='mb-3'>For NRI account (non-PSI),0.5% or ₹100 per executed order for equity.
            </li>
            <li className='mb-3'>For NRI account(PIS),0.5% or ₹200 per executed order for equity.
            </li>
            <li className='mb-3'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>

        </div>
        <div className="col-4 p-4 fs-5"style={{color:"#387ed1"}}>
            <a href=""> <h1 className="fs-5 mb-5">List of charges</h1></a>
         

        </div>
      </div>
    </div>
  );
}


export default Brokerage;