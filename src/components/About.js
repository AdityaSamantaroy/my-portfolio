import React from "react";
// import { Link } from "react-router-dom";
import my_pic from "../resources/me_pic.png";

export default function About() {
	return (
		<body className="bg-clouds h-screen">
			<div className="font-normal text-4xl p-2 text-teal-900">
				About Me
			</div>
			{/* <div className="ml-6 mr-6 flex items-center content-center object-cover w-2/3 h-2/3 flex-wrap grid grid-cols-1 gap-6 ">
				<div class="w-full lg:max-w-full lg:flex">
					<div
						class="h-60 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-me"
						title="My profile pic"
					></div>

					<div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-teal-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between  h-64 relative shadow">
						<div class="mb-8">
							<p class="text-gray-700 text-base">
								Hello! I'm a software developer.
							</p>
						</div>
					</div>
				</div>
			</div> */}

			<div className="h-screen grid auto-cols-auto auto-rows-auto place-items-center w-screen">
				<div className="place-self-center h-full w-full md:w-1/2 lg:w-2/5 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
					<div className="bg-white rounded-lg m-h-64 transform hover:scale-105 hover:shadow-xl transition duration-300">
						<div className="w-full rounded-t-lg">
							<img
								src={my_pic}
								alt=""
								class="rounded-t-lg block ml-auto mr-auto"
							/>
						</div>
						<div className="rounded-lg p-4 bg-white flex flex-col">
							<div>
								{/* <h5 class="text-white text-2xl font-bold leading-none">
								iPhone 11 Pro Max
							</h5> */}
								<div className="text-gray-400">
									<p>
										Hello! I'm a software developer and I
										love building things. Currently I am a
										junior at Indian Institute of
										Technology, Patna, pursuing Electrical
										Engineering.
									</p>
									<p>
										I have experience in web development
										using the MERN stack, and research
										experience in Machine Learning and Deep
										Learning. I also enjoy participating in
										coding competitions and solving hard
										problems.
									</p>
									<p>
										When I'm not doing this, you'll find me
										playing the guitar or sketching to relax
										and chill!
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<button className="bg-transparent hover:bg-teal-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg mr-4 ml-4 mt-4">
									<a
										href="https://drive.google.com/file/d/1YuCkoGbklF4SWrGRyrh5lkGD15-own2M/view?usp=sharing"
										target="_blank"
										rel="noreferrer"
									>
										Résumé
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="ml-6 mr-6 position-relative">
				 <div></div>
				<div></div>
			</div> */}
		</body>
	);
}
