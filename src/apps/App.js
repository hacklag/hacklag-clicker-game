import React from 'react';
import ResetDialog from './dialog.js';
import Numeral from 'numeral';
import Shop from './shop.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
    const {button, mainDiv, counter, smallbat, hackbatlogo, leftpanel} = this.getStyles();

    return (
      <MuiThemeProvider muitheme={getMuiTheme()}>
        <div style={mainDiv}>
          <div style={counter}>
            <img
              style={smallbat}
              src={require('../assets/Icons/hackbat.png')} />
            {Numeral(this.state.val).format('0,0')}
          </div>
          <div style={leftpanel}>
            <ResetDialog />
            <div style={button} onTouchTap={ResetDialog.handleOpen}>Reset</div>
          </div>
          <div>
            <img
              style={hackbatlogo}
              onClick={this.update}
              src={require('../assets/Icons/hackbat.png')} />
          </div>
          <Shop styles={this.getStyles()} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
