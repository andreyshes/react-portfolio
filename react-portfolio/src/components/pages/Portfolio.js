import React from "react";
import TeamProfile from "../../img/team profile screenshot Small.png";
import TextEditor from "../../img/text_editor.png";
import CodeQuiz from "../../img/codequiz Small.png";
import WeatherDashboard from "../../img/weather_dashboard.png";
import EmployeeTracker from "../../img/employee_tracker.png";
import TravelMate from "../../img/TravelMate homepage.png";

import "../../style/portfolio.css";

const styles = {
	h2: {
		textAlign: "center",
	},
	space: {
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
	},
	header: {
		textAlign: "center",
		paddingBottom: "0.15rem",
	},
	repo: {
		textAlign: "center",
		color: "#0000FF",
		paddingBottom: "0.15rem",
	},
};

export default function Portfolio() {
	return (
		<div>
			<h2 style={styles.h2}>Portfolio</h2>
			<div className="container">
				<div className="row justify-content-center">
					<section className="card col-sm-3 p-0 m-2">
						<a
							href="https://cryptic-mountain-16938.herokuapp.com/"
							target="blank"
						>
							<img
								className="card-img-top"
								src={TravelMate}
								alt="screenshot of travelmate"
							/>
							<header>
								<h3 style={styles.header}>TravelMate</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://github.com/Emilymora1207/TravelMate"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							This is our group project #2, an application me and my group
							decided on constructing which allows a user whos traveling to find
							activites, check weather, find accomidations.
						</p>
					</section>

					<section className="card col-sm-3 p-0 m-2">
						<a href="#" target="blank">
							<img
								className="card-img-top"
								src={EmployeeTracker}
								alt="screenshot of employee tracker on command line showing list of employees"
							/>
							<header>
								<h3 style={styles.header}>Employee Tracker</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://github.com/andreyshes/EmployeeTracker"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							This is an employee tracker database created in the UW Coding
							Bootcamp. It allows users to input departments, roles, and
							employees, update an employee's role, and view a table of
							departments, roles, and employees.
						</p>
					</section>

					<section className="card col-sm-3 p-0 m-2">
						<a href="#" target="blank">
							<img
								className="card-img-top"
								src={WeatherDashboard}
								alt="screenshot of weather dashboard showing weather"
							/>
							<header>
								<h3 style={styles.header}>WeatherDashboard</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://github.com/andreyshes/Weather-Dashboard"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							This was our first application using apis, a weather dashboard
							site that shows a 5 day weather forcast.
						</p>
					</section>
				</div>

				<div className="row justify-content-center">
					<section className="card col-sm-3 p-0 m-2">
						<a href="#" target="blank">
							<img
								className="card-img-top"
								src={CodeQuiz}
								alt="screenshot of code quiz game application"
							/>
							<header>
								<h3 style={styles.header}>CodeQuiz</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://andreyshes.github.io/Javascript-Code-Quiz/"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							An application built using Javascript that tests your knowledge of
							javascript
						</p>
					</section>

					<section className="card col-sm-3 p-0 m-2">
						<a
							href="#

                            "
							target="blank"
						>
							<img
								className="card-img-top"
								src={TeamProfile}
								alt="screenshot of a team member built"
							/>
							<header>
								<h3 style={styles.header}>Team Profile</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://github.com/andreyshes/Team-Profile-Generator"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							A node module application that takes in information about
							employees on a software engineering team, then generates an HTML
							wepages displaying information about each person.
						</p>
					</section>

					<section className="card col-sm-3 p-0 m-2">
						<a href="#" target="blank">
							<img
								className="card-img-top"
								src={TextEditor}
								alt="screenshot of installed text editor showing Hello World!"
							/>
							<header>
								<h3 style={styles.header}>Text Editor</h3>
							</header>
						</a>
						<a
							style={styles.repo}
							href="https://github.com/andreyshes/EditThisText"
							target="blank"
						>
							GitHub Repository
						</a>
						<p style={styles.space}>
							This is a text editor application created in the UW Coding
							Bootcamp. The text editor runs in a browser and can be installed
							on a computer.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
