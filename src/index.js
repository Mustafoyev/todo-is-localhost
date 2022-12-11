import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './context/AuthContext/AuthContext';
import { TodoProvider } from './context/TodoContext/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TodoProvider>
					<App />
				</TodoProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
