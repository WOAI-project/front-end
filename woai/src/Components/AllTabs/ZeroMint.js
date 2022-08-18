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
    // Notice about when mint starts
  //END

  // Handle supply == 2500
    // Notice if all minted
  //END

  // Handle successful mint
  //END

  // Handle Minting
  async mintWoai(numberOfTokens,referrerAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const woaiZeroContract = new ethers.Contract("0x6785a973A5d33921aB21F704de0a7bf09304D08a", WoaiZeroABI, provider);  //Testnet contract address

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
        <button className="mintButtons mintButtonAux" onClick={() => this.minAmont()}>MIN</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.decreaseAmont()}>-</button>
        <button className="mintButtons mintButtonMain" onClick={() => this.mintWoai(this.state.amountToMint,this.state.referrer)}>Mint {this.state.amountToMint} WOAI</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.increaseAmont()}>+</button>
        <button className="mintButtons mintButtonAux" onClick={() => this.maxAmont()}>MAX</button>
        <br />
        <br />
        <br />
        <span><input type="checkbox" className='referCheck' value={this.state.hasReferrer} onChange={() => this.toggleReferrer()} /> {(!this.state.hasReferrer) ? <label>Referred?</label> : <label></label>}</span>
        {(this.state.hasReferrer) ? <input type="text" maxLength="42" className='referField' title="Enter referrer address here" value={this.state.referrer} onChange={event => this.setState({ referrer: event.target.value})}></input> : <p></p> }
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