import { useEffect } from "react";
import "./ArrowToTop.css";
const ArrowToTop = () => {
	useEffect(() => {
		let toTopBtn = document.getElementById("toTop");
		window.addEventListener("scroll", () => {
			if (window.scrollY > 800) {
				toTopBtn.style.opacity = "1";
				toTopBtn.style.display = "block";
			} else {
				toTopBtn.style.opacity = "0";
				toTopBtn.style.display = "none";
			}
		});
		toTopBtn.onclick = () => {
			window.scrollTo(0, 0);
		};
	}, []);
	return (
		<div className="ArrowToTop btn" id="toTop">
			<i class="fa-solid fa-angle-up"></i>
		</div>
	);
};

export default ArrowToTop;
