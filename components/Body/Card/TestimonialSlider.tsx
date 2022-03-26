import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import SliderCard from './SliderCard';
import { slider } from '../../../data';

SwiperCore.use([Navigation, Autoplay]);
const TestimonialSlider = () => {
	return (
		<div className='slider'>
			<div className='xl:ml-[-210px] ml-0'>
				<Swiper
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={10}
					autoplay={true}
					breakpoints={{
						'992': {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						'1200': {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						'1400': {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
					className=''
					navigation={{
						nextEl: '.next',
						prevEl: '.prev',
					}}
					loop={true}>
					{slider.map((slide) => (
						<SwiperSlide
							key={slide.name}
							className='pb-[60px] md:px-[50px] px-[30px] pt-[145px] relative bg-white overflow-hidden slide mb-8'>
							<SliderCard slide={slide} />
						</SwiperSlide>
					))}
					<div className='left-0 flex items-center ml-32 bottom-10 sm:justify-center '>
						<button className='h-[50px] w-[50px] flex items-center justify-center bg-white active:bg-primary rounded next'>
							<CgArrowLongLeft />
						</button>
						<button className='h-[50px] w-[50px] flex items-center justify-center bg-white ml-3 active:bg-primary rounded prev'>
							<CgArrowLongRight />
						</button>
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default TestimonialSlider;
