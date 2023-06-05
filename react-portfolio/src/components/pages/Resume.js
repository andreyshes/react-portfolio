import React from "react";

const styles = {
	h2: {
		color: "white",
		textAlign: "center",
	},
	link: {
		color: "#0000FF",
	},
	space: {
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
	},
	h3: {
		color: "white",
		paddingTop: "0.75rem",
	},
	p: {
		color: "white",
	},
};

export default function Resume() {
	return (
		<div style={styles.space}>
			<h2 style={styles.h2}>Resume</h2>
			<h3 style={styles.h3}>Technical Skills</h3>
			<p style={styles.p}>
				<h4>Front-End</h4>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>JQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>Responsive Design</li>
				</ul>
			</p>
			<p style={styles.p}>
				<h4>Back-End</h4>
				<ul>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
					<li>Express</li>
					<li>Node</li>
					<li>APIs</li>
					<li>GraphQL</li>
				</ul>
			</p>
		</div>
	);
}
