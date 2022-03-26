import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { image } from '../../data';
import Modal from '../Body/Card/Modal';

const FooterLeft = () => {
	const [showDetail, setShowDetail] = useState<any | null>(null);
	return (
		<>
			<div className='mb-7'>
				<div className='mb-11'>
					<h4 className='mb-8 text-[28px] text-primary-priy font-bold pr-9 text-right'>
						Photo Gallery
					</h4>
				</div>
				<div className='text-left 2xl:text-center'>
					{image.map((img, index) => (
						<Modal
							key={index}
							image={img}
							setShowDetail={setShowDetail}
							showDetail={showDetail}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default FooterLeft;
