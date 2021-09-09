import React, {useState} from "react";
import {
	VideogameAsset,
	Storage,
	Language,
	Dashboard,
	GitHub,
} from "@material-ui/icons";
import "./modal.scss";

export default function Modal({toggleModal, icon, title, desc, site, git, img}) {

	return (
		<div className="modal">
			<div className="modal-wrapper" id="modal-wrapper">
				<div onClick={toggleModal} className="modal-overlay" />
				<div className="modal-box">
					<button className="close-modal" onClick={toggleModal}>
						&times;
					</button>
					<div className="left">
						<div className="leftContainer">
							<div className="imgContainer">
								<Dashboard className="icon" />
							</div>
							<h2>{title}</h2>
							<p>{desc}</p>
							<div className="itemContainer">
								<div className="item">
									<a
										href={site}
										className="linked"
									>
										<Language className="icon" />
										<span>Project Site</span>
									</a>
								</div>
								<div className="item">
									<a
										href={git}
										className="linked"
									>
										<GitHub className="icon" />
										<span>GitHub</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<img src={img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}