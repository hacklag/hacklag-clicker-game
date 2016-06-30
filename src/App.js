import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import ResetDialog from './apps/dialog.js';
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
        flexDirection: 'column',
      },
      hackbatlogo: {
        display: 'block',
        margin: 'auto',
        width: 322,
        border: '1px solid'
      },
      counter: {
        justifyContent: 'flex-start',
        width: 108,
        border: '1px solid',
      },
      smallbat: {
        width: 32,
        height: 'auto',
        border: '0.5px solid'
      }
    }
  }
  update(){
    this.setState({
      val: this.state.val + 1
    })
    document.title = `${this.state.val} Hackbats`;
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
    const {mainDiv, counter, smallbat, hackbatlogo} = this.getStyles();

    return(
      <div style={mainDiv}>
        <div style={counter} >
          <img
            style={smallbat}
            src='./src/assets/Icons/hackbat.png' />
          {this.state.val}
        </div>
        <div>
          <ResetDialog />
          <button onClick={ResetDialog.handleOpen}>Reset</button>
        </div>
        <div >
          <img
            style={hackbatlogo}
            onClick={this.update}
            src='./src/assets/Icons/hackbat.png' />
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.timer = setInterval(this.update, this.state.timeOffset);
  }

}
export default Radium(App);
