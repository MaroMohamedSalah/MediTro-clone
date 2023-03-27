import "./Testimonial.css";
import img1 from "../images/Testimonial img 1.png";
import doctor1 from "../images/Testimonial doctor 1.jpeg";
import doctor2 from "../images/Testimonial doctor 2.jpeg";
import doctor3 from "../images/Testimonial doctor 3.jpeg";
import doctor4 from "../images/Testimonial doctor 4.jpeg";
import doctor5 from "../images/Testimonial doctor 5.jpeg";
import doctor6 from "../images/Testimonial doctor 6.jpeg";
import MySlider2 from "./MySlider2";

const Testimonial = () => {
	return (
		<div className="Testimonial mb-5">
			<div className="container">
				<div class="textGroup d-flex justify-content-center align-items-center flex-column">
					<h6 class="title">Testimonial</h6>
					<h1 className="w-50 p-5 fw-bold text-center">
						See What Are The Patients Saying About us
					</h1>
					<div className="row w-100 align-items-center">
						<div className="col-12 col-md-6">
							<div className="warper position-relative">
								<img src={img1} alt="" />
								<ul className="doctorsList">
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor1} alt="" />
										</a>
									</li>
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor2} alt="" />
										</a>
									</li>
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor3} alt="" />
										</a>
									</li>
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor4} alt="" />
										</a>
									</li>
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor5} alt="" />
										</a>
									</li>
									<li className="position-absolute">
										<a href="#">
											{" "}
											<img src={doctor6} alt="" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="slider">
								<MySlider2 />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
