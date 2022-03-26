import Link from 'next/link';
import { useEffect, useState } from 'react';

const text = [
	{
		path: '/',
		title: 'membership',
	},
	{
		path: '/',
		title: 'membership',
	},
	{
		path: '/',

		title: 'membership',
	},
	{
		path: '/',

		title: 'membership',
	},
];

const FooterCopy = () => {
	const [current, setCurrent] = useState<any | null>(null);

	useEffect(() => {
		setCurrent(text[0]);
	}, []);

	return (
		<div>
			<div className='contain'>
				<div className='border-t border-gray-100'>
					<div className='flex flex-wrap items-center px-19'>
						<div className='w-full xl:flex-4 xl:w-[33.33333%] lg:flex-4 lg:w-[33.33333%] px-19 text-center order-2 lg:order-1 lg:text-left'>
							<p className='text-base text-primary-lightblue leading-[1]'>
								© 2021 AJAO. All Rights Reserved. Design by
								<a
									href=''
									className='transition-all text-primary duration-[.3s] font-semibold text-base hover:text-primary-lightblue ml-1'>
									Hadajcom
								</a>
							</p>
						</div>
						<div className='w-full xl:flex-4 xl:w-[66.66666%] lg:flex-4 lg:w-[66.666666%] px-19 order-1 lg:order-2 text-center lg:text-right '>
							<div>
								<ul className=''>
									{text.map((item, index) => (
										<li
											className='relative inline-block first:ml-0 ml-[30px] first:text-left'
											key={index}>
											<Link href={item.path}>
												<a
													onClick={() =>
														setCurrent(item)
													}
													className={
														current === item
															? 'text-primary border-t-4 border-primary lg:py-10 py-5 relative inline-block lg:w-full w-2/4 float-left lg:float-none'
															: 'text-primary-lightblue lg:py-10 py-5 hover:text-primary hover:border-primary hover:border-t-4 float-left lg:float-none lg:w-full w-2/4'
													}>
													{item.title}
												</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterCopy;
