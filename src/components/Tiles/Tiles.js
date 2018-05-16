import React from 'react';
import './Tiles.css';

const Tile = (props) => {
  const { backgroundColor } = props;
  const tileStyles = {
    color: backgroundColor,
    backgroundColor,
  }
  return(
    <div className="tile-style" style={tileStyles}>
      <span className="tile-span-style">
        {props.children}
      </span>
    </div>
  );
};
export default Tile;
