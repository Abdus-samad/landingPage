import { FunctionComponent } from 'react';
import { IList } from '../../../type';

const FeaturesCard: FunctionComponent<{ data: IList }> = ({
	data: { Icon, title },
}) => {
	return (
		<li className='flex items-center text-[18px] font-medium text-black relative mb-[25px]'>
			<Icon size={25} className='mr-4 text-primary '/>
			{title}
		</li>
	);
};

export default FeaturesCard;
