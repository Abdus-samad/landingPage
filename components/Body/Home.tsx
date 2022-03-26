import Body from './HomePage';

const Home = () => {
	return (
		<div className='relative bg-gray-400 2xl:rounded-full h-[950px] w-full'>
			<div className='contain'>
				<div className='flex flex-wrap z-[9990]'>
					<div className='w-full flex-4'>
						<div className='relative flex items-center w-full h-[950px]'>
							<div className='absolute top-[210px] left-[80px]'>
								<div className='h-[20px] w-[20px] border-4 border-primary rounded-full' />
							</div>
							<div className='absolute left-[120px] bottom-[100px] '>
								<img src='/dot.png' alt='' />
							</div>
							<Body />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;