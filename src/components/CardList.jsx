import Container from "react-bootstrap/Container"

import { MyCard } from "./Card"

export const CardList = ({ people }) => (
	<Container className="d-flex flex-wrap mt-3">
		{people.length === 0 ? (
			<div>Loading...</div>
		) : (
			people.map(person => <MyCard key={person.id} person={person} />)
		)}
	</Container>
)
