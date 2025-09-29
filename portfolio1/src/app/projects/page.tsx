	import Image from "next/image";

	const projects = [
	{
		title: "E-Commerce Website",
		description:
			"A modern e-commerce platform built and deployed on GitHub Pages. Features product listings, shopping cart, and responsive design.",
		image: "/ecommerce-preview.png",
		features: ["React", "GitHub Pages", "Responsive Design"],
		demo: "https://cayla4224.github.io/e-commerce/",
		code: "https://github.com/cayla4224/e-commerce",
	},
	{
		title: "SaaS Starter",
		description:
			"A starter template for SaaS applications, featuring authentication, subscription management, and a modern dashboard UI.",
		image: "/saas-starter-preview.png",
		features: ["Next.js", "Stripe", "Authentication", "Dashboard"],
		demo: "",
		code: "https://github.com/cayla4224/saas-starter",
	},
	{
		title: "Realtime Collaboration",
		description:
			"A collaborative platform enabling multiple users to edit documents in real time. Built with WebSockets and a modern React UI.",
		image: "/realtime-collaboration-preview.png",
		features: ["React", "WebSockets", "Real-time Editing", "Collaboration"],
		demo: "",
		code: "https://github.com/cayla4224/realtimecollaboration",
	},
];

export default function Projects() {
	return (
		<main className="flex flex-col items-center min-h-screen p-8 bg-white text-gray-800">
			<h1 className="text-5xl font-bold mb-10 text-blue-700">Projects</h1>
					<div className="flex flex-col gap-8 w-full max-w-2xl pb-4 mx-auto">
						{projects.map((project, idx) => (
							  <div key={idx} className="w-full border rounded-lg shadow-md p-4 bg-gray-50 flex flex-col items-center">
											<Image
												src={project.image}
												alt={project.title + ' preview'}
												width={220}
												height={120}
												className="mb-3 rounded object-cover"
											/>
								<h2 className="text-2xl font-semibold mb-2 text-blue-600">{project.title}</h2>
								<p className="mb-4 text-center">{project.description}</p>
								<ul className="flex flex-wrap gap-2 mb-4">
									{project.features.map((feature, i) => (
										<li key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{feature}</li>
									))}
								</ul>
								<div className="flex gap-4 mb-2">
									{project.demo && (
										<a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Live Demo</a>
									)}
									{project.code && (
										<a href={project.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Source Code</a>
									)}
								</div>
							</div>
						))}
					</div>
		</main>
	);
}
