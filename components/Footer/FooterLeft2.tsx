import { CgArrowLongRight } from 'react-icons/cg';

const FooterLeft2 = () => {
	return (
		<div className='mb-7'>
			<div className='mb-9'>
				<h4 className='mb-8 text-[28px] text-primary-priy font-bold'>
					Newsletters
				</h4>
			</div>
			<div>
				<p className='text-base font-normal text-primary-lightblue leading-[2.13] font-serif mb-4'>
					Quis autem vel eum iure reprehenderit qui in ea voluptate
					velit esse molestiae
				</p>
				<form action=''>
					<div>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='h-[50px] border-2 border-gray-200 px-7 w-full rounded-xl font-bold text-primary-lightblue focus:outline-none text-base font-serif'
						/>
						<button className='flex items-center justify-center focus:outline-none w-[200px] h-[50px] bg-primary px-[20px] font-bold rounded-xl transition text-primary-100 duration-[.3s] text- hover:text-primary hover:bg-primary-100 mt-2'>
							Send Message
							<CgArrowLongRight className='ml-4' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterLeft2;
