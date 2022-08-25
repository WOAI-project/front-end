import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroView.css"

class ZeroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenOwner: "Error",
      tokenGeneratorValue: "Not set",
      tokenView: Math.floor(Math.random() * (2500)),
      loadedData: false
    };
  }


  // Handle image 404
  defaultErrorImage(ev){
    ev.target.src = "https://d2q426wzrt520c.cloudfront.net/zero/art/placeholder.png"
  }
  //END

  // Handle reading image data 
  getImageData = async event => {
    this.setState({ loadedData : true })
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const woaiZeroContract = new ethers.Contract("0x32fa352d905C2dacf3B79C4f9E123e7F93f2187B", WoaiZeroABI, provider);  //Testnet contract address
    const tokenOwner = await woaiZeroContract.ownerOf(this.state.tokenView);
    const tokenGeneratorValue = await woaiZeroContract.generatorValue(this.state.tokenView);
    this.setState({ tokenOwner : tokenOwner, tokenGeneratorValue : tokenGeneratorValue })
    console.log(this.state.tokenOwner, this.state.tokenGeneratorValue, "called2");
  }
  //END


  renderZeroView() {
    if (!this.state.loadedData) {
      this.getImageData()
      return (<div className='loaderTextContainer'><p className='loaderText'>Loading...</p></div>)
    }
    return (
      <div id="RenderZeroViewInner">
        <img id="imageData" onError={this.defaultErrorImage} onChange={this.getImageData} src={'https://d2q426wzrt520c.cloudfront.net/zero/art/' + this.state.tokenView + '.png'}></img> {/* Cloudfront highly availability + SSL */}
        <div>
          <form id="viewForm" onChange={this.getImageData}>
            <span><label>WOAI/Zero/</label><input value={this.state.tokenView} maxLength="4" onChange={event => this.setState({ tokenView: event.target.value})}></input></span>
          </form>
        </div>
        <div id="generatorWrapper">
          { /* <p id="generatorLabel">Generator value:</p> */ /* removed as it took away precious real estate */ }
          <p id="generatorData">{this.state.tokenGeneratorValue}</p>
        </div>
        <div id="cornerOwner">
          <p id="cornerOwnerData"><a href={'https://etherscan.io/address/' + this.state.tokenOwner} target="_blank" id="cornerOwnerEtherscan">View owner ↗</a></p>
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