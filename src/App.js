import { useState, useEffect } from "react"

import { CardList } from "./components/CardList"
import { NavBar } from "./components/NavBar"
import data from "./data/MOCK_DATA.json"

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
			<NavBar />
			<CardList people={people} />
		</>
	)
}

export default App
