import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('mounting')
  }
  render(){
    return(
      <div>
        <img
          onClick={this.update}
          src='/Icons/tak.png' />
        <br />
        {this.state.val}
      </div>
    );
  }
  componentDidMount(){
    console.log('mounted')
  }
}

export default App
