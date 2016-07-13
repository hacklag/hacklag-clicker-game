import React from 'react';

class Shop extends React.Component {
  getStyles() {
    return {
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
    };
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
    );
  }
}

export default Shop;
