// @flow weak

import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

export default function AlertDialog() {
  return (
    <Paper
      zDepth={8}
      style={{
        width: 300,
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location.
          This means sending anonymous location data
          to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button primary>Disagree</Button>
        <Button primary>Agree</Button>
      </DialogActions>
    </Paper>
  );
}
