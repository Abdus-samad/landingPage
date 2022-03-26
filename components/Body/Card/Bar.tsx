import { FunctionComponent } from 'react';
import { ISkill } from '../../../type';

const Bar: FunctionComponent<{ data: ISkill }> = ({
	data: { level, name },
}) => {
	const bar_width = `${level}%`;

	return (
		<div className='mb-12 last:mb-0'>
			<span className='font-mono text-xl font-bold text-primary-priy'>
				{name}
			</span>
			<span className='float-right font-mono text-xl font-bold text-primary-priy'>
				{level}%
			</span>
			<div className='flex h-3 mt-3 bg-gray-400 rounded-md'>
				<div
					className='flex flex-col justify-center rounded-md bg-primary'
					style={{ width: bar_width }}></div>
			</div>
		</div>
	);
};

export default Bar;
