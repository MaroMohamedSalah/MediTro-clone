import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape1 from "../images/shape 11.png";
import shape2 from "../images/shape 10.png";
import shape3 from "../images/shape 12.png";
import shape4 from "../images/shape 8.png";
import MySlider from "./MySlider";
const Services = () => {
	return (
		<div className="Services">
			<div className="ships d-none d-md-block">
				<img src={shape1} className="position-absolute" />
				<img src={shape2} className="position-absolute" />
				<img src={shape3} className="position-absolute" />
				<img src={shape4} className="position-absolute" />
			</div>
			<div className="row w-100 align-items-center">
				<div className="col-xl-4 col-lg-7 mb-30">
					<div className="textGroup">
						<h6 className="title">Services</h6>
						<h1>We Cover A Big Variety Of Medical Services</h1>
						<p>
							We provide the special tips and advice's of heath care treatment
							and high level of best.
						</p>
						<div className="btn btn-lg readMore">All Services</div>
					</div>
				</div>
				<div className="swiper col-xl-8 mb-15">
					<MySlider />
				</div>
			</div>
		</div>
	);
};

export default Services;
