import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  primary: {
    background: 'rgb(66, 240, 98)',
    borderRadius: 3,
    border: 0,
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 20,
    textTransform: 'capitalize',
    padding: '8px 42px',
    boxShadow: '0 10px 15px rgba(66, 240, 98, 0.25)',
    '&:hover': {
      background: 'rgb(52, 198, 79)'
    },
    '&:active': {
      boxShadow: '0 5px 10px rgba(66, 240, 98, 0.2)',
    }
  },
  secondary: {
    background: 'transparent',
    borderRadius: 3,
    border: '2px solid #42F062',
    fontSize: 20,
    textTransform: 'capitalize',
    padding: '6px 40px',
  },
  default: {
    textTransform: 'capitalize',
  }
};

function CustomButton(props) {
  if (props.type === 'primary' || !props.type) {
    return (
      <Button
        variant="raised"
        color="secondary"
        onClick={props.onClick}
        className={props.classes.primary+' '+props.className}
      >
        {props.children ? props.children : 'Button'}
      </Button>
    );
  }
  else if (props.type === 'secondary') {
    return (
      <Button
        color="secondary"
        onClick={props.onClick}
        className={props.classes.secondary+' '+props.className}
      >
        {props.children ? props.children : 'Button'}
      </Button>
    );
  }
  else if (props.type === 'flat') {
    return (
      <Button
        color="primary"
        className={props.classes.default+' '+props.className}
        onClick={props.onClick}
      >
        {props.children ? props.children : 'Button'}
      </Button>
    )
  }
}

export default withStyles(styles)(CustomButton);