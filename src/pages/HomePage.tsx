import { Container } from 'react-bootstrap';

import PostList from '../components/PostList';

function HomePage() {
	return (
		<main>
			<Container fluid='md'>
				<h1>Posts of JSON_Placeholder</h1>
				<PostList />
			</Container>
		</main>
	);
}

export default HomePage;
