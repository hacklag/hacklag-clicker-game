import React from 'react';
import ResetDialog from './dialog.js';
import Numeral from 'numeral';
import Shop from './shop.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cookie from 'react-cookie';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hackbatval: 0,
      timeOffset: 1000,
      addval: 1
    };
    this.update = this.update.bind(this);
    App.reset = this.reset.bind(this);
  }

  componentWillMount() {
    this.setState({hackbatval: 0});
    this.setState({hackbatval: cookie.load('hackbatval')});
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
        backgroundColor: 'rgb(255,255,255)',
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
        backgroundColor: 'rgba(204,204,204,0.75)',
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
      }
    };
  }

  reset() {
    this.setState({
      hackbatval: 0
    });
    ResetDialog.handleClose();
    cookie.remove('hackbatval', {path: '/'});
  }

  update() {
    this.setState({
      hackbatval: this.state.hackbatval + this.state.addval
    });
    document.title = `${Numeral(this.state.hackbatval).format('0,0')} Hackbats - Hackbat Clicker`;
  }

  load() {
    this.setState({hackbatval: cookie.load('hackbatval')});
  }

  save() {
    cookie.save('hackbatval', this.state.hackbatval, {path: '/'});
  }

  render() {
    const {button, mainDiv, counter, smallbat, hackbatlogo, leftpanel} = this.getStyles();

    return (
      <MuiThemeProvider muitheme={getMuiTheme()}>
        <div style={mainDiv}>
          <div style={counter} id="counter">
          <img
              style={smallbat}
              src={require('../assets/Icons/hackbat.png')} />
            {Numeral(this.state.hackbatval).format('0,0')}
          </div>
          <div style={leftpanel} id="leftpanel">
            <ResetDialog />
            <div style={button} onTouchTap={ResetDialog.handleOpen}>Reset</div>
            <div style={button} onClick={this.load.bind(this)}>Load</div>
            <div style={button} onClick={this.save.bind(this)}>Save</div>
          </div>
          <div id="hackbat">
            <img
              style={hackbatlogo}
              onClick={this.update}
              src={require('../assets/Icons/hackbat.png')} />
          </div>
          <Shop styles={this.getStyles()} />
          <div id="Saved">Saved!</div>
        </div>
      </MuiThemeProvider>
    );
  }
}
