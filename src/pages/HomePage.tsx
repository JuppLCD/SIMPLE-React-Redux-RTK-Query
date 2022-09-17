import { Container } from 'react-bootstrap';
import NewPost from '../components/NewPost';
import PostList from '../components/PostList';

function HomePage() {
	return (
		<main>
			<Container fluid='md'>
				<NewPost />
				<h1>Posts of JSON_Placeholder</h1>
				<PostList />
			</Container>
		</main>
	);
}

export default HomePage;
