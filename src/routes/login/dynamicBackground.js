import React, { Component } from 'react';
import loginStyle from './login.less';
import video from '../../assets/Winter-Grass.mp4'

class Background extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 1000,
    };
  }

  componentDidMount() {
    console.log(window.screen.availHeight)
    this.setState({
      height: window.screen.availHeight,
    })
  }

  render() {
    return (
      <section className={loginStyle['fullsize-video-bg']}>
      	<div className={loginStyle['video-viewport']}>
      		<video height={this.state.height} autoPlay muted loop>
      			<source src={video} type="video/mp4" />
      			<source src="http://www.coverr.co/s3/mp4/Winter-Grass.webm" type="video/webm" />
      		</video>
      	</div>
      </section>
    )
  }
}

export default Background;
