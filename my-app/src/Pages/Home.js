import AboutUs from "../Components/AboutUs";
import ArrowToTop from "../Components/ArrowToTop";
import BookAppointment from "../Components/BookAppointment";
import Intro from "../Components/Intro";
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
			<ArrowToTop />
		</div>
	);
};

export default Home;
