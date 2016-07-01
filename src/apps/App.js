import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import ResetDialog from './dialog.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Shop from './shop.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      val: 0,
      timeOffset: 1000
    };
    this.update = this.update.bind(this);
    App.reset = this.reset.bind(this);
  }

  getStyles() {
    return {
      mainDiv: {
        display: 'flex',
        flexDirection: 'column'
      },
      hackbatlogo: {
        display: 'block',
        margin: 'auto',
        width: 322,
        border: '1px solid'
      },
      counter: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: '18px',
        height: '28px',
        padding: '4px 4px 0px 4px',
        fontWeight: 'bold',
        fontFamily: 'Courier new.monospace',
        fontSize: '24px'
      },
      smallbat: {
        width: 32,
        height: 'auto',
      },
      reset: {
        marginTop: 37
      },
      shop: {
        border: '0.5px solid',
        position: 'absolute',
        right: 0,
        height: 600,
        width: 200,
        marginTop: -206
      },
      shoprow: {
        height: 74,
        width: 201,
        right: 0,
        borderBottom: '1px solid'
      }
    }
  }
  update(){
    this.setState({
      val: this.state.val + 1
    })
    document.title = `${this.state.val} Hackbats - Hackbat Clicker`;
  }

  componentWillMount(){
    console.log('mounting')
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  reset() {
    //console.debug("woop");
    this.setState({
      val: 0
    });
    ResetDialog.handleClose();
  }

  render(){
    const {mainDiv, counter, smallbat, hackbatlogo, reset, shop, shoprow} = this.getStyles();

    return(
      <div style={mainDiv}>
        <div style={counter}>
          <img
            style={smallbat}
            src={require('../assets/Icons/hackbat.png')} />
          {this.state.val}
        </div>
        <div style={reset}>
          <ResetDialog />
          <button onClick={ResetDialog.handleOpen}>Reset</button>
        </div>
        <div>
          <img
            style={hackbatlogo}
            onClick={this.update}
            src={require('../assets/Icons/hackbat.png')} />
        </div>
        <div style={shop}>
          <div style={shoprow}>
            Cursor
          </div>
          <div style={shoprow}>
            Cave
          </div>
          <div style={shoprow}>
            3
          </div>
          <div style={shoprow}>
            4
          </div>
          <div style={shoprow}>
            5
          </div>
          <div style={shoprow}>
            6
          </div>
          <div style={shoprow}>
            7
          </div>
          <div>
            8
          </div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    this.timer = setInterval(this.update, this.state.timeOffset);
  }

}
export default Radium(App);
