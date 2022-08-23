import React, { Component } from 'react';
import './Disclaimer.css'

function Disclaimer() {
  return (
    <div className="disclaimer">
        <h1>TESTNET ONLY</h1>
        <p>Please note that this is a testnet (Rinkeby) version only. You can familiarise yourself with the UI by connecting to Rinkeby. Some functionality may be unavailable at the moment. <br/><br/> Mainnet collection will launch on Sep 6 at 12:00 UTC.</p>
    </div>
  );
}

export default Disclaimer;
