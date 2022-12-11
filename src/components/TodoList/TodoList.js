import axios from 'axios';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Input } from '../Input/Input';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoContext } from '../../context/TodoContext/TodoContext';

export const TodoList = () => {
	const { token } = useContext(AuthContext);
	const { inpVAlue, setInpValue } = useContext(TodoContext);
	const inpRef = useRef();
	const handleSubmitForm = (evt) => {
		evt.preventDefault();
		axios
			.post(
				'http://192.168.0.167:5000/todo',
				{
					text: inpRef.current.value,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: token.token,
					},
				},
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		inpRef.current.value = '';
	};

	useEffect(() => {
		axios
			.get('http://192.168.0.167:5000/todo', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: token.token,
				},
			})
			.then((res) => setInpValue(res.data))
			.catch((err) => console.log(err));
	}, [inpVAlue]);

	return (
		<div className='container'>
			<form onSubmit={handleSubmitForm}>
				<h2 className='h3 text-center mt-5'>To Do</h2>
				<div className='w-50 input-group my-4 mx-auto'>
					<Input
						ref={inpRef}
						className=' form-control '
						type='text'
						placeholder='Enter your to do'
					/>
					<button className='btn btn-primary'>Create todo</button>
				</div>
			</form>
			{inpVAlue.length ? (
				<ul className='todo-list'>
					{inpVAlue.map((el) => (
						<TodoItem el={el} />
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
};
