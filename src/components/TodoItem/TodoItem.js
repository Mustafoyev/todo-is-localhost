import axios from 'axios';
import { Modal } from '../Modal/Modal';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { TodoContext } from '../../context/TodoContext/TodoContext';
import { Input } from '../Input/Input';

export const TodoItem = ({ el }) => {
	const { token } = useContext(AuthContext);
	const { inpValue, setInpValue } = useContext(TodoContext);
	const [modal, setModal] = useState(false);
	const [editInp, setEditInp] = useState('');
	const editInpRef = useRef();

	const handleDelItem = (id) => {
		axios
			.delete('http://192.168.0.167:5000/todo/' + id, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: token.token,
				},
			})
			.then((res) => setInpValue(res))
			.catch((err) => console.log(err));
	};

	const handleEditTodo = (evt) => {
		evt.preventDefault();
		axios
			.put(
				'http://192.168.0.167:5000/todo/' + el.id,
				{ text: editInp },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: token.token,
					},
				},
			)
			.then((res) => setInpValue(res))
			.catch((err) => console.log(err));
	};

	return (
		<li
			key={el.id}
			className='item d-flex align-items-center justify-content-between p-2 shadow-sm rounded mt-3 bg-light'>
			<p className='item-text my-0 mx-2'>{el.todo_value}</p>
			<div>
				<button
					onClick={() => setModal(true)}
					className='btn btn-warning mx-3'
					dataset-id={el.id}>
					Edit
				</button>
				<button
					onClick={() => handleDelItem(el.id)}
					className='btn btn-danger'
					dataset-id={el.id}>
					Delet
				</button>
			</div>
			{modal && (
				<Modal setModal={setModal} title={'Edit Todo'}>
					<form onSubmit={handleEditTodo}>
						<Input
							ref={editInpRef}
							onChange={() => setEditInp(editInpRef.current.value)}
							defaultValue={el.todo_value}
							type='text'
						/>
						<button
							type='submit'
							dataset-id={el.id}
							className='btn btn-success'>
							Edit Todo
						</button>
					</form>
				</Modal>
			)}
		</li>
	);
};
