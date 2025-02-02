import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#387ed1",
        color: "#fff",
        textDecoration: "none",
     
      }}
    >

      <div className="container support_anchor" style={{    height: "500px", }}>
        <div className="row pt-5 ">
          <div className="col-7">
            <a href="">
              <h4>Support Portal</h4>
            </a>
            <p className="mt-5 fs-3">
              Search for an answer or browse help topics to create <br /> a
              ticket  
            </p>
            
            <input 
              type="  text"
              className=" mb-4"
              name="search"
              style={{width:" 100%",
                height: "20%",
                borderRadius:"5px",
                border:"1px solid #fff"
               }}

              placeholder=  "  Ex: How do i activate F&O, Why is my order getting rejected... "
              
            />
            <a href="" style={{borderBottom:"2px solid white", paddingBottom:"5px",fontSize:"18px"}}>Track account opening </a> &nbsp;&nbsp;&nbsp;
            <a href="" style={{borderBottom:"2px solid white", paddingBottom:"5px",fontSize:"18px"}}>Track segment activation </a> &nbsp; &nbsp; &nbsp;
            <a href="" style={{borderBottom:"2px solid white", paddingBottom:"5px",fontSize:"18px"}}>Intraday margins </a> &nbsp; &nbsp; &nbsp; <br /><br />
            <a href="" style={{borderBottom:"2px solid white", paddingBottom:"5px",fontSize:"18px"}}>Kite user manual</a> &nbsp; &nbsp; &nbsp;
          </div>
          <div className="col-5">
            
            <a href="" > <p style={{borderBottom:"2px solid white", paddingBottom:"5px",fontSize:"18px",textAlign:"right",display:"inline-block",marginBottom:"100px"}}> Track tickets</p>   </a>
            <h5 className="fs-3">Featured</h5> <br />
            <ol>
              <li >BSE StAR mutual fund platform downtime</li> <br />
              <li>Surveillance measure on scrips - January 2025</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
