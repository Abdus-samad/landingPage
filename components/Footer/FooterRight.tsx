import {
	FaEnvelopeOpenText,
	FaFacebookF,
	FaLaptopCode,
	FaLinkedinIn,
	FaPhone,
	FaSlack,
	FaTwitter,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const FooterRight = () => {
	return (
		<div className='mb-[30px]'>
			<div className='mb-10'>
				<a className='flex items-center font-mono text-4xl font-bold'>
					<FaLaptopCode className='mr-4 text-primary' />
					AJAO
				</a>
			</div>
			<div>
				<span className='flex mb-[20px]'>
					<GoLocation className='text-[24px] mt-[3px] mr-3 text-primary' />
					<span className='leading-[30px] text-primary-lightblue'>
						Dutse Baupma, Bwari Area Council, <br />
						Abuja
					</span>
				</span>
				<span className='flex mb-[20px]'>
					<FaEnvelopeOpenText className='text-[24px] mt-[3px] mr-3 text-primary' />
					<a
						href=''
						className='leading-[30px] text-primary-lightblue hover:text-primary'>
						abdussamadajao@gmail.com
					</a>
				</span>
				<span className='flex mb-[20px]'>
					<FaPhone className='text-[24px] mt-[3px] mr-3 text-primary' />
					<a
						href=''
						className='leading-[30px] text-primary-lightblue hover:text-primary'>
						+2348054176385
					</a>
				</span>
			</div>
			<div className='flex mt-7'>
				<a
					href=''
					className='hover:text-white group hover:bg-primary text-primary-lightblue w-[45px] mr-3  h-[45px] bg-gray-100 rounded-md flex justify-center items-center'>
					<FaFacebookF className='group-hover:rotate-[360deg] transition-all duration-[.3s]' />
				</a>
				<a
					href=''
					className='hover:text-white group hover:bg-primary text-primary-lightblue w-[45px] mr-3 h-[45px] bg-gray-100 rounded-md flex justify-center items-center'>
					<FaTwitter className='group-hover:rotate-[360deg] transition-all duration-[.3s]' />
				</a>
				<a
					href=''
					className='hover:text-white group hover:bg-primary text-primary-lightblue w-[45px] mr-3 h-[45px] bg-gray-100 rounded-md flex justify-center items-center'>
					<FaLinkedinIn className='group-hover:rotate-[360deg] transition-all duration-[.3s]' />
				</a>
				<a
					href=''
					className='hover:text-white group hover:bg-primary text-primary-lightblue w-[45px] mr-3 h-[45px] bg-gray-100 rounded-md flex justify-center items-center'>
					<FaSlack className='group-hover:rotate-[360deg] transition-all duration-[.3s]' />
				</a>
			</div>
		</div>
	);
};

export default FooterRight;
