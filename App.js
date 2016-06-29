import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0};
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
        width: 321,
        border: '1px solid'
      },
      counter: {
        justifyContent: 'flex-start',
        width: 100,
        border: '1px solid',
      },
      smallbat: {
        //marginTop: 6,
        width: 30,
        height: 'auto',
        border: '0.5px solid'
      }
  }

  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('mounting')
  }
  render(){
    const styles = this.getStyles();

    return(
      <div style={styles.mainDiv}>
        <div style={styles.counter} >
          <img
            style={styles.smallbat}
            src='/Icons/hackbat.png' />
          {this.state.val}
        </div>
        <div >
          <img
            style={styles.hackbatlogo}
            onClick={this.update}
            src='/Icons/hackbat.png' />
        </div>
      </div>
    );
  }
  componentDidMount(){
    console.log('mounted')
  }
}

export default App
