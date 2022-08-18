import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroGenerate.css"

class ZeroGenerate extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // Handle setting generator value
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

  // Handle paused generator
  //END

  // Handle already generated
  //END

  // Handle a "success message"
  //END


  renderZeroGenerate() {
    return (
      <div id="RenderZeroGenerateInner">
        <form onSubmit={this.onSubmitSetGeneratorValue}>
          <h4>Set Generator Value</h4>
          <br />
          <p>Set the value used to generate your NFT. Please read through the resources before committing. You can only do this once and there is no undoing. Godspeed.</p>
          <div className='innerForm'>
            <div>
              <label>Token ID</label>
              <input id="inID" value={this.state.tokenId} maxLength="4" onChange={event => this.setState({ tokenId: event.target.value})}></input>
            </div>
            <div>
              <label>Generator value</label>
              <textarea id="inGV" maxLength="100" value={this.state.generatorValue} onChange={event => this.setState({ generatorValue: event.target.value })} />
            </div>
          </div>
          <div id="buttonContainer">
            <button id="setButton">Set value</button>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return(
      <div id="RenderZeroGenerate">
        {this.renderZeroGenerate()}
      </div>
    )
  }
}

export default ZeroGenerate;