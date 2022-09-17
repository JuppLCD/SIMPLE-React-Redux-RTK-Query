import { useGetPostsQuery } from '../../services/JSONPlaceholder';

import { Link } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

function PostList() {
	const { data: posts, isLoading, isError } = useGetPostsQuery(undefined);

	if (isLoading) {
		return (
			<div className='d-flex justify-content-center'>
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</div>
		);
	} else if (isError) {
		return <Alert variant='danger'>Error!! No se pudo traer los posts</Alert>;
	}

	return (
		<ul>
			{posts?.map((post) => (
				<li key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default PostList;
