import { CgArrowLongRight } from 'react-icons/cg';
import { languages } from '../../data';
import Bar from './Card/Bar';

const Skills = () => {
	return (
		<div className='py-[100px]'>
			<div className='contain'>
				<div className='border-b border-gray-100 pb-[100px]'>
					<div className='flex flex-wrap mx-19'>
						<div className='w-full 2xl:w-2/4 flex-4 px-19 md:w-full'>
							<div className='mb-8 -mt-2'>
								<div className='mb-7'>
									<h2 className='mb-4 font-serif text-5xl font-bold text-primary-priy'>
										Creative & Professional <br /> Skills
										Experience
									</h2>
								</div>
								<p className='text-base leading-[1.86] font-normal text-primary-lightblue mb-4'>
									Sed ut perspiciatis unde omnis iste natus
									error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam, eaque ipsa
									quae ab illo inventore veritatis et quasi
									architecto beatae vitae dicta
								</p>
								<div className='mt-7'>
									<a
										href=''
										className='hover:bg-primary-100 hover:text-primary h-12 leading-[50px] flex rounded-md bg-primary items-center  w-[250px] px-[35px] text-white font-bold transition-all duration-[.3s]'>
										Get Any project
										<CgArrowLongRight className='ml-1' />
									</a>
								</div>
							</div>
						</div>
						<div className='w-full flex-4 2xl:w-2/4 px-19 md:w-full'>
							<div className='mb-7'>
								{languages.map((language) => (
									<Bar data={language} key={language.name} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
