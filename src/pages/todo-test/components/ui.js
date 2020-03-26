import React from 'react';
import PropTypes from 'prop-types'

function TodoUI (props, context) {
  console.log(context);
  const { name } = context;
  return <p>{name}</p>;
}

TodoUI.contextProps = {
  name: PropTypes.string    
};

export default TodoUI;