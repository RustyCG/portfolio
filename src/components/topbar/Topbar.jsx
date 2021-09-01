import React from 'react'
import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						cg.
					</a>
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>

				<div className="right">
					<div className="itemContainer">
						<Person className="icon" />
						<span>0402 644 504</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>cameron.gumley@gmail.com</span>
					</div>
					<div className="itemContainer">
						<a
							href="https://linkedin.com/in/cameron-gumley"
							className="linked"
						>
							<LinkedIn className="icon" />
							<span>LinkedIn</span>
						</a>
					</div>
					<div className="itemContainer">
						<a href="https://github.com/RustyCG" className="linked">
							<GitHub className="icon" />
							<span>GitHub</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}