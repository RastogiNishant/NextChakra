export const CONTACT_INFO = {
	email: "rastoginishant@yahoo.in",
	github: "https://github.com/RastogiNishant",
	linkedin: "https://www.linkedin.com/in/nishant-rastogi-573a01340/",
};

export const NAV_LINKS = ["About", "Projects", "Experience", "Contact"];
import CoffeeShop from "@/public/coffee_shop.png";
import Vantage from "@/public/vantage.png";
import Breeze from "@/public/breeze.png";
import Jobit from "@/public/jobit.png";

export const PROJECTS = [
	{
		title: "Coffee Shop",
		description: "A coffee shop built with Next.js, Shadcn and Tailwind",
		image: CoffeeShop,
		demoLink:
			"https://www.upwork.com/fl/nishantvrastogi?p=1869267637083750400",
		techStack: ["Next.js", "Shadcn", "Tailwind"],
	},
	{
		title: "VOD SaaS Application",
		description:
			"A SaaS based web application for processing VOD content in the cloud.",
		image: Vantage,
		demoLink:
			"https://www.upwork.com/fl/~0139f870d60c09bc2d?p=1862567430028099584",
		techStack: ["React", "Express", "PostgreSQL", "Docker"],
	},
	{
		title: "Real Estate CRM",
		description:
			"A modern real estate platform with virtual tours and booking system",
		image: Breeze,
		demoLink:
			"https://www.upwork.com/fl/~0139f870d60c09bc2d?p=1788777469548466176",
		techStack: [
			"ReactJS",
			"Redux",
			"SCSS",
			"WebSocket",
			"JavaScript",
			"NodeJS",
			"PostgreSQL",
		],
	},
	{
		title: "Jobit World",
		description: "A job portal for job seekers and employers",
		image: Jobit,
		demoLink:
			"https://www.upwork.com/fl/~0139f870d60c09bc2d?p=1862567430028099584",
		techStack: ["React", "Node.js", "MongoDB"],
	},
];

export const EXPERIENCES = [
	{
		role: "Senior Software Engineer",
		company: "Upwork",
		duration: "2021 - Present",
		description:
			"Working as a independent full stack developer for various clients",
	},
	{
		role: "Senior Software Engineer",
		company: "R Systems International",
		duration: "2019 - 2021",
		description:
			"Developed and maintained multiple client projects, focusing on scalable architecture and performance optimization.",
	},
	{
		role: "Software Engineer",
		company: "The Big Stack",
		duration: "2019",
		description:
			"Worked on various web applications using modern JavaScript frameworks and backend technologies.",
	},
	{
		role: "Software Engineer",
		company: "GlobalLogic Pvt Ltd - Hitachi Group",
		duration: "2015 - 2019",
		description:
			"Worked on various web applications using modern JavaScript frameworks and backend technologies.",
	},
];
