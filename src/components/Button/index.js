import React from 'react';
import Button from 'material-ui/Button';

function CustomButton(props) {
  const {
    type = 'secondary',
    onClick,
    className = '',
    variant = 'raised',
    children,
  } = props;

  return (
    <Button
      color={type}
      variant={variant}
      onClick={onClick}
      className={`button ${type} ${className}`}
    >
      {children ? children : 'Button'}
    </Button>
  )
}

export default CustomButton;
