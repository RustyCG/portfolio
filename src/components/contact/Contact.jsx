import { SpaRounded } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<div className="details">
						<input type="text" placeholder="Name" />
						<input type="number" placeholder="Phone Number" />
						<input type="text" placeholder="Email" />
					</div>
					<textarea placeholder="Message"></textarea>
					<button type="submit">Send</button>
					{message && (
						<span>Thanks, I will reply to your message ASAP.</span>
					)}
				</form>
			</div>
		</div>
	);
}
