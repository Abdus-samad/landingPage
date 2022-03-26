import Head from 'next/head';
import Header from '../components/Layout/Header';
import Home from '../components/Body/Home';
import Features from '../components/Body/Features';
import Portfolio from '../components/Body/Portfolio';
import Skills from '../components/Body/Skills';
import { Counter } from '../components/Body/Counter';
import Testimonial from '../components/Body/Testimonial';
import Blog from '../components/Body/Blog';
import Branding from '../components/Body/Branding';
import Contact from '../components/Body/Contact';
import Footer from '../components/Body/Footer';
import FooterCopy from '../components/Footer/FooterCopy';

export default function Index() {
	return (
		<>
			<Head>
				<title>My</title>
			</Head>
			<div className='overflow-hidden bg-gray-200'>
				<Header />
				<Home />
				<Features />
				<Portfolio />
				<Skills />
				<Counter />
				<Testimonial />
				<Blog />
				<Branding />
				<Contact />
				<Footer />
				<FooterCopy />
			</div>
		</>
	);
}
