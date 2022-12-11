import { useRef } from 'react';
import { Input } from '../Input/Input';
import './modal.css';

export const Modal = ({ setModal, children, title }) => {
	const modallRef = useRef();

	const handleCloseModal = (evt) => {
		if (evt.target === modallRef.current) {
			setModal(false);
		}
	};

	return (
		<div ref={modallRef} onClick={handleCloseModal} className='modall'>
			<div className='modal-content p-2 w-50 bg-white'>
				<div className='modal-top d-flex align-items-center justify-content-between p-2'>
					<h3 className='modal-title'>{title}</h3>
					<button onClick={() => setModal(false)} className='btn btn-danger'>
						&times;
					</button>
				</div>
				<div className='modal-bottom'>{children}</div>
			</div>
		</div>
	);
};
