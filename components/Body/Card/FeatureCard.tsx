import { FunctionComponent } from 'react';
import { IFeature } from '../../../type';

const FeatureCard: FunctionComponent<{ feature: IFeature }> = ({
	feature: { Icon },
}) => {
	return (
		<div className='text-[60px] group-hover:text-white text-primary transition-all duration-[0.5s] z-10 relative'>
			<Icon />
		</div>
	);
};

export default FeatureCard;
