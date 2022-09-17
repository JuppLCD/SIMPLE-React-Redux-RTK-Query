import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';

import Layout from './layout';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Layout />
			</Router>
		</Provider>
	);
}

export default App;
