import { FaCheck } from 'react-icons/fa';

const text = [
	'Web Design',
	'Graphics Design',
	' Web Development',
	' Digital Marketing',
	' IT Consulting',
	'Co-Working',
];

const FooterRight2 = () => {
	return (
		<div className='pl-9 mb-7'>
			<div className='mb-7'>
				<h4 className='mb-8 text-[28px] text-primary-priy font-bold'>
					Service
				</h4>
			</div>
			<div>
				<ul>
					{text.map((text, index) => (
						<li
							key={index}
							className='relative flex items-center transition-all duration-[0.5s] text-primary-lightblue hover:text-primary hover:tracking-[1.5px]'>
							<FaCheck />
							<a href='' className='pl-5 leading-[2.66]  '>
								{text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FooterRight2;
