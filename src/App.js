import React from "react";
import "./App.css";
import Child from "./components/child.component";

function App() {
	const users = [{ name: "Robin" }, { name: "Markus" }];
	const [query, setQuery] = React.useState("");

	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	return (
		<div>
			{query === "hello" ? (
				<div>
					<input type="text" onChange={handleChange} />
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
							</tr>
						</thead>
						<tbody>
							{users
								.filter((user) => user.name.includes(query))
								.map((user) => (
									<tr>
										<td>{user.name}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			) : <Child/>}
		</div>
	);
}

export default App;
