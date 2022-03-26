import Link from 'next/link';
import { header } from '../../data';
import { CgArrowLongRight } from 'react-icons/cg';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
	return (
		<div className='absolute top-0 left-0 right-0 py-[27px] px-4 z-10'>
			<div className='contain'>
				<div className='flex flex-wrap items-center'>
					<Link href='/'>
						<a className='flex-4 2xl:w-[25%] md:w-[16.6666666667%] w-[50%] text-4xl flex items-center font-bold font-mono'>
							<FaLaptopCode className='mr-4 text-primary'/>
							AJAO
						</a>
					</Link>

					<div className='flex-4 2xl:w-[50%] md:w-[58.3333333333%] hidden w-full xl:inline-flex'>
						<div className='items-start lg:flex-row lg:items-center lg:h-auto'>
							<div className=''>
								{header.map((item, index) => (
									<Link key={index} href={item.path}>
										<a className='px-3 py-2 capitalize'>
											{item.title}
										</a>
									</Link>
								))}{' '}
							</div>
						</div>
					</div>
					<div className='flex-4 w-[50%] md:w-[83.333333333%] lg:w-[25%] xl:w-[25%]'>
						<div className='flex items-center justify-end'>
							<button className='bg-primary h-[50px] px-[35px] transition-all xl:flex hidden items-center text-white hover:bg-transparent hover:border hover:border-primary-priy hover:text-primary-priy focus:outline-none'>
								Let Talk
								<CgArrowLongRight className='ml-1' />
							</button>
							<RiBarChartHorizontalLine
								size={40}
								className=' w-[35px] ml-[35px] cursor-pointer inline-block
								'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
