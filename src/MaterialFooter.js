import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    height: '56px',
    width: '100%',
    backgroundColor: 'lightgray'
  },
  paper: {
    textAlign: 'center',
    display: 'inline-block'
  }
};

const MaterialFooter = () => (
  <div className="Material-Footer" style={styles.root}>
    <Paper style={styles.paper} zDepth={2} />
  </div>
);
  
  export default MaterialFooter;