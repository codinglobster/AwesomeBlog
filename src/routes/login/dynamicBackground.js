import React, { Component } from 'react';
import loginStyle from './login.less';
import video from '../../assets/Winter-Grass.mp4'

class Background extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
    };
  }

  componentDidMount() {
    console.log(window.screen.availHeight)
    this.setState({
      width: window.screen.availWidth,
    })
  }

  render() {
    return (
      <section className={loginStyle['fullsize-video-bg']}>
      	<div className={loginStyle['video-viewport']}>
      		<video style={{width: this.state.width+'px'}} autoPlay muted loop>
      			<source src={video} type="video/mp4" />
      			<source src="http://www.coverr.co/s3/mp4/Winter-Grass.webm" type="video/webm" />
      		</video>
      	</div>
      </section>
    )
  }
}

export default Background;
