import AboutUs from "../Components/AboutUs";
import ArrowToTop from "../Components/ArrowToTop";
import Intro from "../Components/Intro";
import WorkingProcess from "../Components/WorkingProcess";

const Home = () => {
	return (
		<div className="Home position-relative">
			<Intro />
			<AboutUs />
			<WorkingProcess />
			<ArrowToTop />
		</div>
	);
};

export default Home;
