import React from "react";
import AndreyShestopal from "../../img/andreyshestopal Small.png";

const styles = {
	andreyshestopal: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		maxHeight: "200px",
		maxWidth: "200px",
		borderRadius: "10%",
		border: "3px solid black",
		filter: "opacity(100%)",
		cursor: "default",
	},
	h2: {
		textAlign: "center",
		fontFamily: "font-serif",
		fontSize: "40px",
		color: "#582f0e",
	},
};

export default function About() {
	return (
		<div>
			<h2 className="text-5xl">About Me</h2>
			<div>
				<img
					style={styles.andreyshestopal}
					src={AndreyShestopal}
					alt="AndreyShestopal"
				/>
			</div>
			<p>
				As a full-stack web developer, I am a driven and self-motivated
				individual with a passion for technology and a desire to make a positive
				impact through my work. I have a strong foundation in programming
				languages and a proven ability to learn and adapt quickly in a
				fast-paced environment. With a focus on delivering high-quality,
				reliable solutions, I am committed to constantly improving my skills and
				staying up-to-date with the latest technologies. Whether working
				independently or as part of a team, I am always striving to contribute
				to the success of the project and the company.
			</p>
		</div>
	);
}
