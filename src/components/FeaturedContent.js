import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useModalContext } from "../contexts/ModalContext";
import { useWidthContext } from "../contexts/WidthContext";

function FeaturedContent({ featuredImgs, featuredText1, featuredText2 }) {
	const { isModal } = useModalContext();
	const { width, breakpoint } = useWidthContext();

	const [animateFeature, setAnimateFeature] = useState(false);
	const [currImg, setCurrImg] = useState(featuredImgs[1]);
	const [nextImg, setNextImg] = useState(featuredImgs[2]);
	const [prevImg, setPrevImg] = useState(featuredImgs[0]);

	const incrementCarousel = () => {
		if (width < breakpoint) return;
		if (nextImg.idx === featuredImgs.length - 1) {
			setCurrImg(featuredImgs[featuredImgs.length - 1]);
			setNextImg(featuredImgs[0]);
			setPrevImg(featuredImgs[featuredImgs.length - 2]);
		} else if (currImg.idx === featuredImgs.length - 1) {
			setCurrImg(featuredImgs[0]);
			setNextImg(featuredImgs[1]);
			setPrevImg(featuredImgs[featuredImgs.length - 1]);
		} else if (prevImg.idx === featuredImgs.length - 1) {
			setCurrImg(featuredImgs[1]);
			setNextImg(featuredImgs[2]);
			setPrevImg(featuredImgs[0]);
		} else {
			setCurrImg(featuredImgs[currImg.idx + 1]);
			setNextImg(featuredImgs[nextImg.idx + 1]);
			setPrevImg(featuredImgs[prevImg.idx + 1]);
		}
	};

	const decrementCarousel = () => {
		if (width < breakpoint) return;

		if (nextImg.idx === 0) {
			setCurrImg(featuredImgs[featuredImgs.length - 2]);
			setNextImg(featuredImgs[featuredImgs.length - 1]);
			setPrevImg(featuredImgs[featuredImgs.length - 3]);
		} else if (currImg.idx === 0) {
			setCurrImg(featuredImgs[featuredImgs.length - 1]);
			setNextImg(featuredImgs[0]);
			setPrevImg(featuredImgs[featuredImgs.length - 2]);
		} else if (prevImg.idx === 0) {
			setCurrImg(featuredImgs[0]);
			setNextImg(featuredImgs[1]);
			setPrevImg(featuredImgs[featuredImgs.length - 1]);
		} else {
			setCurrImg(featuredImgs[currImg.idx - 1]);
			setNextImg(featuredImgs[nextImg.idx - 1]);
			setPrevImg(featuredImgs[prevImg.idx - 1]);
		}
	};

	useEffect(() => {
		setAnimateFeature(!animateFeature);
	}, [isModal]);

	return (
		<>
			<div className="detail-image-container">
				{width < breakpoint ? (
					featuredImgs.map((featuredImg) => (
						<img className="detail-image" src={featuredImg.img} />
					))
				) : (
					<>
						<CSSTransition
							in={animateFeature}
							classNames={"move-1"}
							timeout={500}
							unmountOnExit={true}
						>
							<img
								className="detail-image-1 detail-image"
								src={nextImg.img}
								alt="flow with megmo detail screenshot"
								onClick={incrementCarousel}
							/>
						</CSSTransition>
						<img
							className="detail-image-2 detail-image"
							src={currImg.img}
							alt="flow with megmo detail screenshot"
						/>
						<CSSTransition
							in={animateFeature}
							classNames={"move-3"}
							timeout={500}
							unmountOnExit={true}
						>
							<img
								className="detail-image-3 detail-image move-3"
								src={prevImg.img}
								alt="flow with megmo detail screenshot"
								onClick={decrementCarousel}
							/>
						</CSSTransition>
					</>
				)}

				{}
			</div>
			<div className="detail-content-container">
				<p>{featuredText1}</p>
				<br></br>
				<p>{featuredText2}</p>
			</div>
		</>
	);
}

export default FeaturedContent;
