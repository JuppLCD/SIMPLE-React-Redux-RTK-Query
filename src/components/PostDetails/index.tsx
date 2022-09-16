import { useGetCommentsOfPostByIdQuery } from '../../services/JSONPlaceholder';

import CommentsDetails from '../CommentsDetails';

import type { Post } from '../../types/redux';

interface Props {
	post: Post;
}

function PostDetails({ post }: Props) {
	const { data: comments, isError, isLoading } = useGetCommentsOfPostByIdQuery(post.id);
	return (
		<article>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<hr />
			<h2>Comments</h2>
			{isLoading ? (
				<p>LOADIN...</p>
			) : (
				<>
					{isError && <p>Error al buscar los posts</p>}

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
