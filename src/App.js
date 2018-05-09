import React from 'react';
import Button from './components/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from "./withRoot";
import './App.css';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Test Popup</DialogTitle>
          <DialogContent>
            <DialogContentText>Hello World</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button type="flat" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Showcase App
        </Typography>
        <Button type="primary" onClick={this.handleClick}>
          Primary
        </Button>
        <Button type="secondary" onClick={this.handleClick}>
          Secondary
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
