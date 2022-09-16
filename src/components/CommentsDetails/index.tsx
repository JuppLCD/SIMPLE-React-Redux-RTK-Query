import { Comment } from '../../types/redux';

interface Props {
	comment: Comment;
}

function CommentsDetails({ comment }: Props) {
	return (
		<li>
			<h4>{comment.email}</h4>
			<h5>{comment.name}</h5>
			<p>{comment.body}</p>
		</li>
	);
}

export default CommentsDetails;
