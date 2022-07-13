import React, { Component } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

const dateOne = new Date(2022, 7, 19, 14, 5);
const dateTwo = new Date(2022, 7, 19, 15, 23);

const initialData = [
	{
		title: "Learn ReactJS!!!",
		descr: "Faster!!!",
		image: "",
		done: true,
		createdAt: dateOne.toLocaleString(),
		key: dateOne.getTime(),
	},
	{
		title: "Write React Application",
		descr: "TODO-list",
		image: "",
		done: false,
		createdAt: dateTwo.toLocaleString(),
		key: dateTwo.getTime(),
	},
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: initialData };
		this.setDone = this.setDone.bind(this);
		this.delete = this.delete.bind(this);
		this.add = this.add.bind(this);
	}

	setDone(key) {
		const deed = this.state.data.find((current) => current.key === key);
		if (deed) {
			deed.done = true;
		}
		this.setState((state) => ({}));
	}

	delete(key) {
		const newData = this.state.data.filter((current) => current.key !== key);
		this.setState((state) => ({
			data: newData,
		}));
	}

	add(deed) {
		this.state.data.push(deed);
		this.setState((state) => ({}));
	}

	render() {
		return (
			<HashRouter>
				<nav className="navbar is-light">
					<div className="navbar-brand">
						<NavLink to="/" className={({ isActive }) => "navbar-item is-uppercase" + (isActive ? " is-active" : "")}>
							Todos
						</NavLink>
					</div>
					<div className="navbar-menu">
						<div className="navbar-start">
							<NavLink to="/add" className={({ isActive }) => "navbar-item" + (isActive ? " is-active" : "")}>
								Create TODO
							</NavLink>
						</div>
					</div>
				</nav>
				<main className="content px-6 mt-6">
					<Routes>
						<Route path="/" element={<TodoList list={this.state.data} setDone={this.setDone} delete={this.delete} />} />
						<Route path="/add" element={<TodoAdd add={this.add} />} />
					</Routes>
				</main>
			</HashRouter>
		);
	}
}