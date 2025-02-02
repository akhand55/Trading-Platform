import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-3'>
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute ton over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className='col-6'><ul>
                            <li>Futures and Options</li>
                            <li>Stocks & IPOs</li>
                            <li>Commodity derivatives</li>

                        </ul></div>
                        <div className='col-6'>
                            <ul>
                                <li>Direct mutual funds</li>
                                <li>Currency derivatives</li>
                                <li>Bonds and Govt. Security</li>
                            </ul>
                        </div>
                    </div>
<img src="media/images/pressLogos.png" alt="" className='' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;