import React, { Component } from 'react';

import WoaiZeroABI from "./WoaiZeroABI.json"

import { ethers } from "ethers";
import './Metamask.css';

import Tabs from "./Components/TabComponent/Tabs";
import ZeroIntro from "./Components/ZeroIntro";

//BOUNTY (1 WOAI/Zero each, up to 5): Add support for other wallets.
//BOUNTY (3 WOAI/Zero): Prompt user to change to the right network and handle most common wallet connecting errors
//BOUNTY (5 WOAI/Zero): Create a frontend that respects the current style but for mobile users (i.e. it has to look pretty and have the same functionality as the current app but on mobile). 

class Metamask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true
    };
  }

  // Handle connecting Metamask
  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    const block = await provider.getBlockNumber();

    provider.on("block", (block) => {
      this.setState({ block })
    })

    const woaiZeroContract = new ethers.Contract("0x9E61574ceeb8a3dd924C9f1dAE5ca95Bb684Ab29", WoaiZeroABI, provider);  //Testnet contract address
    const woaiBalanceBigNumber = await woaiZeroContract.balanceOf(accounts[0]);
    const woaiBalance = ethers.utils.formatEther(woaiBalanceBigNumber) * 10**18;



    // View tab data
    //END

    // Mint tab data
    //END

    this.setState({ selectedAddress: accounts[0], balance: balanceInEther, woaiBalance })
  }
  //END


  // Handle infopanel hide/show
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  //END

  renderMetamask() {
    if (!this.state.selectedAddress) {
      return (
        <div>
          <h4>Welcome to the World of AI</h4>
          <p>To proceed, please connect your wallet</p>
          <br />
          <button className="connectMetamask" onClick={() => this.connectToMetamask()}>Connect Metamask</button>
          <br />
          <br />
          <br />
          <br />
          <div className="maxWidth250">
            <small>If you are not quite ready to do that, find us on other platforms below</small>
          </div>
        </div>
      )
    } else {
      return (
        <div>

          <div id="collectionIntros">
            <button className="collectionToggle" onClick={this.toggleHidden.bind(this)}>Zero</button>
            {!this.state.isHidden && <ZeroIntro />}
          </div>
          <Tabs />
          <div id="stats">
            <p>Welcome {this.state.selectedAddress.substring(0,5)}...{this.state.selectedAddress.substring(38,42)}! Block #{this.state.block}. ETH: {this.state.balance.substring(0,5)}.  WOAI: {this.state.woaiBalance}. <a href="https://docs.woai.io/woai-zero/faq" target="_blank">FAQ</a></p>
          </div>
          

        </div>
      );
    }
  }

  render() {
    return(
      <div id="mainContents">
        {this.renderMetamask()}
      </div>
    )
  }
}

export default Metamask;