import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import App from './App';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ResetDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    ResetDialog.handleOpen = this.handleOpen.bind(this);
    ResetDialog.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={ResetDialog.handleClose}
      />,
      <FlatButton
        label="Reset"
        primary={true}
        keyboardFocused={true}
        onTouchTap={App.reset}
      />
    ];

    return (
      <div>
        <Dialog
          title="RESET!"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={ResetDialog.handleClose} >
          Are you sure you want to reset your progress?
        </Dialog>
      </div>
    );
  }
}

export default ResetDialog;
