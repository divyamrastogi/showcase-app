import React from 'react';
import Button from 'material-ui/Button';
import './Button.css';

function CustomButton(props) {
  const {
    type = 'primary',
    onClick,
    className = '',
    variant = 'flat',
    children,
  } = props;

  return (
    <Button
      color={type}
      variant={variant}
      onClick={onClick}
      className={`button ${type} ${className}`}  
    >
        { children ? children : 'Button' }
    </Button>
  )
}

export default CustomButton;