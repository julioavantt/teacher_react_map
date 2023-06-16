import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const itemsMenu = ["Home", "Products", "About Us", "Contact"]

export const NavBar = () => (
	<Navbar bg="dark" variant="dark">
		<Container>
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="me-auto">
				{itemsMenu.map(item => (
					<Nav.Link key={item} href="#">
						{item}
					</Nav.Link>
				))}
			</Nav>
		</Container>
	</Navbar>
)
