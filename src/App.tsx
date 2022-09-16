import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';

import Page from './pages';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Page />
			</Router>
		</Provider>
	);
}

export default App;
