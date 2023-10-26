import { useState, useEffect } from "react"

import { CardList } from "./components/CardList"
import { NavBar } from "./components/NavBar"

import data from "./data/MOCK_DATA.json"

export default function App() {
	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const promise = new Promise(resolve =>
			setTimeout(() => resolve(data), 3000)
		)

		promise.then(data => setPeople(data)).finally(() => setLoading(false))
	}, [])

	return (
		<>
			<NavBar />
			<CardList people={people} loading={loading} />
		</>
	)
}
