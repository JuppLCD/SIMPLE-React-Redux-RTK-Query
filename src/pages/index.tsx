import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import PostDetailsPage from './PostDetailsPage';

function Pages() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts/:postId' element={<PostDetailsPage />} />
		</Routes>
	);
}

export default Pages;
