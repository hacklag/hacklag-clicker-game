import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import App from './App';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ResetDialog extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  /*state = {
    open: false
  };*/

  handleOpen() {
    console.log("yay");
    this.setState({open: true});
  };

  handleClose() {
    console.log("nooo")
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Reset"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.reset}
      />,
    ];

    return (
      <div>
        //<RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="RESET!"
          actions={actions}
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
export default ResetDialog
