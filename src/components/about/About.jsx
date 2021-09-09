import React from "react";
import "./about.scss";
import { ChevronRight } from "@material-ui/icons";

export default function About() {
	return (
		<div className="about" id="about">
			<h1>About.</h1>

			<div className="mainContainer">
				<div className="leftContainer">
					<div className="title">
						<h4>Skills</h4>
					</div>
					<ul>
						<li>
							<ChevronRight className="arrow" />
							<span>HTML/CSS</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Javascript</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Ruby</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Ruby on Rails</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>React</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Node.js</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Express.js</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Sinatra</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>SQL</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>PostgreSQL</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>AWS</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>AJAX</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>jQuery</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>Azure</span>
						</li>
						<li>
							{" "}
							<ChevronRight className="arrow" />
							<span>TDD</span>
						</li>
					</ul>
				</div>
				<div className="rightContainer">
					<div className="profile">
						{/* <div className="title">
							<h4>Profile</h4>
						</div> */}
						<p>
							Making an intentional career move into software
							engineering, I bring highly developed stakeholder
							skills, project management skills and a lifetime of
							working in fast paced high pressure environments. I
							am drawn to software engineering because it gives me
							the opportunity to create products, while allowing
							me to use my creativity and problem solving
							simultaneously.
							<br />
							<br />
							I have worked in many sectors, including Aerospace,
							Defence, and Security, as well as Banking and
							Finance. I am confident managing risk, I've touched
							on money laundering rules and regulations, and I
							have loved the time i have spent in healthcare.
							<br />
							<br />
							Having worked in Business Development and
							management, I'd love to land in a business analyst
							or software engineering role, within a team of
							highly motivated and dedicated people, who love what
							they create and work within a positive and inclusive
							work culture.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
