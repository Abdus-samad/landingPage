import Image from 'next/image';
import { FunctionComponent } from 'react';
import { ISlide } from '../../../type';

const SliderCard: FunctionComponent<{ slide: ISlide }> = ({
	slide: { data, image_path, name, rating, title },
}) => {
	return (
		<>
			<div className='rounded-[50%] w-[108px] h-[108px] absolute left-[-14px] top-[-18px] overflow-hidden'>
				<Image
					src={image_path}
					alt=''
					className='w-full'
					width={200}
					height={200}
				/>
			</div>
			<div>
				<div className='mb-5'>
					<h2 className='mb-3 text-xl font-bold '>{name}</h2>
					<span className='text-sm font-medium uppercase text-primary'>
						{title}
					</span>
				</div>
				<p className='text-[15px] leading-7 mb-[21px] font-serif'>
					{data}
				</p>
				<div className='flex items-center'>
					{Array(rating)
						.fill(0)
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>
		</>
	);
};

export default SliderCard;
