import React from 'react';
import Radium from 'radium';
import ResetDialog from './dialog.js';
import Numeral from 'numeral';
import Shop from './shop.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      timeOffset: 1000
    };
    this.update = this.update.bind(this);
    App.reset = this.reset.bind(this);
  }

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    this.timer = setInterval(this.update, this.state.timeOffset);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getStyles() {
    return {
      mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto'
      },
      hackbatlogo: {
        display: 'block',
        width: 240,
        cursor: 'pointer',
        margin: '100px auto'
      },
      counter: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: '18px',
        height: '24px',
        padding: '4px 8px 4px 4px',
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 10px'
      },
      smallbat: {
        width: 32,
        height: 'auto'
      },
      leftpanel: {
        position: 'absolute',
        top: '45px',
        padding: '2px 6px',
        margin: '10px 10px',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: '8px',
        lineHeight: '125%',
        zIndex: '100',
        fontSize: '12px',
        fontWeight: 'bold'
      },
      button: {
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: '14px'
      },
      shop: {
        border: '0.5px solid',
        position: 'absolute',
        right: 0,
        height: 536,
        width: 320,
        top: 0
      },
      shoprow: {
        height: 64,
        width: 'auto',
        right: 0,
        borderBottom: '1px solid',
        borderTop: '2px solid',
        backgroundColor: '#eee'
      },
      shopicon: {
        width: '60px',
        position: 'absolute',
        borderRight: '1px solid'
      },
      shophead: {
        fontWeight: 'bold',
        marginLeft: '64px',
        marginTop: '1px'
      },
      shopbat: {
        width: '20px'
      }
    };
  }

  reset() {
    this.setState({
      val: 0
    });
    ResetDialog.handleClose();
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
    document.title = `${Numeral(this.state.val).format('0,0')} Hackbats - Hackbat Clicker`;
  }

  render() {
    const {button, mainDiv, counter, smallbat, hackbatlogo,
      leftpanel, shop, shopbat, shophead, shopicon, shoprow} = this.getStyles();

    return (
      <div style={mainDiv}>
        <div style={counter}>
          <img
            style={smallbat}
            src={require('../assets/Icons/hackbat.png')} />
          {Numeral(this.state.val).format('0,0')}
        </div>
        <div style={leftpanel}>
          <ResetDialog />
          <div id="hps">hackbats/second : 1</div>
          <br/>
          <div style={button} onClick={ResetDialog.handleOpen}>Reset</div>
          <br/>
          <div id="version">running v.0.1</div>
        </div>
        <div>
          <img
            style={hackbatlogo}
            onClick={this.update}
            src={require('../assets/Icons/hackbat.png')} />
        </div>
        <Shop styles={this.getStyles()} />
      </div>
    );
  }
}

export default Radium(App);
