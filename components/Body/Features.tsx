import { features } from '../../data';
import FeatureCard from './Card/FeatureCard';
import Feature from './Feature';
const Features = () => {
	return (
		<div className='2xl:pt-[100px] 2xl:pb-[120px] py-[90px] sm:pt-[80px] md:pt-[110px] md:pb-[90px]'>
			<div className='contain'>
				<div className='flex flex-wrap'>
					<div className='w-full flex-4'>
						<div className='mb-[75px] text-center'>
							<h2 className='2xl:text-[48px] font-sans font-bold lg:text-[40px] md:text-[38px] text-[25px] sm:text-[30px] sm:mb-[30px] '>
								We Provide Best Solutions <br />
								For Your Agency
							</h2>
						</div>
					</div>
				</div>
				<div className='mb-[90px]'>
					<div className='flex flex-wrap items-center justify-center 2xl:justify-between sm:justify-evenly'>
						{features.map((feature, index) => (
							<div
								className='transition flex-4 duration-[.2s] text-center mb-[40px] mx-[30px]'
								key={index}>
								<span
									className='flex items-center justify-center mx-auto w-[160px] h-[160px] 
								bg-gradient-to-tr from-gray-200 via-gray-400  to-gray-600 leading-[180px] rounded-full mb-[30px] group 
								hover:bg-gradient-to-tr  hover:from-primary hovre:via-gray-100  hover:to-primary-pink transition-all duration-[0.5s] '>
									<FeatureCard feature={feature} />
								</span>
								<h5 className='text-[20px] font-bold hover:text-primary'>
									<a href=''>{feature.title}</a>
								</h5>
							</div>
						))}
					</div>
				</div>
				<Feature />
			</div>
		</div>
	);
};
export default Features;
