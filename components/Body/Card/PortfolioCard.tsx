import { FunctionComponent } from 'react';
import { IPortfolio } from '../../../type';
import { AiOutlinePlus } from 'react-icons/ai';
import PortfolioModal from './Modal';
import { MdClose } from 'react-icons/md';

const PortfolioCard: FunctionComponent<{
	portfolio: IPortfolio;
showDetail: null | number;
	setShowDetail: (id: null | number) => void;	
}> = ({
	portfolio: { name, category, id, image_path },
	setShowDetail,
	showDetail,
}) => {
	const creatMarkup = () => {
		return {
			__html: name,
		};
	};
	return (
		<>
			<div className='mb-[100px] overflow-hidden w-full flex-4'>
				<div className='relative mr-[100px] 2xl:ml-[65px] w-full 2xl:w-[70%]'>
					<span>
						<div className='relative item_img'>
							<img src={image_path} alt={name} />
							<AiOutlinePlus
								className='i'
								onClick={() => setShowDetail(id)}
							/>
						</div>
					</span>
					<a
						href=''
						dangerouslySetInnerHTML={creatMarkup()}
						className=' static left-0 lg:mt-0 mt-5 inline-block transition lg:text-[30px] text-primarty-priy font-bold leading-[1.16] lg:absolute lg:left-[-65px] bottom-[120px] duration-[0.3s]'
					/>
				</div>
			</div>

			{showDetail === id && (
				<div className='overflow-hidden'>
					<div className='top-0 left-0 w-full h-full z-[1042] overflow-y-hidden fixed bg-[#0b0b0b] cursor-zoom-in opacity-[0.8]' />
					<div
						className='top-0 left-0 w-full h-full z-[1043] fixed focus:outline-none overflow-hidden'
						onClick={() => setShowDetail(null)}>
						<div className='absolute left-0 w-full h-full text-center  overflow-hidden 2xl:mx-[80px] my-[100px] container'>
							<div className='relative inline-block max-w-full align-middle  z-[1045] mx-auto'>
								<div className='mx-auto cursor-pointer'>
									<button
										className='absolute text-primary  p-1 2xl:-top-20 2xl:right-[-400px] right[-200px] focus:outline-none bg-primary-100 hover:bg-primary hover:text-white rounded-full transition-all duration-[0.5s]'
										onClick={() => setShowDetail(null)}>
										<MdClose size={30} />
									</button>
									<div className=''>
										<img
											src={image_path}
											alt=''
											className='block w-auto h-auto max-w-full py-[40px] mx-auto'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PortfolioCard;
