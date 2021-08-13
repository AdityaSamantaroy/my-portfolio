import React from "react";
import sanityClient from "../client.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { graphql } from "graphql";

export default function Post() {
	const [postData, setPost] = useState(null);

	// {
	// 		allPost(where: { category: { title: { eq: "Blog Post" } } }) {
	// 			title,
	// 			slug {
	// 			current,
	// 			},
	// 			mainImage {
	// 			asset {
	// 				_id,
	// 				url,
	// 				altText,
	// 			}
	// 			},
	// 		}
	// 		}

	useEffect(() => {
		const query = `
			*[_type == "post"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url,
						altText
					},
				}
			}
		`;
		// console.log(query);
		sanityClient
			.fetch(query)
			.then((data) => {
				console.log(data);
				setPost(data);
			})
			.catch(console.error);
	}, []);

	return (
		<body className="bg-clouds h-screen">
			<section className="ml-6 mr-6">
				<div className="font-normal text-3xl p-2">Blog Posts Page</div>
				<div className="container mx-auto m-3 flex-wrap grid grid-cols-4 gap-6 ">
					{postData &&
						postData.map((post, index) => {
							return (
								<article className="container mx-auto h-1em w-1em">
									<Link
										to={"/post/" + post.slug.current}
										key={post.slug.current}
									>
										<span
											className="block h-64 relative shadow rounded leading-snug bg-white"
											key={index}
										>
											<img
												className="w-full h-full rounded-r object-cover absolute"
												src={post.mainImage.asset.url}
												alt={
													post.mainImage.asset.altText
												}
											/>
										</span>
										<span
											className="block w-full relative flex justify-begin items-end pr-4 pb-4"
											key={index}
										>
											<h3>{post.title}</h3>
										</span>
									</Link>
								</article>
							);
						})}
				</div>
			</section>
		</body>
	);
}
