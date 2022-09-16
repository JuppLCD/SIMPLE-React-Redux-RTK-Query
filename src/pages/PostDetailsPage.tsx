import { useParams } from 'react-router-dom';

import { useGetPostByIdQuery } from '../services/JSONPlaceholder';

import { Container } from 'react-bootstrap';
import PostDetails from '../components/PostDetails';

function PostDetailsPage() {
	const { postId } = useParams();

	if (!postId && typeof Number(postId) !== 'number') {
		return <p>Error!! El id del post no es valido</p>;
	}

	const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(postId));

	if (isLoading) {
		return <p>LOADING...</p>;
	} else if (isError) {
		return <p>Error!! No se pudo traer los datos</p>;
	}

	return (
		<main>
			<Container fluid='md'>{post && <PostDetails post={post} />}</Container>
		</main>
	);
}

export default PostDetailsPage;
