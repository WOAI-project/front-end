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
      hasReferrer: false,
      loadedData: false
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
  async getMintState() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const woaiZeroContract = new ethers.Contract("0x0eAbED78fd49AD3c0A3e445954f29522025c09A0", WoaiZeroABI, provider); 
    const totalSupply = await woaiZeroContract.totalSupply();
    const saleIsActive = await woaiZeroContract.saleIsActive();
    this.setState({ totalSupply : totalSupply, saleIsActive : saleIsActive })
    console.log(this.state.totalSupply, this.state.saleIsActive, "called1");
    this.setState({ loadedData : true })
  }
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

    const woaiZeroContract = new ethers.Contract("0x0eAbED78fd49AD3c0A3e445954f29522025c09A0", WoaiZeroABI, provider); 

    const woaiZeroWithSigner = woaiZeroContract.connect(signer);
    if (referrerAddress.length == 0) {
      woaiZeroWithSigner.mintWoai(numberOfTokens,{value:1*numberOfTokens});  
    } else {
      woaiZeroWithSigner.mintAndRefer(numberOfTokens,referrerAddress,{value:1*numberOfTokens}); 
      console.log(referrerAddress)
    }
  }
  // END


  renderZeroMint() {
    if (!this.state.loadedData) {
      this.getMintState()
      return (<div className='loaderTextContainer'><p className='loaderText'>Loading...</p></div>)
    }
    return (
      <div id="RenderZeroMintInner">
        {(!this.state.saleIsActive) ? <p className='mintError'><b>Minting has not begun yet.</b> <br/> Please check back on Sep 6 at 12:00 UTC</p> : <p></p>}
        {(this.state.totalSupply == 2500) ? <p className='mintError'><b>Collection has sold out.</b> <br/> Follow us on <a href="https://twitter.com/woai_io" target="_blank">Twitter</a> to stay up to date with new projects</p> : <p></p>}
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