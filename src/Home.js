import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Home extends Component {

  state = {
    overlay: true,
  };

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  toggleOverlay = () => {
    this.setState({ overlay: !this.state.overlay });
  };

  handleIframeLoad = () => {
    
  };

  render() {
    return (
      <StickyContainer style={{height: 5000, width: '100%', backgroundColor: 'lightgray'}}>
          <Sticky topOffset={100}>
            {({ style }) => (
              <div style={{background:'#000', height: 32, width: '100%'}}></div>
            )}
          </Sticky>
        </StickyContainer>
      // <div style={{position: 'relative', width: '100%', display: 'flex', justifyContent: 'center'}} tabIndex="0">
        
        
        
      //   <div style={{position: 'fixed', backgroundColor: '#a8c4c4', height: 800, paddingTop: 250, width: '100%', textAlign: 'center'}}>
      //     <img style={{width: 200, height: 200, borderRadius: 25}} src={process.env.PUBLIC_URL + '/logo.png'} alt="banner" />
      //     <h1 style={{fontSize: 64}}>Title</h1>
      //   </div>
      //   <div style={{width: '100%', position: 'absolute', top: 800, backgroundColor: '#fff'}}>
      //     <h2 style={{fontSize: 32, color: '#00695c'}}>'Sup, 🅱?</h2>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>

      //     <div style={{height: 600, background: '#efefef', position: 'relative'}}>
      //       <div style={{height: 36, width: '100%', backgroundColor: 'rgba(71, 71, 71, 0.65)', color: '#fff', top: 0, fontSize: 18, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', cursor: 'pointer', userSelect: 'none'}} onClick={this.toggleOverlay}>Tap here to toggle 360 video interaction</div>
      //       {this.state.overlay && <div style={{height: 564, width: '100%', backgroundColor: 'rgba(71, 71, 71, 0.4)', top: 36, position: 'absolute'}}></div>}
      //       <iframe src={process.env.PUBLIC_URL +  '/react360/index.html'} height="600" width="100%" frameBorder="0" title="360-demo" 
      //         onLoad={this.handleIframeLoad} />
      //     </div>

          

      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //     asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
      //   </div>
      // </div>
    );
  }
}

export default Home;
