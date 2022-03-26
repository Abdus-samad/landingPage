import { blog } from '../../data';
import BlogCard from './Card/BlogCard';

const Blog = () => {
	return (
		<div className='pt-28'>
			<div className='contain'>
				<div className='flex flex-warp px-19'>
					<div className='w-full flex-4'>
						<div className='mb-[75px]'>
							<h2 className='mb-4 2xl:text-[48px] text-[25px] font-bold text-primary-priy'>
								Every Single Update <br />
								News & Blog
							</h2>
						</div>
					</div>
				</div>
				<div className='pt-1 border-b border-gray-100 pb-[100px]'>
					<div className='flex flex-wrap mx-19'>
						{blog.map((blog, index) => (
							<BlogCard blog={blog} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
