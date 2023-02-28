import "./WorkingProcess.css";
import shape1 from "../images/shape 5.png";
import shape2 from "../images/shape 3.png";
import shape3 from "../images/shape 2.png";
import shape4 from "../images/shape 4.png";
import { useEffect } from "react";
const WorkingProcess = () => {
	useEffect(() => {
		let cards = Array.from(
			document.querySelectorAll(
				".WorkingProcess .cards > div:not(:nth-child(2))"
			)
		);
		cards.forEach((card) => {
			card.onmouseover = () => {
				card.classList.add("active");
			};
			card.onmouseout = () => {
				card.classList.remove("active");
			};
		});
	}, []);
	return (
		<div className="WorkingProcess">
			<div className="container-sm h-100 mt-5">
				<div className="ships">
					<img className="position-absolute" src={shape2} alt="" />
					<img className="position-absolute" src={shape3} alt="" />
					<img className="position-absolute" src={shape4} alt="" />
				</div>
				<div className="textGroup d-flex justify-content-center align-items-center flex-column">
					<h6 className="title">Working Process</h6>
					<h1>How we works?</h1>
				</div>
				<div className="cards mt-5 row">
					<div className="col-12 col-md-4 col-lg-4 mb-30 px-15">
						<div className="card">
							<div className="cardNum">01</div>
							<div className="cardContent">
								<h5>Make Appointmnet</h5>
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of.
								</p>
							</div>
							<div className="btn-area">
								<a className="btn btn-primary shadow contact" href="/">
									View More <i className="btn-icon-bx fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-4 active">
						<div className="card">
							<div className="cardNum">02</div>
							<div className="cardContent">
								<h5>Take Treatment</h5>
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of.
								</p>
							</div>
							<div className="btn-area">
								<a className="btn btn-primary shadow contact" href="/">
									View More <i className="btn-icon-bx fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-4">
						<div className="card">
							<div className="cardNum">03</div>
							<div className="cardContent">
								<h5>Registration</h5>
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of.
								</p>
							</div>
							<div className="btn-area">
								<a className="btn btn-primary shadow contact" href="/">
									View More <i className="btn-icon-bx fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkingProcess;
