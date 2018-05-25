import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list'
import store from './store'

ReactDOM.render(<Provider store={store}><CheeseList /></Provider>, document.getElementById('root'));
registerServiceWorker();
