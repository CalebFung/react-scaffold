import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.lastY = 0;
    this.ticking = false;
    this.state = {
      overlay: true,
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.iframeContainerTop = this.iframeContainer.getBoundingClientRect().top - 48 + window.pageYOffset;
    this.iframeContainerBottom = this.iframeContainerTop + 600 - 32;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleOverlay = () => {
    this.setState({ overlay: !this.state.overlay });

  };

  handleScroll = () => {
    this.lastY = window.scrollY;
	  if(!this.ticking) {
      requestAnimationFrame(this.update);
    }
    this.ticking = true;
  };

  update = () => {
    this.ticking = false;
    this.currentY = this.lastY;
    if (this.currentY >= this.iframeContainerTop && this.currentY <= this.iframeContainerBottom) {
      if (!this.state.sticky) this.setState({ sticky: true });
    } else {
      if (this.state.sticky) this.setState({ sticky: false });
    }
  }

  handleIframeLoad = () => {
    
  };

  render() {
    return (
      <div style={{position: 'relative', width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={{position: 'fixed', backgroundColor: '#a8c4c4', height: 800, paddingTop: 250, width: '100%', textAlign: 'center'}}>
          <img style={{width: 200, height: 200, borderRadius: 25}} src={process.env.PUBLIC_URL + '/logo.png'} alt="banner" />
          <h1 style={{fontSize: 64}}>Title</h1>
        </div>
        <div style={{width: '100%', position: 'absolute', top: 800, backgroundColor: '#fff'}}>
          <h2 style={{fontSize: 32, color: '#00695c'}}>'Sup, 🅱?</h2>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>


          <div ref={el => this.iframeContainer = el} style={{height: 600, width: '100%', background: '#efefef', position: 'relative', display: 'flex', justifyContent: 'center'}}>
            <div style={{position: this.state.sticky ? 'fixed' : 'absolute', left: 0, top: this.state.sticky ? 48 : 0, height: 32, width: '100%', paddingLeft: this.state.sticky ? 240 : 0, backgroundColor: '#565656', color: '#ffffff', fontSize: 18, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, cursor: 'pointer', userSelect: 'none'}}
              onClick={this.toggleOverlay}>
              Tap to toggle 360 video interaction
            </div>
            {this.state.overlay && <div style={{height: 600, width: '100%', backgroundColor: 'rgba(71, 71, 71, 0.4)', top: 0, position: 'absolute'}}></div>}
            <iframe src={process.env.PUBLIC_URL +  '/react360/index.html'} height="600" width="100%" frameBorder="0" title="360-demo" 
              onLoad={this.handleIframeLoad} />
          </div>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
        </div>
      </div>
    );
  }
}

export default Home;
