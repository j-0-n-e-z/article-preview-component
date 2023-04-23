import { SharePopup } from './SharePopUp'

export default function App() {
	return (
		<main className='w-full min-h-screen grid place-items-center bg-lightGrayishBlue'>
			<article className='flex w-[730px] h-[280px] bg-white shadow-xl rounded-lg'>
				<div className='w-[285px] h-full rounded-s-lg overflow-hidden'>
					<img
						className='w-full h-full object-cover object-left'
						src='./assets/images/drawers.jpg'
						alt='drawers'
					/>
				</div>
				<div className='font-[Manrope] py-[33px] px-10 flex-1 relative'>
					<h2 className='text-xl tracking-[0.015rem] text-veryDarkGrayishBlue font-bold'>
						Shift the overall look and feel by adding these wonderful touches to
						furniture in your home
					</h2>
					<p className='text-desaturatedDarkBlue text-[13px] mt-[11px] tracking-lightlyWide leading-[1.25rem]'>
						Ever been in a room and felt like something was missing? Perhaps it
						felt slightly bare and uninviting. I’ve got some simple tips to help
						you make any room feel complete.
					</p>
					<div className='flex items-center mt-5'>
						<div className='rounded-full w-10 h-10 overflow-hidden'>
							<img src='./assets/images/avatar-michelle.jpg' alt='michelle' />
						</div>
						<div className='flex flex-col ml-4 pt-[1px]'>
							<h3 className='text-veryDarkGrayishBlue text-[13px] font-bold tracking-lightlyWide'>
								Michelle Appleton
							</h3>
							<span className='text-grayishBlue text-[13px] tracking-lightlyWide'>
								28 Jun 2020
							</span>
						</div>
						<div className='group relative mb-[1px] ml-auto w-8 h-8 bg-lightGrayishBlue rounded-full grid place-items-center cursor-pointer hover:bg-desaturatedDarkBlue transition'>
							<svg
								className='fill-[#6E8098] group-hover:fill-white transition'
								xmlns='http://www.w3.org/2000/svg'
								width='15'
								height='13'
							>
								<path d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z' />
							</svg>
							<SharePopup />
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}
