import { useState, useEffect } from "react"

import data from "./data/MOCK_DATA.json"

const itemsMenu = ["Home", "Products", "About Us", "Contact"]

function App() {
	const [people, setPeople] = useState([])

	useEffect(() => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(data), 3000)
		})

		promise.then(data => setPeople(data))
	}, [])

	return (
		<>
			<header>
				<ul>
					{itemsMenu.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</header>
			<main>
				{people.map(person => (
					<div>{person.first_name}</div>
				))}
			</main>
		</>
	)
}

export default App
