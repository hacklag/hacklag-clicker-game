import React from 'react';

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      cursorcount: 0
    };
    this.cursor = this.cursor.bind(this);
  }
  getStyles() {
    return {
      shop: {
        border: '0.5px solid',
        position: 'absolute',
        right: 0,
        top: 0,
        height: 536,
        width: 320
      },
      shoprow: {
        height: 65,
        width: 'auto',
        borderBottom: '1px solid',
        borderTop: '2px solid',
        backgroundColor: '#eee',
        cursor: 'pointer'
      },
      shopicon: {
        width: '60px',
        borderRight: '1px solid'
      },
      shophead: {
        fontWeight: 'bold',
        marginLeft: '64px',
        marginTop: '-64px'
      },
      shopbat: {
        width: '20px'
      }
    };
  }

  cursor() {
    this.setState({
      cursorcount: this.state.cursorcount + 1,
      addval: this.state.addval + 0.2 * this.state.cursorcount
    });
  }

  render() {
    const {shop, shoprow, shopicon, shopbat, shophead} = this.getStyles();

    return (
      <div style={shop}>
        <div style={shoprow} onClick={this.cursor}>
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
            Cave - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            3 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            4 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            5 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            6 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            7 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={shoprow}>
          <div>
            <img
              style={shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={shophead}>
            8 - <img style={shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
