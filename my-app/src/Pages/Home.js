import AboutUs from "../Components/AboutUs";
import ArrowToTop from "../Components/ArrowToTop";
import BookAppointment from "../Components/BookAppointment";
import Intro from "../Components/Intro";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import WorkingProcess from "../Components/WorkingProcess";

const Home = () => {
	return (
		<div className="Home position-relative">
			<Intro />
			<AboutUs />
			<WorkingProcess />
			<div className="container-fluid">
				<BookAppointment />
			</div>
			<Services />
			<ArrowToTop />
			<Testimonial />
		</div>
	);
};

export default Home;
