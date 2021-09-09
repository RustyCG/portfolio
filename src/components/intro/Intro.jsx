import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { ExpandMore } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function Intro() {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			backDelay: 1500,
			backSpeed: 60,
			showCursor: true,
			strings: [
				"Software Engineer",
				"Software Developer",
				"Systems Integrator",
				"Business Analyst",
			],
		});
	}, []);
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/cg-intro.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Cam Gumley</h1>
					<h3>
						<span ref={textRef}></span>
					</h3>
					<div className="button-container">
						<div className="btn-wrap">
							<a href="#about" className="btn">
								About Me
							</a>
						</div>
						<div className="btn-wrap">
							<a href="#portfolio" className="btn">
								Portfolio
							</a>
						</div>
						<div className="btn-wrap">
							<a href="#contact" className="btn">
								Contact
							</a>
						</div>
					</div>
				</div>

				<a className="arrow-wrapper" href="#portfolio">
					<ExpandMore className="downarrow" />
					{/* <img src="assets/down.png" alt="" /> */}
				</a>
			</div>
		</div>
	);
}
