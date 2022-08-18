import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroView.css"

class ZeroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageToShow: "placeholder",
      owner: "0xa7c7aaD22974d81EBd5B7C4B06EEA3911d33e2A9",
      tokenId: "1234"
    };
  }

  //Handle reading image data
  onSubmitSetGeneratorValue = async event => {
    event.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const woaiZeroContract = new ethers.Contract("0x6785a973A5d33921aB21F704de0a7bf09304D08a", WoaiZeroABI, provider);  //Testnet contract address

    const woaiZeroWithSigner = woaiZeroContract.connect(signer);
    console.log(this.state.tokenId, this.state.generatorValue)
    await woaiZeroWithSigner.setGeneratorValue(this.state.tokenId, this.state.generatorValue);
  }
  //END


  renderZeroView() {
    return (
      <div id="RenderZeroViewInner">
        <table>
          <tr id="trt">
            <img src={'https://woai.io/nft-data/zero/art/' + this.state.imageToShow + '.png'}></img>
          </tr>
          <tr id="trb">
            <p>WOAI/Zero/{this.state.tokenId}</p>
            <p>Owner: {this.state.owner.substring(0,5)}...{this.state.owner.substring(38,42)}</p>
            <input id="inID" value={this.state.tokenId} maxLength="4" onChange={event => this.setState({ tokenId: event.target.value})}></input>
          </tr>
        </table>
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