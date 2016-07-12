import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './apps/App';
import ResetDialog from './apps/dialog.js';
//import FlatButton from 'material-ui/FlatButton';
//import SynLog from './apps/synlog/apiconnect.js';

ReactDOM.render(<App />, document.getElementById('app'))
