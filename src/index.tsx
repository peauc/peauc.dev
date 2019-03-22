import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

