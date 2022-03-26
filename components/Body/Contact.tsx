import { CgArrowLongRight } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
	return (
		<div
			style={{ backgroundImage: "url('/contact_bg.jpg')" }}
			className='contact pt-[120px] pb-[100px]'>
			<div className='relative z-[99]'>
				<div className='contain'>
					<div className='flex flex-wrap mx-19'>
						<div className='w-full 2xl:flex-4 2xl:w-full'>
							<div className='relative text-center mb-[75px]'>
								<h4 className='text-xl font-bold sm:text-3xl 2xl:text-5xl'>
									Do You Have Any Project <br />
									Plz Say Hello
								</h4>
							</div>
						</div>
					</div>
					<form action=''>
						<div className='flex flex-wrap mx-19'>
							<div className='w-full max-w-full px-19 xl:flex-4 xl:w-1/4 md:flex-4 md:w-2/4'>
								<div className='h-[60px] relative leading-[60px] mb-[30px]'>
									<input
										type='text'
										placeholder='Your Full Name'
										className='w-full px-[25px] rounded-xl border-none focus:outline-none font-medium text-primary-priy'
									/>
									<FaRegUser className='absolute mt-[-2px] right-6 top-2/4 translate-y-50% text-primary' />
								</div>
							</div>
							<div className='w-full px-19 xl:flex-4 xl:w-1/4 md:flex-4 md:w-2/4'>
								<div className='h-[60px] relative leading-[60px] mb-[30px]'>
									<input
										type='email'
										placeholder='Your Email'
										className='w-full px-[25px] rounded-xl border-none focus:outline-none font-medium text-primary-priy'
									/>
									<MdOutlineMail className='absolute mt-[-2px] right-6 top-2/4 translate-y-50% text-primary' />
								</div>
							</div>
							<div className='w-full px-19 xl:flex-4 xl:w-1/4 md:flex-4 md:w-2/4'>
								<div className='h-[60px] relative leading-[60px] mb-[30px]'>
									<textarea
										placeholder='Write Message'
										className='w-full px-[25px] py-[20px] leading-5  h-[60px] overflow-hidden rounded-xl border-none focus:outline-none font-medium text-primary-priy'
									/>
								</div>
							</div>
							<div className='w-full px-19 xl:flex-4 xl:w-1/4 md:flex-4 md:w-2/4'>
								<div className='mb-[30px]'>
									<button className='flex items-center justify-center focus:outline-none w-full h-[60px] bg-primary px-[35px] font-bold rounded-xl transition text-primary-100 duration-[.3s] text- hover:text-primary hover:bg-primary-100'>
										Send Message
										<CgArrowLongRight className='ml-4' />
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
