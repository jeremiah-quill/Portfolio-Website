import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useModalContext } from "../contexts/ModalContext";

function FeaturedContent({
	featuredImgs,
	// featuredImg2,
	// featuredImg3,
	featuredText1,
	featuredText2,
}) {
	const [animateFeature, setAnimateFeature] = useState(false);
	const { isModal } = useModalContext();
	// const [currIdx, setCurrIdx] = useState(0)
	// const [imgArr, setImgArr] = useState([featuredImg1, featuredImg2, featuredImg3])
	console.log(featuredImgs);
	const [currImg, setCurrImg] = useState(featuredImgs[1]);
	const [nextImg, setNextImg] = useState(featuredImgs[2]);
	const [prevImg, setPrevImg] = useState(featuredImgs[0]);

	const incrementCarousel = () => {
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
						src={prevImg.img}
						alt="flow with megmo detail screenshot 3"
						onClick={decrementCarousel}
					/>
				</CSSTransition>
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
