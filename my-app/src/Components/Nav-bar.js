import { useEffect } from "react";
import logo from "../images/logo.png";
import "./Nav.css";
const NavBar = () => {
	useEffect(() => {
		let meddleArea = Array.from(
			document.querySelectorAll(".middle-area .dropdown")
		);
		meddleArea.forEach((link) => {
			link.onmouseover = () => {
				link.children[0].classList.add("active");
				link.children[0].classList.add("show");
				link.children[0].setAttribute("aria-expanded", "true");
				link.children[1].classList.add("show");
			};
			link.onmouseout = () => {
				link.children[0].classList.remove("active");
				link.children[0].classList.remove("show");
				link.children[0].setAttribute("aria-expanded", "false");
				link.children[1].classList.remove("show");
			};
		});
	}, []);
	return (
		<div className="NavBar">
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img src={logo} alt="" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 middle-area">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="/"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Pages <i className="fas fa-plus"></i>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="#">
												About Us
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Our Team
											</a>
										</li>

										<li>
											<a className="dropdown-item" href="#">
												FAQ's
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Booking
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Error 404
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Login / Register
											</a>
										</li>
									</ul>
								</li>

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="/"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Services <i className="fas fa-plus"></i>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="#">
												Services
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Services detail
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="/"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Blog <i className="fas fa-plus"></i>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="#">
												Blogs
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Blogs Details
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="#">
										Contact Us
									</a>
								</li>
							</ul>

							<ul className="secondary-area d-flex justify-content-center align-items-center m-0">
								<li className="search-btn">
									<button id="quikSearchBtn" type="button" className="btn-link">
										<i className="fa-solid fa-magnifying-glass"></i>
									</button>
								</li>
								<li class="num-bx d-none d-xl-block">
									<a href="tel:(+01)999888777">
										<i class="fas fa-phone-alt"></i> (+01) 999 888 777
									</a>
								</li>
								<li className="btn-area">
									<a className="btn btn-primary shadow contact" href="/">
										CONTACT US{" "}
										<i className="btn-icon-bx fas fa-chevron-right"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
