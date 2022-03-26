import TestimonialSlider from './Card/TestimonialSlider';

const Testimonial = () => {
	return (
		<div className='relative w-full pb-22 pt-28 bg-gradient-to-tr from-gray-400 via-gray-100 to-gray-900'>
			<div className='contain'>
				<div className='flex flex-wrap'>
					<div className='w-full flex-4'>
						<div className='mb-20 text-center'>
							<h2 className='mb-4 2xl:text-[48px] font-bold text-primary-priy text-[25px]'>
								What Our Clients Say <br />
								About Myself
							</h2>
						</div>
					</div>
				</div>
			</div>
			<TestimonialSlider />
		</div>
	);
};

export default Testimonial;
