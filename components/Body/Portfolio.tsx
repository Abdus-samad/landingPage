import { useState } from 'react';
import PortfolioNavbar from './Card/PortfolioNavbar';
import { portfolio as PortfolioData } from '../../data';
import { Category } from '../../type';
import PortfolioCard from './Card/PortfolioCard';

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState(PortfolioData);
	const [active, setActive] = useState('Veiw all');
	const [showDetail, setShowDetail] = useState<number | null>(null);

	const handlerFilterCategory = (category: Category | 'Veiw all') => {
		if (category === 'Veiw all') {
			setPortfolio(PortfolioData);
			setActive(category);
			return;
		}

		const newArray = PortfolioData.filter((portfolio) =>
			portfolio.category.includes(category)
		);
		setPortfolio(newArray);
		setActive(category);
	};

	return (
		<div className='relative pt-[120px] bg-gradient-to-tr from-gray-200 via-gray-400  to-gray-600h-full w-full'>
			<div className='contain'>
				<div className='flex flex-wrap'>
					<div className='w-full flex-4'>
						<div className='2xl:mb-[70px] mb-[40px]'>
							<h2 className='2xl:text-[48px] font-bold text-[25px] md:text-[38px] lg:text-[40px]'>
								Latest Project That <br />
								Recently Done
							</h2>
						</div>
					</div>
				</div>
				<div className='relative'>
					<div className='absolute top-[-32px] right-[80px]'>
						<img src='/dot.png' alt='' />
					</div>
					<PortfolioNavbar
						handlerFilterCategory={handlerFilterCategory}
						active={active}
					/>
					<div className='relative grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
						{portfolio.map((project, index) => (
							<PortfolioCard
								key={index}
								portfolio={project}
								setShowDetail={setShowDetail}
								showDetail={showDetail}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
