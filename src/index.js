import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './p/P5Tool'

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();
