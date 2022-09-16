import { useGetPostsQuery } from '../../services/JSONPlaceholder';
import { Link } from 'react-router-dom';

function PostList() {
	const { data: posts, isLoading, isError } = useGetPostsQuery(undefined);

	if (isLoading) {
		return <p>LOADING...</p>;
	} else if (isError) {
		return <p>Error!! No se pudo traer los posts</p>;
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
