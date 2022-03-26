import { FunctionComponent } from 'react';
import { Category } from '../../../type';

export const NavItem: FunctionComponent<{
	value: Category | 'Veiw all';
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className =
		'bg-transparent 2xl:mr-[15px] 2xl:mb-[15px] mr-[2px] mb-[13px] duration-[0.5s] py-[9px] px-[12px] transition hover:bg-white text-sm font-medium border-0 text-primary-priy 2xl:py-[12px] 2xl:px-[20px] focus:outline-none';
	if (active === value) className += ' bg-white';

	return (
		<button
			className={className}
			onClick={() => handlerFilterCategory(value)}>
			{value}
		</button>
	);
};

const PortfolioNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className='mb-[45px]'>
			<NavItem value='Veiw all' {...props} />
			<NavItem value='Design' {...props} />
			<NavItem value='Development' {...props} />
			<NavItem value='Branding' {...props} />
			<NavItem value='Photo' {...props} />
			<NavItem value='Marketing' {...props} />
		</div>
	);
};

export default PortfolioNavbar;
