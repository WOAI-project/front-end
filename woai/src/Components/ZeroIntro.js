import React, { Component } from 'react';

import "./ZeroIntro.css"

function ZeroIntro() {
    return (
      <div className="rebderZeroIntroInner">
        <p>WOAI/Zero is a collection of 2500 NFTs that combine AI art generation and the ingenuity of humans to create the most unlikely NFT collection to date.</p>
        <p>WOAI utilises OpenAI's DALL•E 2 image generator to create realistic images and art from natural language. DALL•E 2 learns continuously and two images generated with the same input at different times may lead to wildly different outcomes.</p>
        <p>Owners of WOAI/Zero can choose to describe anything, subject to a few rules, and have DALL•E 2 turn it into an NFT. We highly recommend WOAI/Zero owners to read about DALL•E 2 and its technology before generating an image.</p>
        <p>Anyone can mint up to 10 WOAI/Zero's at a time for 0.05 ETH each. After minting, the NFT owners can take their time to think about <i>what</i> to generate into an image. The final product will be available within 24 hours.</p>
        <span>
            <a href="https://openai.com/dall-e-2/" target="_blank">Read more about DALL-E 2</a> • <a href="https://openai.com/blog/dall-e/" target="_blank">Tips for wording</a> • <a href="https://arxiv.org/abs/2102.12092" target="_blank">Research</a>
        </span>
      </div>
    );
  }

export default ZeroIntro;