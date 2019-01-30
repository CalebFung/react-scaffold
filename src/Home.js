import React, { Component } from 'react';


class Home extends Component {
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

          <div style={{height: 400, background: '#efefef'}}>
            
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
