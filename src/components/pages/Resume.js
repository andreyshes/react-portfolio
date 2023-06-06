import React from "react";

const styles = {
	h2: {
		color: "#582f0e",
		textAlign: "center",
		fontSize: "40px",
		fontFamily: "font-serif",
	},
	link: {
		color: "#0000FF",
	},
	space: {
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
	},
	h3: {
		color: "black",
		paddingTop: "0.75rem",
		fontSize: "28px",
	},
	p: {
		color: "black",
		fontSize: "22px",
		fontFamily: "font-mono",
	},
};

export default function Resume() {
	return (
		<div style={styles.space}>
			<h2 style={styles.h2}>Resume</h2>
			<h3 style={styles.h3}>Technical Skills</h3>
			<p style={styles.p}>
				<h4 className="text-5xl">Front-End</h4>
				<ul>
					<li className="list-disc">HTML</li>
					<li className="list-disc">CSS</li>
					<li className="list-disc	">Javascript</li>
					<li className="list-disc	">JQuery</li>
					<li className="list-disc	">Bootstrap</li>
					<li className="list-disc	">React</li>
					<li className="list-disc	">Responsive Design</li>
				</ul>
			</p>
			<p style={styles.p}>
				<h4 className="text-5xl">Back-End</h4>
				<ul>
					<li className="list-disc">MySQL</li>
					<li className="list-disc">Sequelize</li>
					<li className="list-disc">MongoDB</li>
					<li className="list-disc	">Mongoose</li>
					<li className="list-disc	">Express</li>
					<li className="list-disc	">Node</li>
					<li className="list-disc	">APIs</li>
					<li className="list-disc	">GraphQL</li>
				</ul>
			</p>
		</div>
	);
}
