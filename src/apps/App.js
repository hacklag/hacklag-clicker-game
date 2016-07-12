import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import ResetDialog from './dialog.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Numeral from 'numeral';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import Shop from './shop.js';

class App extends React.Component{
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  constructor(){
    super();
    this.state = {
      val: 0,
      timeOffset: 1000
    };
    this.update = this.update.bind(this);
    App.reset = this.reset.bind(this);
  }

  update(){
    this.setState({
      val: this.state.val + 1
    })
    document.title = `${Numeral(this.state.val).format('0,0')} Hackbats - Hackbat Clicker`;
  }

  componentWillMount(){
    console.log('mounting')
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  reset() {
    this.setState({
      val: 0
    });
    ResetDialog.handleClose();
  }

  render(){
    const {button, shopbat, mainDiv, counter, smallbat, hackbatlogo, leftpanel, shop, shoprow, hackbatdiv, shopicon, shophead} = this.getStyles();

    return(
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
          <div id='version'>running v.0.1</div>
        </div>
        <div style={hackbatdiv}>
          <img
            style={hackbatlogo}
            onClick={this.update}
            src={require('../assets/Icons/hackbat.png')} />
        </div>
        <div style={shop}>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              Cursor - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              Cave
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              3
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              4
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              5
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              6
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              7
            </div>
          </div>
          <div style={shoprow}>
            <div>
              <img
                style={shopicon}
                src={require('../assets/Icons/cursor.svg')} />
            </div>
            <div style={shophead}>
              8
            </div>
          </div>
        </div>
      </div>
    );
  };
  getStyles() {
    return {
      mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto',
      },
      hackbatdiv: {
        border: '1px solid',
        margin: '100px auto'
      },
      hackbatlogo: {
        display: 'block',
        width: 240,
        cursor: 'pointer'
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
        height: 'auto',
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
    }
  }

  componentDidMount(){
    this.timer = setInterval(this.update, this.state.timeOffset);
  }

}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(App);
