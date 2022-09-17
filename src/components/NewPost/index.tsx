import { useNewPostMutation } from '../../services/JSONPlaceholder';
import { useState } from 'react';

import { Alert, Button, Form } from 'react-bootstrap';

import type { ChangeEvent, FormEvent } from 'react';

const initialState = { title: '', body: '', userId: 1 };

function NewPost() {
	const [inputsForm, setInputsForm] = useState(initialState);
	const [createPost, { isLoading, isError }] = useNewPostMutation();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputsForm.title.trim() || inputsForm.body.trim()) {
			const data = await createPost(inputsForm).unwrap();

			setInputsForm(initialState);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		setInputsForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h3>Crea un Post</h3>

			{isError && <Alert variant='danger'>Error al crear el post</Alert>}
			<Form.Group className='mb-3'>
				<label>
					Titulo
					<input type='text' name='title' required onChange={handleChange} value={inputsForm.title} />
				</label>
			</Form.Group>

			<Form.Group className='mb-3'>
				<label>
					Texto
					<textarea name='body' cols={30} rows={10} required onChange={handleChange} value={inputsForm.body}></textarea>
				</label>
			</Form.Group>

			<Button type='submit'>{isLoading ? 'Loading..' : 'Save'}</Button>
		</Form>
	);
}

export default NewPost;
