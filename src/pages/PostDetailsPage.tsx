import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../services/JSONPlaceholder';

import { Alert, Container, Spinner } from 'react-bootstrap';
import PostDetails from '../components/PostDetails';

function PostDetailsPage() {
	const { postId } = useParams();

	if (!postId && typeof Number(postId) !== 'number') {
		return <p>Error!! El id del post no es valido</p>;
	}

	const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(postId));

	if (isLoading) {
		return (
			<div className='d-flex justify-content-center'>
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</div>
		);
	} else if (isError) {
		return <Alert variant='danger'>Error!! No se pudo traer los datos</Alert>;
	}

	return (
		<main>
			<Container fluid='md'>{post && <PostDetails post={post} />}</Container>
		</main>
	);
}

export default PostDetailsPage;
