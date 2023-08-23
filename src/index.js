import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

// ReactDOM.render(<App />, document.querySelector('.root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
