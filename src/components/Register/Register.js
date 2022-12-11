import axios from 'axios';
import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../Input/Input';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const Register = () => {
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const { token, setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('http://192.168.0.167:5000/user/register', {
				user_name: nameRef.current.value,
				phone: phoneRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
			})
			.then((res) => {
				if (res.status === 201) {
					setToken(res.data);
					navigate('/');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='mx-auto mt-5 w-25 p-4 shadow rounded'>
			<h1 className='h1 text-center mb-4'>Registration</h1>
			<div className='d-flex mb-3'>
				<p className='m-0 me-3'>Account bormi?</p>
				<Link to='/login'>Sign in</Link>
			</div>
			<form onSubmit={handleFormSubmit}>
				<Input ref={nameRef} type='text' placeholder='Name' />
				<Input ref={phoneRef} type='tel' placeholder='Phone' />
				<Input ref={emailRef} type='email' placeholder='Email' />
				<Input ref={passwordRef} type='password' placeholder='Password' />
				<button type='submit' className='btn btn-primary'>
					SEND
				</button>
			</form>
		</div>
	);
};
