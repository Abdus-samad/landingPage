import { FunctionComponent } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { image } from '../../../data';
import { IGallery } from '../../../type';

const Modal: FunctionComponent<{
	image: IGallery;
	showDetail: null | number;
	setShowDetail: (id: null | number) => void;
}> = ({ image: { id, image_path }, setShowDetail, showDetail }) => {
	return (
		<>
			<span  className='photo'>
				<img
					src={image_path}
					alt=''
					className='w-full h-full rounded-xl'
				/>
				<AiOutlinePlus
					className='i'
					onClick={() => setShowDetail(id)}
				/>
			</span>
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

export default Modal;
