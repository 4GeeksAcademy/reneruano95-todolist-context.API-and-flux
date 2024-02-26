import React from "react";
import { FaHeart } from "react-icons/fa";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <FaHeart style={{ color: 'red' }} /> by{" "}
			<a href="https://github.com/reneruano95">Rene Ruano</a>
		</p>
	</footer>
);
