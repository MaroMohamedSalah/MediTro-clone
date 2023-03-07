import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import menuLogo from "../images/menu logo.png";
import "./Nav.css";
const NavBar = () => {
	useEffect(() => {
		let meddleArea = Array.from(
			document.querySelectorAll(".middle-area .dropdown")
		);
		meddleArea.forEach((link) => {
			if (window.matchMedia("(max-width: 768px)").matches) {
				link.onclick = () => {
					link.children[0].classList.add("active");
					link.children[0].classList.add("show");
					link.children[0].setAttribute("aria-expanded", "true");
					link.children[1].classList.add("show");
				};
				link.onmouseout = () => {
					link.children[0].classList.remove("active");
				};
			} else {
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
			}
		});
		const nav = document.getElementById("nav");
		window.addEventListener("scroll", () => {
			window.onscroll = () => {
				if (window.scrollY !== 0) {
					console.log(window.scrollY);
					nav.style.backgroundColor = "#fff";
					nav.style.boxShadow = "rgb(0 0 0 / 2%) 0px 7px 7px -3px";
				} else {
					nav.style.backgroundColor = "transparent";
					nav.style.boxShadow = "none";
				}
			};
		});
	}, []);
	return (
		<div className="NavBar" id="nav">
			<div className="container-fluid">
				<nav
					className="navbar navbar-expand-lg bg-body-tertiary p-0 "
					aria-label="Offcanvas navbar large"
				>
					<a className="navbar-brand" href="/">
						<img className="img-fluid" src={logo} alt="" />
					</a>
					<button
						className="btn navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar2"
						aria-controls="#offcanvasNavbar2"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="sideBar offcanvas offcanvas-start w-100"
						data-bs-backdrop="false"
						tabindex="-1"
						id="offcanvasNavbar2"
						aria-labelledby="offcanvasScrollingLabel"
					>
						<div className="offcanvas-header justify-content-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body d-flex justify-content-between align-items-center flex-md-row flex-lg-row flex-column">
							<a className="navbar-brand d-block d-md-none d-lg-none" href="/">
								<img className="img-fluid" src={menuLogo} alt="" />
							</a>
							<div></div>
							<ul className="nav navbar-nav mb-2 mb-lg-0 middle-area me-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										<span className="position-relative">Home</span>
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
							<ul className="social d-flex d-md-none d-lg-none">
								<li className="linkedIn" id="linkedIn">
									<a href="https://www.linkedin.com/in/marwan-mohamed-636b25226/">
										<div>
											<i className="fa-brands fa-linkedin-in"></i>
										</div>
									</a>
								</li>
								<li className="git" id="git">
									<a href="https://github.com/MaroMohamedSalah">
										<div>
											<i className="fa-brands fa-github"></i>
										</div>
									</a>
								</li>
								<li className="insta" id="insta">
									<a href="https://www.instagram.com/maro_salah1/">
										<div>
											<i className="fa-brands fa-instagram"></i>
										</div>
									</a>
								</li>
								<li className="face" id="face">
									<a href="https://www.facebook.com/profile.php?id=100009187233222">
										<div>
											<i className="fa-brands fa-facebook-f"></i>
										</div>
									</a>
								</li>
							</ul>

							<ul className="d-md-flex d-lg-flex d-none secondary-area d-flex justify-content-between align-items-center m-0">
								<li className="search-btn">
									<button id="quikSearchBtn" type="button" className="btn-link">
										<i className="fa-solid fa-magnifying-glass"></i>
									</button>
								</li>
								<li className="num-bx d-none d-xl-block">
									<a href="tel:(+01)999888777">
										<i className="fas fa-phone-alt"></i> (+01) 999 888 777
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
