import { Comment } from '../../types/redux';

interface Props {
	comment: Comment;
}

function CommentsDetails({ comment }: Props) {
	return (
		<li>
			<h5>Title: {comment.name}</h5>
			<h6>From: {comment.email}</h6>
			<p>{comment.body}</p>
		</li>
	);
}

export default CommentsDetails;
