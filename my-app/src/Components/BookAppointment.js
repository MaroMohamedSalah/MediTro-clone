import "./BookAppointment.css";
import mobile from "../images/mobile.png";
import girl from "../images/girl img.png";
import mobileShape1 from "../images/mobile shape 1.png";
import mobileShape2 from "../images/mobile shape 2.png";
import mobileShape3 from "../images/mobile shape 3.png";
import mobileShape4 from "../images/mobile shape 4.png";
import shape1 from "../images/shape 1.png";
import shape2 from "../images/shape 4.png";
import shape3 from "../images/shape 5.png";
import shape4 from "../images/shape 10.png";
const BookAppointment = () => {
	return (
		<div className="BookAppointment position-relative">
			<div className="container-fluid">
				<div className="appointment-inner">
					<div className="ships2 d-none d-md-block">
						<img src={shape1} alt="" className="position-absolute" />
						<img src={shape2} alt="" className="position-absolute" />
						<img src={shape3} alt="" className="position-absolute" />
						<img src={shape4} alt="" className="position-absolute" />
					</div>
					<div className="container">
						<div className="row justify-content-center align-items-center">
							<div className="col-12 col-md-6 col-xl-5">
								<form action="" method="post" className="">
									<h1>Book Appointment</h1>
									<select id="select1" className="form-select">
										<option>Select Department</option>
										<option>One</option>
										<option>Tow</option>
										<option>Three</option>
									</select>
									<select id="select2" className="form-select">
										<option>Select Doctor</option>
										<option>One</option>
										<option>Tow</option>
										<option>Three</option>
									</select>
									<input
										className="form-control"
										type="text"
										placeholder="Your Name"
									/>
									<input
										className="form-control"
										type="number"
										placeholder="Phone Number"
									/>
									<input className="form-control" type="date" />
									<button className="btn" type="submit">
										Appointment Now
									</button>
								</form>
							</div>
							<div className="mobile col-12 col-md-6 col-xl-7 position-relative px-0 px-md-5">
								<img src={mobile} alt="" className="img-fluid" />
								<div className="ships">
									<img className="position-absolute" src={girl} alt="" />
									<img
										className="position-absolute"
										src={mobileShape1}
										alt=""
									/>
									<img
										className="position-absolute"
										src={mobileShape2}
										alt=""
									/>
									<img
										className="position-absolute"
										src={mobileShape3}
										alt=""
									/>
									<img
										className="position-absolute"
										src={mobileShape4}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookAppointment;
