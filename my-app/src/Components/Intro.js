import doctorPic from "../images/doctor pic.png";
import shape1 from "../images/shape 1.png";
import shape3 from "../images/shape 3.png";
import shape5 from "../images/shape 5.png";
import shape6 from "../images/shape 6.png";
import shape7 from "../images/shape 7.png";
import "./Intro.css";

const Intro = () => {
	return (
		<section className="Intro">
			<div className="container-fluid h-100">
				<div className="container h-100">
					<div className="first h-100 d-flex justify-content-center align-items-center position-relative">
						<div className="ships">
							<img className="position-absolute" src={shape1} alt="" />
							<img className="position-absolute" src={shape3} alt="" />
							<img className="position-absolute" src={shape5} alt="" />
							<img className="position-absolute" src={shape6} alt="" />
							<img className="position-absolute" src={shape7} alt="" />
						</div>
						<div className="row">
							<div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
								<h6 className="mainText">
									We Provide All Health Care Solution
								</h6>
								<p>Protect Your Health And Take Care To Of Your Health</p>
								<div className="btn readMore">Read More</div>
							</div>
							<div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
								<div className="doctor-img">
									<img className="img-fluid" src={doctorPic} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
