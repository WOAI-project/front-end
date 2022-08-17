import React, { Component } from 'react';

import WoaiZeroABI from "./WoaiZeroABI.json"

import { ethers } from "ethers";
import './Metamask.css';

import Tabs from "./Components/TabComponent/Tabs";
import ZeroIntro from "./Components/ZeroIntro";

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

    const woaiZeroContract = new ethers.Contract("0x6785a973A5d33921aB21F704de0a7bf09304D08a", WoaiZeroABI, provider);  //Testnet contract address
    const woaiBalanceBigNumber = await woaiZeroContract.balanceOf(accounts[0]);
    const woaiBalance = ethers.utils.formatEther(woaiBalanceBigNumber) * 10**18;

    this.setState({ selectedAddress: accounts[0], balance: balanceInEther, block, woaiBalance })
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
          <div class="maxWidth250">
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
            <p>Welcome {this.state.selectedAddress.substring(0,5)}...{this.state.selectedAddress.substring(38,42)}! Block #{this.state.block}. ETH: {this.state.balance.substring(0,5)}.  WOAI: {this.state.woaiBalance}.</p>
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