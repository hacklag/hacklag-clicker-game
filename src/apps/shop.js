import React from 'react';

class Shop extends React.Component {
  render() {
    const {styles} = this.props;

    return (
      <div style={styles.shop}>
        <div style={styles.shoprow} onClick={this.cursor}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            Cursor - <img style={styles.shopbat} src={require('../assets/Icons/hackbat.png')} />
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            Cave
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            3
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            4
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            5
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            6
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            7
          </div>
        </div>
        <div style={styles.shoprow}>
          <div>
            <img
              style={styles.shopicon}
              src={require('../assets/Icons/cursor.svg')} />
          </div>
          <div style={styles.shophead}>
            8
          </div>
        </div>
      </div>
    );
  }
}

Shop.propTypes = {
  styles: React.PropTypes.any
};

export default Shop;
