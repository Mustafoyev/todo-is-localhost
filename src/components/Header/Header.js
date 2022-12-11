import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const Header = () => {
	const navigate = useNavigate();
	const { token, setToken } = useContext(AuthContext);
	return (
		<header className='header bg-light'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-between'>
					<Link className='navbar-brand' to='/'>
						Todo
					</Link>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='#'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#'>
								Features
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#'>
								Pricing
							</Link>
						</li>
					</ul>
					<button
						onClick={() => {
							setToken('');
							navigate('/');
						}}
						className='btn btn-primary'>
						Sign Out
					</button>
				</nav>
			</div>
		</header>
	);
};
