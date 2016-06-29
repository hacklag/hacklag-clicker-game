import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      val: 0,
      timeOffset: 500
    };
    this.update = this.update.bind(this);
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
  }

  componentWillMount(){
    console.log('mounting')
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    const {mainDiv, counter, smallbat, hackbatlogo} = this.getStyles();

    return(
      <div style={mainDiv}>
        <div style={counter} >
          <img
            style={smallbat}
            src='/Icons/hackbat.png' />
          {this.state.val}
        </div>
        <div >
          <img
            style={hackbatlogo}
            onClick={this.update}
            src='/Icons/hackbat.png' />
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.timer = setInterval(this.update, this.state.timeOffset);
  }
}

export default Radium(App);
