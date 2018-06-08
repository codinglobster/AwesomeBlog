import React, { Component } from 'react';
import 'particles.js';
import particlesConf from './particle.json';
import loginStyle from './login.less';

class Background extends Component {

  componentDidMount() {
    console.log(particlesConf)
    window.particlesJS('particles-js', particlesConf);
  }

  render() {
    return (
      <>
        <div className={loginStyle.mask}></div>
        <div id="particles-js" style={{width: '100%', height: '100%'}}></div>
      </>
    )
  }
}

export default Background;
