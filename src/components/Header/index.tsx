import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand to='/' as={Link}>
					JSON-Placeholder
				</Navbar.Brand>

				<Nav className='ms-auto'>
					<Nav.Link to='/' as={Link}>
						All Posts
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
