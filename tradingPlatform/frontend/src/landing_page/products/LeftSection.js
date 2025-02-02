import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 ">
        <div className="col-6 p-3">
          <img src={imageURL} alt="" className='left-Section-Img'/>
        </div>
        <div className="col-6 mt-5 left_section text-muted" style={{width:'50%'}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo}>Try Demo →</a>
          <a href={learnMore} style={{marginLeft:'110px'}}> Learn More →</a> <br /> <br />
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore} style={{marginLeft:'45px'}}>
            <img src="media/images/appstoreBadge.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
