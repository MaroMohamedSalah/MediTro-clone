import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider2 = () => {
	const settings = {
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
	};

	return (
		<>
			<Slider {...settings}>
				<div className="slide">
					<div className="testimonial-bx position-relative">
						<div className="icon position-absolute">
							<i className="fas fa-quote-left"></i>
						</div>
						<div className="bx-content ">
							<p className="text-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex
								saepe, maxime ipsam laborum possimus non. Suscipit culpa
								provident ipsam consequuntur recusandae maiores, dolorem ullam
								assumenda eligendi error odio rem.
							</p>
							<h5 className="fw-bold mt-5">Marwan Mohamed</h5>
							<h6>ENGINEER</h6>
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="testimonial-bx position-relative">
						<div className="icon position-absolute">
							<i className="fas fa-quote-left"></i>
						</div>
						<div className="bx-content ">
							<p className="text-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex
								saepe, maxime ipsam laborum possimus non. Suscipit culpa
								provident ipsam consequuntur recusandae maiores, dolorem ullam
								assumenda eligendi error odio rem.
							</p>
							<h5 className="fw-bold mt-5">Marwan Mohamed</h5>
							<h6>ENGINEER</h6>
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="testimonial-bx position-relative">
						<div className="icon position-absolute">
							<i className="fas fa-quote-left"></i>
						</div>
						<div className="bx-content ">
							<p className="text-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex
								saepe, maxime ipsam laborum possimus non. Suscipit culpa
								provident ipsam consequuntur recusandae maiores, dolorem ullam
								assumenda eligendi error odio rem.
							</p>
							<h5 className="fw-bold mt-5">Marwan Mohamed</h5>
							<h6>ENGINEER</h6>
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="testimonial-bx position-relative">
						<div className="icon position-absolute">
							<i className="fas fa-quote-left"></i>
						</div>
						<div className="bx-content ">
							<p className="text-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex
								saepe, maxime ipsam laborum possimus non. Suscipit culpa
								provident ipsam consequuntur recusandae maiores, dolorem ullam
								assumenda eligendi error odio rem.
							</p>
							<h5 className="fw-bold mt-5">Marwan Mohamed</h5>
							<h6>ENGINEER</h6>
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="testimonial-bx position-relative">
						<div className="icon position-absolute">
							<i className="fas fa-quote-left"></i>
						</div>
						<div className="bx-content ">
							<p className="text-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex
								saepe, maxime ipsam laborum possimus non. Suscipit culpa
								provident ipsam consequuntur recusandae maiores, dolorem ullam
								assumenda eligendi error odio rem.
							</p>
							<h5 className="fw-bold mt-5">Marwan Mohamed</h5>
							<h6>ENGINEER</h6>
						</div>
					</div>
				</div>
			</Slider>
		</>
	);
};

export default MySlider2;
