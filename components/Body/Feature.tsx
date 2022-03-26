import { CgArrowLongRight } from 'react-icons/cg';
import { data } from '../../data';
import FeaturesCard from './Card/FeaturesCard';

const Feature = () => {
	return (
		<div>
			<div className='flex flex-wrap items-center'>
				<div className='flex-4 2xl:w-[58.33333333%] lg:w-[41.666666667%] w-full'>
					<div className='relative inline-block mb-[30px] max-w-[85%] sm:max-w-[90%]'>
						<img src='/feature_woman.png' alt='' />
						<div className='absolute top-0 left-0 w-full h-full rounded-full'>
							<div className='relative w-full h-full rounded'>
								<img
									src='/feature_illustration.png'
									alt=''
									className='illustrate'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex-4 2xl:w-[41.666666667%] lg:w-[58.33333333%] w-full'>
					<div className='pl-[55px] mb-[30px]'>
						<div className='mb-[30px]'>
							<h3 className='2xl:text-[48px] sm:text-[30px] md:text-[39px] lg:text-[40px] font-serif font-bold text-[25px]'>
								Let’s Something Know About Myself
							</h3>
						</div>
						<p className='text-[16px] font-normal leading-[1.86] text-primary-lightblue mb-[15px] font-serif'>
							My path to self employment, a natural evolution.
							After 7 years mastering my craft, I was still an
							employee and I simply had reached a ceiling of how
							much money I could earn in my career.
						</p>
						<ul className='mt-[25px]'>
							{data.map((dat, index) => (
								<FeaturesCard data={dat} key={index} />
							))}
						</ul>
						<div className='mt-25px'>
							<a
								href=''
								className='h-[50px] bg-primary-100 text-primary leading-[50px] flex items-center w-[200px] px-[25px] font-bold rounded transition-all duration-[0.5s] hover:bg-primary hover:text-white'>
								Learn More
								<CgArrowLongRight className='icon' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
