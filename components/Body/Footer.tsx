import FooterCopy from '../Footer/FooterCopy';
import FooterLeft from '../Footer/FooterLeft';
import FooterLeft2 from '../Footer/FooterLeft2';
import FooterRight from '../Footer/FooterRight';
import FooterRight2 from '../Footer/FooterRight2';

const Footer = () => {
	return (
		<>
			<div className='2xl:pt-[120px] 2xl:pb-[80px]'>
				<div className='contain'>
					<div className='flex flex-wrap mx-19'>
						<div className='w-full px-19 sm:flex-4 sm:w-2/4 lg:flex-4 lg:w-1/4'>
							<FooterRight />
						</div>
						<div className='w-full px-19 sm:flex-4 sm:w-2/4 lg:flex-4 lg:w-1/4'>
							<FooterRight2 />
						</div>
						<div className='w-full px-19 sm:flex-4 sm:w-2/4 lg:flex-4 lg:w-1/4'>
							<FooterLeft2 />
						</div>
						<div className='w-full px-19 sm:flex-4 sm:w-2/4 lg:flex-4 lg:w-1/4'>
							<FooterLeft />
						</div>
					</div>
				</div>
			</div>
			{/* <FooterCopy /> */}
		</>
	);
};

export default Footer;
