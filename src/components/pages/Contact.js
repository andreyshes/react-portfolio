import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Form() {
	const [email, setEmail] = useState("");
	const [Name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === "email") {
			setEmail(inputValue);
		} else if (inputType === "Name") {
			setName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			alert("Email is Invalid");
			return;
		}

		if (!Name) {
			alert("Field is Required");
			return;
		}

		if (!message) {
			alert("Field is Required");
			return;
		}

		setName("");
		setMessage("");
		setEmail("");
	};

	return (
		<div className="w-full md:w-96 md:max-w-full mx-auto">
			<div className="p-6 border border-gray-300 sm:rounded-md">
				<form method="POST" action="https://herotofu.com/start">
					<label className="block mb-6">
						<span className="text-gray-700">Your name</span>
						<input
							type="text"
							name="name"
							className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
							placeholder="Joe Bloggs"
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Email address</span>
						<input
							name="email"
							type="email"
							className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
							placeholder="joe.bloggs@example.com"
							required
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Message</span>
						<textarea
							name="message"
							className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
							rows="3"
							placeholder="Tell us what you're thinking about..."
						></textarea>
					</label>
					<div className="mb-6">
						<button
							type="submit"
							className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
						>
							Contact Us
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Form;
