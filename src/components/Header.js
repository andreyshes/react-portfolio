import React from "react";
import "../style/header.css";

const styles = {
	navbar: {
		backgroundColor: "#c6ac8f",
	},

	h1: {
		fontSize: "50px",
		fontFamily: "font-serif",
	},
	padding: {
		padding: "8px",
	},
	a: {
		color: "white",
		fontFamily: "font-serif",
	},
};
const listStyle = {
	listStyleType: "none",
	fontSize: "22px",
	display: "flex",
	justifyContent: "end",
	marginBottom: "25px",
};

function Header({ currentPage, handlePageChange }) {
	return (
		<nav style={styles.navbar}>
			<header className="nav justify-content-center">
				<h1 style={styles.h1}>Andrey Shestopal</h1>
			</header>
			<ul style={listStyle} className="nav justify-content-center">
				<li style={styles.padding} className="nav-item">
					<a
						href="#about"
						style={styles.a}
						onClick={() => handlePageChange("About")}
						className={currentPage === "About" ? "nav-link-active" : "nav-link"}
					>
						About
					</a>
				</li>
				<li style={styles.padding} className="nav-item">
					<a
						href="#portfolio"
						style={styles.a}
						onClick={() => handlePageChange("Portfolio")}
						className={
							currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
						}
					>
						Portfolio
					</a>
				</li>
				<li style={styles.padding} className="nav-item">
					<a
						href="#contact"
						style={styles.a}
						onClick={() => handlePageChange("Contact")}
						className={
							currentPage === "Contact" ? "nav-link-active" : "nav-link"
						}
					>
						Contact
					</a>
				</li>
				<li style={styles.padding} className="nav-item">
					<a
						href="#resume"
						style={styles.a}
						onClick={() => handlePageChange("Resume")}
						className={
							currentPage === "Resume" ? "nav-link-active" : "nav-link"
						}
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
