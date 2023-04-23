import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faFacebookF,
	faPinterest
} from '@fortawesome/free-brands-svg-icons'

export const Share = () => {
	return (
		<div className='cursor-auto hidden group-hover:block absolute bottom-[20px] h-24'>
			<div className='flex px-[38px] items-center relative w-[250px] h-[55px] bg-veryDarkGrayishBlue rounded-xl text-lightGrayishBlue'>
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
							className='hover:text-white transition text-[20px]'
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
				<div className='absolute -bottom-[12px] left-[50%] -translate-x-[50%] w-0 h-0 border-t-veryDarkGrayishBlue border-[12px] border-b-0 border-l-transparent border-r-transparent '></div>
			</div>
		</div>
	)
}
