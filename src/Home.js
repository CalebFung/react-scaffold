import React, { Component } from 'react';

class Home extends Component {

  state = {
    pan: false,
  };

  componentWillMount() {
    
  }

  componentWillUnmount() {

  }

  handleKeyDown = (e) => {
    e.preventDefault();

  };

  handleIframeLoad = () => {
    console.log('iframe done');
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

          <div style={{height: 600, background: '#efefef', position: 'relative'}}>
            {/* <div style={{height: 600, width: '100%', backgroundColor: 'rgba(71, 71, 71, 0.65)', color: '#fff', fontSize: 24, display: 'flex', justifyContent: 'center', paddingTop: 250, position: 'absolute'}}>Hold ctrl + scroll to pan around</div> */}
            <iframe style={{pointerEvents: this.state.pan ? 'auto' : 'none'}} src={process.env.PUBLIC_URL +  '/react360/index.html'} height="600" width="100%" frameBorder="0" title="360-demo" onLoad={this.handleIframeLoad} />
          </div>   
        </div>
      </div>
    );
  }
}

export default Home;
