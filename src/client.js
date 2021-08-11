import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "y873sr1w",
	dataset: "production",
	useCdn: true,
});
