import { FunctionComponent } from 'react';
import { IBlog } from '../../../type';
import { CgArrowLongRight } from 'react-icons/cg';
const BlogCard: FunctionComponent<{ blog: IBlog }> = ({
	blog: { card, date, Icon, image_path, title },
}) => {
	return (
		<div className='flex-4 2xl:w-[33.333333%] px-19 md:w-2/4 w-full max-w-full'>
			<div className='relative z-10 bg-white shadow-xl gray mb-[30px]'>
				<div className='relative overflow-hidden im'>
					<a href='#!' className='img'>
						<img
							src={image_path}
							alt=''
							className='transition duration-[.7s] w-full'
						/>
					</a>
				</div>
				<div className='relative'>
					<div className='relative p-12 pb-10 transition duration-[.7s]'>
						<span className='absolute leading-[30px] font-medium px-4 bg-white rounded-md shadow-lg h-7 left-12 -top-4 text-primary-priy z-[99] transition'>
							{card}
						</span>
						<h4 className='text-2xl font-bold mb-[35px] font-serif'>
							<a href=''>{title}</a>
						</h4>
						<div className=''>
							<a
								href='#!'
								className='flex items-center text-base text-primary-lightblue'>
								<Icon className='mr-4' />
								{date}
							</a>
						</div>
					</div>
					<div className='static w-full px-12 pb-12 scale-y-[1] transform bg-white'>
						<a
							href=''
							className='flex items-center w-[200px] h-[50px] bg-primary px-[35px] font-bold rounded transition text-primary-100 duration-[.3s] text- hover:text-primary hover:bg-primary-100'>
							Read More
							<CgArrowLongRight className='ml-4'/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
