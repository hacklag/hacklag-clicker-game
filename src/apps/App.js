import React from 'react';
import Radium from 'radium';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      timeOffset: 1000
    };
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
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
        flexDirection: 'column'
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
        border: '1px solid'
      },
      smallbat: {
        width: 32,
        height: 'auto',
        border: '0.5px solid'
      }
    };
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
    document.title = `${this.state.val} Hackbats`;
  }

  reset() {
    this.handleOpen();
  }

  render() {
    const {mainDiv, counter, smallbat, hackbatlogo} = this.getStyles();

    return (
      <div style={mainDiv}>
        <div style={counter} >
          <img
            style={smallbat}
            src={require('../assets/Icons/hackbat.png')} />
          {this.state.val}
        </div>
        <div>
          <button onClick={this.handleOpen}>Reset</button>
        </div>
        <div >
          <img
            style={hackbatlogo}
            onClick={this.update}
            src={require('../assets/Icons/hackbat.png')} />
        </div>
      </div>
    );
  }
}
export default Radium(App);
