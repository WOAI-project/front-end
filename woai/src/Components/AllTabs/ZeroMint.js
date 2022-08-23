import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroMint.css"

class ZeroMint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountToMint: 5,
      referrer: "",
      hasReferrer: false
    };

  }

  // Handle amount changes
  async decreaseAmont() {
    if (this.state.amountToMint > 1) {
      this.setState((prevState) => ({ amountToMint: prevState.amountToMint - 1}));
    }
  }
  async increaseAmont() {
    if (this.state.amountToMint < 10) {
      this.setState((prevState) => ({ amountToMint: prevState.amountToMint + 1}));
    }
  }
  async maxAmont() {
    this.setState((prevState) => ({ amountToMint: 10}));
  }
  async minAmont() {
    this.setState((prevState) => ({ amountToMint: 1}));
  }
  //END


  // Handle referrer
  async toggleReferrer() {
    if (this.state.hasReferrer) {
      this.setState({hasReferrer : false})
    } else {
      this.setState({hasReferrer : true})
    }
  }
  //END

  // Handle mint start
    //BOUNTY (1 WOAI/Zero): Show a warning on the front-end if mint hasn't started along with a count down to Sep 6, 12:00 UTC
    // Notice about when mint starts
  //END

  // Handle supply == 2500
    //BOUNTY (1 WOAI/Zero): Show an error message if everything has been minted (i.e. supply == 2500). 
  //END

  // Handle mint success & errors
    //BOUNTY (3 WOAI/Zero): Show messages for success and the most common errors on the front-end (must be aligned with the general webapp style)
  //END

  // Handle referrer from URL parameters
    //BOUNTY (2 WOAI/Zero): Allow user to pass referrer address as a URL parameter. This gets added as a referrer automatically.
  //END

  // Handle Minting
  async mintWoai(numberOfTokens,referrerAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const woaiZeroContract = new ethers.Contract("0x9E61574ceeb8a3dd924C9f1dAE5ca95Bb684Ab29", WoaiZeroABI, provider);  //Testnet contract address

    const woaiZeroWithSigner = woaiZeroContract.connect(signer);
    if (referrerAddress.length == 0) {
      woaiZeroWithSigner.mintWoai(numberOfTokens,{value:1*numberOfTokens});    //button onclick defined for testnet!
    } else {
      woaiZeroWithSigner.mintAndRefer(numberOfTokens,referrerAddress,{value:1*numberOfTokens});   //button onclick defined for testnet!
      console.log(referrerAddress)
    }
  }
  // END


  renderZeroMint() {
    return (
      <div id="RenderZeroMintInner">
        { /* BOUNTY (1 WOAI/Zero): If the user has been on the page for 10 seconds without clicking anything, show a dismissable message "Having trouble? Check our docs and FAQ." */ }
        <button className="mintButtons mintButtonAux" onClick={() => this.minAmont()}>MIN</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.decreaseAmont()}>-</button>
        <button title="By clicking the mint button you confirm you have carefully read and accepted the WOAI Terms of Use." className="mintButtons mintButtonMain" onClick={() => this.mintWoai(this.state.amountToMint,this.state.referrer)}>Mint {this.state.amountToMint} WOAI</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.increaseAmont()}>+</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.maxAmont()}>MAX</button>
        <br />
        <br />
        <br />
        <span><input type="checkbox" className='referCheck' value={this.state.hasReferrer} onChange={() => this.toggleReferrer()} /> {(!this.state.hasReferrer) ? <label>Referred?</label> : <label></label>}</span>
        {(this.state.hasReferrer) ? <input type="text" maxLength="42" placeholder='referrer address' className='referField' title="Enter referrer address here" value={this.state.referrer} onChange={event => this.setState({ referrer: event.target.value})}></input> : <p></p> }
      </div>
    )
  }

  render() {
    return(
      <div id="RenderZeroMint">
        {this.renderZeroMint()}
      </div>
    )
  }
}

export default ZeroMint;