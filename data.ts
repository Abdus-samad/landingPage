import {
	IBlog,
	ICounter,
	IFeature,
	IList,
	INav,
	IPortfolio,
	ISkill,
	ISlide,
} from './type';
import { BsCalendar2, BsGem } from 'react-icons/bs';
import {
	FaLaptopCode,
	FaLayerGroup,
	FaBroadcastTower,
	FaBullhorn,
	FaCheckCircle,
} from 'react-icons/fa';

export const header: INav[] = [
	{
		title: 'Home',
		path: '/',
		active: true,
	},
	{
		title: 'features',
		path: '/',
		active: true,
	},
	{
		title: 'about',
		path: '/',
		active: true,
	},
	{
		title: 'portfolio',
		path: '/',
		active: true,
	},
	{
		title: 'blog',
		path: '/',
		active: true,
	},
	{
		title: 'contact',
		path: '/',
		active: true,
	},
];

export const features: IFeature[] = [
	{
		Icon: BsGem,
		title: 'Web Design',
	},
	{
		Icon: FaLaptopCode,
		title: 'Development',
	},
	{
		Icon: FaLayerGroup,
		title: 'Product Design',
	},
	{
		Icon: FaBroadcastTower,
		title: 'IT Consulting',
	},
	{
		Icon: FaBullhorn,
		title: 'Marketing',
	},
];

export const data: IList[] = [
	{
		Icon: FaCheckCircle,
		title: 'Professional Services',
	},
	{
		Icon: FaCheckCircle,
		title: 'Exclusive Support Team',
	},
	{
		Icon: FaCheckCircle,
		title: 'Best Marketing Strategy',
	},
];

export const portfolio: IPortfolio[] = [
	{
		id: 1,
		name: 'Graphic <br /> Design',
		category: ['Branding'],
		image_path: '/portfolio1.jpg',
	},
	{
		id: 2,
		name: 'Mockup  <br /> & Branding',
		category: ['Design', 'Development', 'Marketing'],
		image_path: '/portfolio2.jpg',
	},
	{
		id: 3,
		name: 'Creative  <br /> Shoes',
		category: ['Photo'],
		image_path: '/portfolio3.jpg',
	},
	{
		id: 4,
		name: 'Design  <br /> Branding',
		category: ['Design', 'Branding', 'Marketing'],
		image_path: '/portfolio4.jpg',
	},
];

export const languages: ISkill[] = [
	{
		name: 'Design  & Branding',
		level: '79',
	},
	{
		name: 'Web Development',
		level: '95',
	},
	{
		name: 'Business Strategy',
		level: '73',
	},
	{
		name: 'Photography',
		level: '85',
	},
];

export const counter: ICounter[] = [
	{
		title: 'project done',
		number: 320,
		rating: 0,
	},
	{
		title: 'Saticfied Clients',
		number: 563,
		rating: 5,
	},
	{
		title: 'Awards Winning',
		number: 896,
		rating: 5,
	},
];

export const slider: ISlide[] = [
	{
		name: 'Micheal Bullock',
		title: 'Managing Director',
		image_path: '/client01.jpg',
		data: 'Wonderful packaging. Delivery was notably speedy. Item is of superior quality. Exceptionally speedy dispatch.',
		rating: 5,
	},

	{
		name: 'Stephen Parker',
		title: 'CEO & Founder',
		image_path: '/client02.jpg',
		data: 'Super quality! Quick delivery. Ever so marvelous packaging. First-rate service. Thank you and Always going above!',
		rating: 5,
	},
	{
		name: 'Andrew Deer',
		title: 'Technical Director',
		image_path: '/client03.jpg',
		data: 'Quality of the wrapping was grand. Delivery was remarkably speedy. The item was superior &amp; matchless. Thank!',
		rating: 5,
	},

	{
		name: 'Joshua Murray',
		title: 'Web Devloper',
		image_path: '/client04.jpg',
		data: 'Exceptionally sterling delivery. The item was optimum and standout! Packaging was outstanding &amp; quality work.',
		rating: 5,
	},
	{
		name: 'Arabella',
		title: 'Creative Director',
		image_path: '/client05.jpg',
		data: 'High-standard packaging. Item is of first-rate quality &amp; Speedy! Definitely I will again use her into my upcoming task.',
		rating: 5,
	},
	{
		name: 'Matilda',
		title: 'Photographer',
		image_path: '/client06.jpg',
		data: 'Super quality! Quick delivery. Ever so marvelous packaging. First-rate service. Thank you and Always going above!',
		rating: 5,
	},
];

export const blog: IBlog[] = [
	{
		image_path: '/blog1.jpg',
		card: 'Design',
		title: 'Designer focuses on creation & implementation ',
		Icon: BsCalendar2,
		date: '25 March 2021',
	},
	{
		image_path: '/blog2.jpg',
		card: 'Development',
		title: 'Make a free website with our free website builder',
		Icon: BsCalendar2,
		date: '25 March 2021',
	},
	{
		image_path: '/blog3.jpg',
		card: 'Branding',
		title: 'Creating brand identity & establishes consistency',
		Icon: BsCalendar2,
		date: '25 March 2021',
	},
];

export const image = [
	{ id: 1, image_path: '/client01.jpg' },
	{ id: 2, image_path: '/client02.jpg' },
	{ id: 3, image_path: '/client03.jpg' },
	{ id: 4, image_path: '/client04.jpg' },
];
