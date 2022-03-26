const image = [
	'/brand1.png',
	'/brand2.png',
	'/brand3.png',
	'/brand4.png',
	'/brand5.png',
	'/brand6.png',
	'/brand7.png',
	'/brand8.png',
];
const Branding = () => {
	return (
		<div className='pt-[135px] pb-[85px]'>
			<div className='contain'>
				<div className='flex flex-wrap justify-between'>
					{image.map((img, index) => (
						<div
							key={index}
							className='cursor-pointer 2xl:flex-0 hover:opacity-50 mb-[45px] flex-6 w-full'>
							<img
								src={img}
								alt=''
								className='max-w-[100px] 2xl:max-w-[180px] sm:max-w-[90px]'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Branding;
