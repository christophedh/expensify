import React from 'react';
import ReactDom from 'react-dom';
import {AppRouter} from './routers/AppRouter';
import './styles/style.scss';

ReactDom.render(<AppRouter />, document.getElementById('app'));

console.log('ok2');
