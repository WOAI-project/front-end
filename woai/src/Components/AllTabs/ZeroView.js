import React, { Component } from 'react';
import WoaiZeroABI from "../../WoaiZeroABI.json"
import { ethers } from "ethers";

import "./ZeroView.css"

class ZeroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageToShow: "https://openailabsprodscus.blob.core.windows.net/private/user-yPbuEo5RjcYzHvP6cVTSpBsT/generations/generation-B7b1Ugjr8cQ0EKE3N2fIyrKZ/image.webp?st=2022-08-17T21%3A59%3A14Z&se=2022-08-17T23%3A57%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-08-17T01%3A15%3A12Z&ske=2022-08-24T01%3A15%3A12Z&sks=b&skv=2021-08-06&sig=BnWgMOjN%2BwDYB3/roUeU5l7T7dB4Z6LicKn9MmpI3Q4%3D"
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
        <form onSubmit={this.onSubmitSetGeneratorValue}>
          <div id="cols">
            <div id="leftDiv">
              <div className='subs'>
                <p>Owner:</p>
                <p>0xabc...123</p>
              </div>
            </div>
            <div id="centreDiv">
              <img src={this.state.imageToShow}></img>
              <div className='subs'>
                <p>WOAI/Zero/1234</p>
              </div>
            </div>
            <div id="rightDiv">
              <div className='subs'>
                <input id="inID" value={this.state.tokenId} maxLength="4" title="Token ID" onChange={event => this.setState({ tokenId: event.target.value})}></input>
                <button>Show</button>
                <button>Random</button>
              </div>
            </div>
          </div>
        </form>
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