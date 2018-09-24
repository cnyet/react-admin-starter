import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import App from './views/app/App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();