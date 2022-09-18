import { useGetCommentsOfPostByIdQuery, useGetUserByIdQuery } from '../../services/JSONPlaceholder';

import { Alert, Spinner } from 'react-bootstrap';
import CommentsDetails from '../CommentsDetails';

import type { Post } from '../../types/redux';

interface Props {
	post: Post;
}

function PostDetails({ post }: Props) {
	const { data: comments, isError, isLoading } = useGetCommentsOfPostByIdQuery(post.id);
	const { data: user, isError: isErrorUser } = useGetUserByIdQuery(post.userId);

	return (
		<article>
			<h1>{post.title}</h1>
			{!isErrorUser && user && (
				<h6>
					Creator: {user.username} | {user.email} | {user.phone}
				</h6>
			)}
			<p>{post.body}</p>
			<hr />
			<h4>Comments</h4>
			{isLoading ? (
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			) : (
				<>
					{isError && <Alert variant='danger'>Error al buscar los posts</Alert>}

					<ul>
						{comments?.length === 0 && <p>No hay posts</p>}

						{comments?.map((comment) => (
							<CommentsDetails key={comment.id} comment={comment} />
						))}
					</ul>
				</>
			)}
		</article>
	);
}

export default PostDetails;
