import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header>
			<div>
				<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4 ">
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<NavLink
							to="/"
							exact
							className="flex items-center flex-shrink-0 text-white mr-6 lg:inline-block"
							activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
						>
							<span className="font-medium text-5xl tracking-widest font-mono ">
								Aditya Samantaroy
							</span>
						</NavLink>
					</div>
					<div className="w-full block inline-block justify-end flex-grow lg:flex lg:items-center lg:w-auto text-2xl">
						<div>
							<NavLink
								to="/post"
								exact
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
								activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
							>
								Blog Posts
							</NavLink>
							<NavLink
								to="/project"
								exact
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
								activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
							>
								Projects
							</NavLink>
							<NavLink
								to="/about"
								exact
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
								activeClassName="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
							>
								About Me
							</NavLink>
						</div>
						<div className="inline-flex py-3 px-3 my-6">
							<SocialIcon
								url="mailto:adityasamantaroy@gmail.com"
								className="mr-4"
								target="_blank"
								fgColor="#fff"
								style={{ height: 35, width: 35 }}
							/>
							<SocialIcon
								url="https://github.com/AdityaSamantaroy"
								className="mr-4"
								target="_blank"
								fgColor="#fff"
								style={{ height: 35, width: 35 }}
							/>
							<SocialIcon
								url="https://www.linkedin.com/in/aditya-samantaroy-600502194/"
								className="mr-4"
								target="_blank"
								fgColor="#fff"
								style={{ height: 35, width: 35 }}
							/>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
