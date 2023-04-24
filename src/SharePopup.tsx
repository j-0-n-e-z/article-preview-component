import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faFacebookF,
	faPinterest
} from '@fortawesome/free-brands-svg-icons'

export const SharePopup = () => {
	return (
		<div className='cursor-auto hidden hover:block peer-hover:block absolute lg:bottom-[30px] lg:w-[250px] w-full bottom-0 left-0 lg:left-auto lg:-right-[108px] lg:h-[88px]'>
			<div className='flex lg:px-[38px] px-8 items-center relative lg:w-[250px] w-full lg:h-[55px] h-20 bg-veryDarkGrayishBlue lg:rounded-xl text-lightGrayishBlue'>
				<span className='text-grayishBlue tracking-[.3rem] uppercase text-[13px] pt-1'>
					share
				</span>
				<div className='flex h-full items-center gap-x-[16px] ml-[18px] pt-[2px] text-lightGrayishBlue'>
					<div className='bg-lightGrayishBlue hover:bg-white transition  w-5 h-5 rounded-sm text-veryDarkGrayishBlue'>
						<a href='#'>
							<FontAwesomeIcon
								className='ml-[7px] text-[17px]'
								icon={faFacebookF}
							/>
						</a>
					</div>
					<a href='#'>
						<FontAwesomeIcon
							className='hover:text-white transition text-[20px] mt-1'
							icon={faTwitter}
						/>
					</a>
					<a href='#'>
						<FontAwesomeIcon
							className='hover:text-white transition text-[20px]'
							icon={faPinterest}
						/>
					</a>
				</div>
				<div className='lg:block hidden absolute -bottom-[12px] left-[50%] -translate-x-[50%] w-0 h-0 border-t-veryDarkGrayishBlue border-[12px] border-b-0 border-l-transparent border-r-transparent '></div>
			</div>
		</div>
	)
}
