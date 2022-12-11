import './assets/styles/index.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext/AuthContext';
import { Public } from './apps/Public';
import { Private } from './apps/Private';

function App() {
	const { token } = useContext(AuthContext);

	if (token) {
		return <Private />;
	}
	return <Public />;
}

export default App;
