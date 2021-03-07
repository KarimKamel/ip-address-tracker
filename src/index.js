import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	transitions,
	positions,
	AlertType,
	Provider as AlertProvider,
	types,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import reportWebVitals from './reportWebVitals';
const options = {};
// const AlertTemplate = ({ style, options, message, close }) => (
// 	<div style={style}>
// 		{options.type === 'info' && '!'}
// 		{options.type === 'success' && ':)'}
// 		{options.type === 'error' && ':('}
// 		{message}
// 		<button onClick={close}>X</button>
// 	</div>
// );

ReactDOM.render(
	<React.StrictMode>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
