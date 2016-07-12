import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ResetDialog extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  constructor(){
    super();
    this.state = {
      open: false
    };
    ResetDialog.handleOpen = this.handleOpen.bind(this);
    ResetDialog.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    //console.log("yay");
    this.setState({
      open: true
    });
  };

  handleClose() {
    this.setState({
      open: false
    });
    //console.debug("close")
  };

  render() {
    const actiones = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={ResetDialog.handleClose}
      />,
      <FlatButton
        label="Reset"
        primary={true}
        keyboardFocused={true}
        onClick={App.reset}
      />,
    ];

    return (
      <div>
        <Dialog
          title="RESET!"
          actions={actiones}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to reset your progress?
        </Dialog>
      </div>
    );
  }
}

ResetDialog.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default ResetDialog
