import { CgArrowLongRight } from 'react-icons/cg';

const HomePage = () => {
	return (
		<div className='flex px-2 py-24'>
			<div className='relative z-10 pt-[450px] sm:pt-[635px] md:pt-0 pb-[70px] md:pb-0'>
				<h2 className='2xl:text-[95px] 2xl:font-bold md:text-[72px] mb-[35px] font-serif text-[50px] text-primary-100'>
					Hello <br />
					I’m Hunter
				</h2>
				<p className='2xl:pl-[23px] relative mb-[30px] left text-primary-lightblue pl-[17px]'>
					Lorem ipsum dolor sit amet <br /> consectetur adipisicing
					elit. Nihil, ea!
				</p>
				<a
					href=''
					className='h-[50px] bg-white text-primary-priy leading-[50px] flex items-center w-[200px] px-[25px] font-bold rounded transition hover:bg-primary hover:text-white'>
					See Projects
					<CgArrowLongRight className='icon' />
				</a>
			</div>
			<div className='hero'>
				<img
					src='/lap.jpg'
					alt=''
					className='relative rounded-full -mt-9 w-[265px] 2xl:w-full sm:w-[430px] lg:w-[390px] md:w-[377px] max-w-full'
				/>
			</div>
			<div className='woman'>
				<img
					src='/.png'
					alt=''
					className='hidden sm:block sm:max-w-[150px] md:max-w-[130px] lg:max-w-[140px] xl:max-w-[380px] 2xl:max-w-full'
				/>
			</div>
		</div>
	);
};
export default HomePage;
