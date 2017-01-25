import { render } from 'react-dom';
import React from 'react'
import App from './containers/App';
import routes from './containers';

// copy files
import index from 'file-loader?name=./index.html!root/views/index.html';

render( <App slash={'slash'}/>, document.getElementById('root'));
