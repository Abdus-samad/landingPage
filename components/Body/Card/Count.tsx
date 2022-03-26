import { FunctionComponent } from 'react';
import { ICounter } from '../../../type';

const Count: FunctionComponent<{ count: ICounter }> = ({
	count: { number, rating, title },
}) => {
	return (
		<div className='mb-[30px] order-2'>
			<h2 className='flex mb-1 text-5xl font-bold'>
				<span>{number}</span>
				<span>+</span>
			</h2>
			<span className='mb-4 text-base font-medium text-primary-lightblue'>
				{title}
			</span>
			<div className='flex items-center'>
				{Array(rating)
					.fill(0)
					.map((_, i) => (
						<p key={i}>⭐</p>
					))}
			</div>
		</div>
	);
};

export default Count;
