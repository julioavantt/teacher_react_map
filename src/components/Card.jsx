import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const MyCard = ({ person }) => (
	<Card key={person.id} style={{ width: "18rem", padding: "1rem" }}>
		<Card.Img
			variant="top"
			src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
		/>
		<Card.Body>
			<Card.Title>
				{person.first_name} {person.last_name}
			</Card.Title>
			<Card.Text>Gender: {person.gender}</Card.Text>
			<Button variant="primary">Ver</Button>
		</Card.Body>
	</Card>
)
