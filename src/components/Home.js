import React from "react";
import image from "../resources/me_pic.png";
import "../resources/Home.scss";

export default function Home() {
	return (
		<body className="typingContainer">
			{/* <img
				src={image}
				alt="My pic"
				className="absolute object-cover w-full h-full"
			></img> */}
			<div className="flex items-center content-center justify-around absolute object-cover w-full h-full text-9xl font-bold">
				<h1 className="typing">Hi! I'm Aditya.</h1>
			</div>
		</body>
	);
}
