import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5" style={{width:"45%"}}>
          <h1 className = 'fs-2'>Trust with confidence</h1>

          <h3 className="fs-4 mt-5 text-muted">Customer-first always</h3>
          <p className ='text-muted'>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h3 className="fs-4 text-muted mt-5">No spam or gimmicks</h3>
          <p className ='text-muted'>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4 text-muted mt-5">The Zerodha universe</h3>
          <p className ='text-muted'>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="fs-4 text-muted mt-5">Do better with money</h3>
          <p className ='text-muted'>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "100%" }}
            alt=""
          />
          <div className="text-center" >
            <a href="" className="mx-5" style={{textDecoration:"none"}} >
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="mr-5" style={{textDecoration:"none"}}>
              Try Kite <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
