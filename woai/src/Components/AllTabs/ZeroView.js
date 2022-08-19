import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroView.css"

class ZeroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "0x0000000000000000000000000000000000000000",
      tokenView: ""
    };
  }

  //Handle reading image data 
  //BOUNTY (1 WOAI/Zero): Show the owner of the NFT rendered under the image. Some placeholder code exists. 
  //Missing functionality - owner is not read
  onSubmitGetOwner = async event => {
    event.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const woaiZeroContract = new ethers.Contract("0x6785a973A5d33921aB21F704de0a7bf09304D08a", WoaiZeroABI, provider);  //Testnet contract address
    const tokenOwner = woaiZeroContract.ownerOf(this.state.tokenView);
    console.log(woaiZeroContract.ownerOf(this.state.tokenView))

    this.setState({ owner : tokenOwner })
    console.log(this.state.owner, tokenOwner)
  }
  //END


  renderZeroView() {
    return (
      <div id="RenderZeroViewInner">
        <img src={'https://d2q426wzrt520c.cloudfront.net/zero/art/' + this.state.tokenView + '.png'}></img> {/* Cloudfront highly availability + SSL */}
        <p>WOAI/Zero/{this.state.tokenView}</p>
        { /* <p>Owner: {this.state.owner.substring(0,5)}...{this.state.owner.substring(38,42)} <a href={'https://etherscan.io/address/' + this.state.owner} >↗</a></p> */}
        <div>
          <form id="viewForm" onSubmit={this.onSubmitGetOwner}>
            <input value={this.state.tokenView} maxLength="4" onChange={event => this.setState({ tokenView: event.target.value})}></input>
            { /* <button type="submit">View</button> */}
          </form>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div id="RenderZeroView">
        {this.renderZeroView()}
      </div>
    )
  }
}

export default ZeroView;