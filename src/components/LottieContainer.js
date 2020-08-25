import React, { Component } from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../img/Carmela.json";

class LottieContainer extends Component {
  render() {
    return (
      <Lottie
        loop={false}
        animationData={lottieJson}
        play
        style={{ width: 500, height: 500 }}
      />
    );
  }
}

export default LottieContainer;
