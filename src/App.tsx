import {SharePopup} from './SharePopup'

export default function App() {
	return (
		<main className='w-full min-h-screen grid place-items-center bg-lightGrayishBlue'>
			<article className='lg:mt-0 -mt-2 flex lg:flex-row flex-col lg:w-[730px] w-[87%] lg:h-[280px] bg-white lg:shadow-xl shadow-md rounded-lg'>
				<div className='lg:w-[285px] lg:h-full h-[200px] lg:rounded-s-lg rounded-t-lg overflow-hidden'>
					<img
						className='w-full h-full object-cover lg:object-left object-[0_-15px]'
						src='./assets/images/drawers.jpg'
						alt='drawers'
					/>
				</div>
				<div className='font-[Manrope] lg:py-[33px] pt-9 pb-7 lg:px-10 px-8 flex-1 relative rounded-lg lg:overflow-visible overflow-hidden'>
					<h2 className='lg:text-xl tracking-[0.01rem] text-veryDarkGrayishBlue font-bold'>
						Shift the overall look and feel by adding these wonderful touches to
						furniture in your home
					</h2>
					<p className='text-desaturatedDarkBlue text-[13px] lg:mt-[11px] mt-[12px] tracking-lightlyWide leading-[1.25rem] mb-7'>
						Ever been in a room and felt like something was missing? Perhaps it
						felt slightly bare and uninviting. I’ve got some simple tips to help
						you make any room feel complete.
					</p>
					<div className='flex flex-row-reverse items-center lg:relative lg:mt-5 mt-3 h-10'>
						<div className='group peer flex w-8 h-8 ml-auto items-center pt-3'>
							<div className='z-10 peer mb-[1px] w-8 h-8 bg-lightGrayishBlue rounded-full grid place-items-center cursor-pointer group-hover:bg-desaturatedDarkBlue transition'>
								<svg
									className='fill-[#6E8098]  group-hover:fill-white transition'
									xmlns='http://www.w3.org/2000/svg'
									width='15'
									height='13'
								>
									<path d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z' />
								</svg>
							</div>
							<SharePopup />
						</div>
						<div className='lg:peer-hover:flex peer-hover:hidden flex'>
							<div className='rounded-full w-10 h-10 overflow-hidden '>
								<img src='./assets/images/avatar-michelle.jpg' alt='michelle' />
							</div>
							<div className='flex flex-col ml-4 pt-[1px]'>
								<h3 className='text-veryDarkGrayishBlue text-[13px] font-bold tracking-lightlyWide'>
									Michelle Appleton
								</h3>
								<span className='text-grayishBlue text-[12px] tracking-wider lg:mt-0 mt-[2px]'>
									28 Jun 2020
								</span>
							</div>
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}
