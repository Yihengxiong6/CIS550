import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Dashboard from './Dashboard';
import FindFriends from './FindFriends';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/" // it is the endpoint you want to show
							render={() => (
								<Dashboard />
							)}
						/>
						<Route
							exact
							path="/dashboard"
							render={() => (
								<Dashboard />
							)}
						/>
						{/* ---- Part 2 (FindFriends) ---- */}
						{/* TODO (1) - Add a Route for the path "/FindFriends" */}
						<Route
							exact
							path="/findfriends"
							render={() => (
								<FindFriends />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}