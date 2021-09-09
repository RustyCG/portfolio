import React from "react";
import { useEffect, useState, useRef } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import Modal from "../modal/Modal";
import {
	featuredPortfolio,
	// webPortfolio,
	// mobilePortfolio,
	// designPortfolio,
	// contentPortfolio,
} from "../../data";
import "./portfolio.scss";

export default function Portfolio() {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const [modal, setModal] = useState(false);
	const [project, setProject] = useState([]);
	const toggleModal = () => {
		setModal(!modal);
	};
	const list = [
		// {
		//     id: "featured",
		//     title: "Featured",
		// },
		// {
		//     id: "web",
		//     title: "Web App",
		// },
		// {
		//     id: "mobile",
		//     title: "Mobile App",
		// },
		// {
		//     id: "design",
		//     title: "Design",
		// },
		// {
		//     id: "content",
		//     title: "Content",
		// }
	];

	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredPortfolio);
				break;
			// case "web":
			// 	setData(webPortfolio);
			// 	break;
			// case "mobile":
			// 	setData(mobilePortfolio);
			// 	break;
			// case "design":
			// 	setData(designPortfolio);
			// 	break;
			// case "content":
			// 	setData(contentPortfolio);
			// 	break;
			default:
				setData(featuredPortfolio);
		}
	}, [selected]);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						key={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div
						className="item"
						onClick={() => {
							setModal(true);
							setProject(d);
						}}
					>
						<img src={process.env.PUBLIC_URL + d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
			{modal && (
				<Modal
					key={project.id}
					toggleModal={toggleModal}
					icon={project.icon}
					title={project.title}
					desc={project.desc}
					site={project.site}
					git={project.git}
					img={process.env.PUBLIC_URL + project.img}
				/>
			)}
		</div>
	);
}
