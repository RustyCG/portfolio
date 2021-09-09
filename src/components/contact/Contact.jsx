import React, { useState } from "react";
import "./contact.scss";
import {
	ContactMail,
	Apps,
	Phone,
	Mail,
	LinkedIn,
	Facebook,
	GitHub,
	Twitter,
	Instagram,
} from "@material-ui/icons";
import axios from "axios";
import Botpoison from "@botpoison/browser";

const initialFormState = {
	name: "",
	surname: "",
	email: "",
	tel: "",
	reply: "",
	message: "",
};

export default function Contact() {
	const [formState, setFormState] = useState(initialFormState);
	const [submitting, setSubmitting] = useState(false);
	const [userMessage, setUserMessage] = useState("");

	const formId = "azWzJ6hJ";
	const formSparkUrl = `https://submit-form.com/${formId}`;
	const botpoison = new Botpoison({
		publicKey: "pk_08e7dbc2-e817-4e9f-8227-5cb57153bb0e",
	});

	const updateFormControl = (e) => {
		const { id, value } = e.target;
		const formKey = id;
		const updatedFormState = { ...formState };
		updatedFormState[formKey] = value;
		setFormState(updatedFormState);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		await postSubmission();
		setSubmitting(false);
	};

	const postSubmission = async () => {
		const { solution } = await botpoison.challenge();
		const payload = { ...formState, _botpoison: solution };
		

		try {
			const result = await axios.post(formSparkUrl, payload);
			console.log(result);
			setUserMessage({
				class: "sent",
				text: "Thanks, I will be in touch shortly.",
			});
		} catch (err) {
			console.log(err);
			setUserMessage({
				class: "error",
				text: "Sorry, there was a problem. Please try sending again or contact me via me details on the left.",
			});
		}
	};

	return (
		<div className="contact" id="contact">
			<h1>Contact.</h1>
			{/* <p className="subtitle">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
				quis enim dolorum.
			</p> */}

			<div className="contactContainer">
				<div className="leftContainer">
					<div className="contactTopline">
						<h4>Contact Information</h4>
						<p>
							Get in contact with me directly by filling out the
							form and clicking send or via my details below.
						</p>
					</div>
					<div className="contactLinks">
						<div className="iconText">
							<Phone className="icon" />
							<span className="contactInfo">
								(+61) 0402 644 504
							</span>
						</div>
						<div className="iconText">
							<Mail className="icon" />
							<span className="contactInfo">
								cameron.gumley@gmail.com
							</span>
						</div>
						<div className="iconText">
							<GitHub className="icon" />
							<a
								href="https://github.com/RustyCG"
								className="contactInfo"
							>
								github.com/RustyCG
							</a>
						</div>
						<div className="iconText">
							<LinkedIn className="icon" />
							<a
								href="https://linkedin.com/in/cameron-gumley"
								className="contactInfo"
							>
								linkedin.com/in/cameron-gumley
							</a>
						</div>
					</div>

					{/* <div className="socialMedia">
						<a href="#" className="iconCircle">
							<Facebook className="icon" />
						</a>
						<a href="#" className="iconCircle">
							<Twitter className="icon" />
						</a>
						<a href="#" className="iconCircle">
							<Instagram className="icon" />
						</a>
					</div> */}
				</div>
				<form className="rightContainer" onSubmit={handleSubmit}>
					<div className="col">
						<div className="form-group">
							<label htmlFor="name">First Name</label>
							<input
								type="text"
								id="name"
								value={formState.name}
								onChange={updateFormControl}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="surname">Last Name</label>
							<input
								type="text"
								id="surname"
								value={formState.surname}
								onChange={updateFormControl}
								required
							/>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label htmlFor="email">E-mail</label>
							<input
								type="email"
								id="email"
								value={formState.email}
								onChange={updateFormControl}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="tel">Phone</label>
							<input
								type="tel"
								id="tel"
								value={formState.tel}
								onChange={updateFormControl}
							/>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label id="reply">
								Whats the best way to get back to you?
							</label>
							<div id="radioBtns">
								<div className="radioBtn">
									<input
										type="radio"
										id="radioPhone"
										name="type"
										value={(formState.reply = "phone")}
										onChange={updateFormControl}
									/>
									<label htmlFor="radioPhone">Call</label>
								</div>
								<div className="radioBtn">
									<input
										type="radio"
										id="radioEmail"
										name="type"
										value={(formState.reply = "email")}
										onChange={updateFormControl}
									/>
									<label htmlFor="radioEmail">Email</label>
								</div>
								<div className="radioBtn">
									<input
										type="radio"
										id="radioLinkedin"
										name="type"
										value={(formState.reply = "linkedin")}
										onChange={updateFormControl}
									/>
									<label htmlFor="radioLinkedin">
										Connect on LinkedIn
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="form-group solo">
							<label htmlFor="message">Message</label>
							<textarea
								className="message"
								id="message"
								value={formState.message}
								onChange={updateFormControl}
								placeholder="Write your message"
								required
							></textarea>
						</div>
					</div>
					<div className="col">
						<div className="form-group solo right">
							<button
								type="submit"
								disabled={submitting}
								className={submitting ? "inactive" : "active"}
							>
								{submitting ? "Sending..." : "Send"}
							</button>
						</div>
					</div>
					{userMessage && (
						<div className="col user-msg">
							<div className="form-group solo">
								<p
									className={`user-message ${userMessage.class}`}
								>
									{userMessage.text}
								</p>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}