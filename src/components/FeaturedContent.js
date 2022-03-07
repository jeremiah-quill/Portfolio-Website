import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Fade } from "react-awesome-reveal";
// import FadeUp from "../animations/FadeUp";
import { useModalContext } from "../contexts/ModalContext";

function FeaturedContent({
	featuredImg1,
	featuredImg2,
	featuredImg3,
	featuredText1,
	featuredText2,
	openFeature,
}) {
	const [animateFeature, setAnimateFeature] = useState(false);
    const {isModal} = useModalContext()

	useEffect(() => {
		setAnimateFeature(!animateFeature)
	}, [isModal]);

	console.log(openFeature);
	return (
		<>
			<div className="detail-image-container">
				<CSSTransition
					in={animateFeature}
					classNames={"move-1"}
					timeout={500}
					unmountOnExit={true}
				>
					<img
						className="detail-image-1 detail-image"
						src={featuredImg1}
						alt="flow with megmo detail screenshot"
					/>
				</CSSTransition>
				<img
					className="detail-image-2 detail-image"
					src={featuredImg2}
					alt="flow with megmo detail screenshot 2"
				/>
				<CSSTransition
					in={animateFeature}
					classNames={"move-3"}
					timeout={500}
					unmountOnExit={true}
				>
					<img
						className="detail-image-3 detail-image move-3"
						src={featuredImg3}
						alt="flow with megmo detail screenshot 3"
					/>
				</CSSTransition>
			</div>
			{/* <Fade direction="up" duration={500} triggerOnce={true} fraction={0}> */}
				<div className="detail-content-container">
					<p>{featuredText1}</p>
					<br></br>
					<br></br>
					<p>{featuredText2}</p>
				</div>
			{/* </Fade> */}
		</>
	);
}

export default FeaturedContent;
