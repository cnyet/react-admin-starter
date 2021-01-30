import React, { useState, useEffect } from 'react';
import './style.scss';

function BaseForm () {
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div className="baseForm-container">
      <h1>You clicked {count} times;</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </div>
  );
}

export default BaseForm;