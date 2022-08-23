import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json";
import { ethers } from "ethers";

import "./ZeroGenerate.css";


class ZeroGenerate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedData : false
    };
  }

  // Handle setting generator value
  onSubmitSetGeneratorValue = async event => {
    event.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const woaiZeroContract = new ethers.Contract("0x9E61574ceeb8a3dd924C9f1dAE5ca95Bb684Ab29", WoaiZeroABI, provider);  //Testnet contract address

    const woaiZeroWithSigner = woaiZeroContract.connect(signer);
    console.log(this.state.tokenId, this.state.generatorValue)
    await woaiZeroWithSigner.setGeneratorValue(this.state.tokenId, this.state.generatorValue);
  }
  //END

  // Handle paused generator
  async getPauseState() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const woaiZeroContract = new ethers.Contract("0x9E61574ceeb8a3dd924C9f1dAE5ca95Bb684Ab29", WoaiZeroABI, provider);  //Testnet contract address
    const generatorIsPaused = await woaiZeroContract.generationPaused();
    const generatorIsManuallyPaused = await woaiZeroContract.isManuallyPaused();
    this.setState({ generatorIsPaused : generatorIsPaused, generatorIsManuallyPaused : generatorIsManuallyPaused })
    console.log(this.state.generatorIsManuallyPaused, this.state.generatorIsPaused, "called2");
    this.setState({ loadedData : true })
  }
  //END

  // Handle already generated
    //BOUNTY (1 WOAI/Zero): Show an error message if the WOAI/Zero has already been assigned a generatorValue
  //END

  // Handle a "success message" and most common errors
  //BOUNTY (3 WOAI/Zero): Show success & error messages on the front-end
  //END


  renderZeroGenerate() {
    if (!this.state.loadedData) {
      this.getPauseState()
      return (<div className='loaderTextContainer'><p className='loaderText'>Loading...</p></div>)
    }
    return (
      <div id="RenderZeroGenerateInner">
        <form onSubmit={this.onSubmitSetGeneratorValue}>
          {(this.state.generatorIsPaused && this.state.generatorIsManuallyPaused) ? <p className='generatorPauseText'>The Generator is currently paused. Follow our social media for updates.</p> : <p></p>}
          {(this.state.generatorIsPaused && !this.state.generatorIsManuallyPaused) ? <p className='generatorPauseText'>The daily generator limit has been reached. Check back later or read our <a href="https://docs.woai.io/woai-zero/generate" target="blank">docs</a>.</p> : <p></p>}
          {(!this.state.generatorIsPaused && !this.state.generatorIsManuallyPaused) ? <p>Set the value used to generate your NFT. Please read through the resources before committing. You can only do this once and there is no undoing. Godspeed. <br/><a className='textLinkGenerator' href="https://docs.woai.io/woai-zero/generate" target="_blank">Open user guide.</a></p> : <p></p>}
          <br />
          <div className='innerForm'>
            <div>
              <label>Token ID</label>
              <input id="inID" value={this.state.tokenId} maxLength="4" onChange={event => this.setState({ tokenId: event.target.value})}></input>
            </div>
            <div>
              <label>Generator value</label>
              <textarea id="inGV" maxLength="256" value={this.state.generatorValue} onChange={event => this.setState({ generatorValue: event.target.value })} />
            </div>
            <div id="divTerms">
              <label id="laTerms">I accept <a href="http://woai-data.woai.io/terms.html" target="_blank">WOAI terms</a> and <a href="https://labs.openai.com/policies/content-policy" target="_blank">OpenAI content policy</a></label>
              <input type="checkbox" id="inTerms" required="required" />
            </div>
          </div>
          <div id="buttonContainer">
            <button id="setButton" className={(this.state.generatorIsPaused) ? 'buttonDisabled' : ''}>Set value</button>
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