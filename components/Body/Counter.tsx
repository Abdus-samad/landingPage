import { counter } from '../../data';
import Count from './Card/Count';

export const Counter = () => {
	return (
		<div className='pt-[120px]'>
			<div className='contain'>
				<div className='flex flex-wrap justify-between'>
					{counter.map((count, index) => (
						<Count count={count} key={index} />
					))}
					<div className='mb-[30px] order-1 2xl:order-3 flex-1 2xl:flex-4'>
						<div className='mb-[30px]'>
							<h2 className='text-2xl font-bold 2xl:text-5xl'>
								Great Achievment <br />
								In My Career
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
