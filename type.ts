import { IconType } from 'react-icons/lib';

export interface INav {
	title: string;
	path: string;
	active: boolean;
}

export interface IFeature {
	Icon: IconType;
	title: string;
}

export interface IList {
	Icon: IconType;
	title: string;
}

export interface IPortfolio {
	id: number;
	name: string;
	image_path: string;
	category: Category[];
}

export interface ISkill {
	name: string;
	level: string;
}

export interface ICounter {
	title: string;
	number: number;
	rating: number;
}
export interface ISlide {
	name: string;
	title: string;
	rating: number;
	data: string;
	image_path: string;
}

export interface IBlog {
	title: string;
	card: string;
	Icon: IconType;
	date: string;
	image_path: string;
}
export interface IGallery {
	id: number;
	image_path: string;
}
export type Category =
	| 'Design'
	| 'Development'
	| 'Branding'
	| 'Photo'
	| 'Marketing';
