import React from 'react'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex flex-col justify-center items-center w-full bg-white border-t-[8px] border-solid border-[#242769] border-top py-4 px-8 sticky top-0 left-0 z-50 shadow-sm'>
			<div className='flex flex-row w-full max-w-[1376px] justify-between'>
				<div className='flex flex-col tablet:flex-row gap-1 tablet:gap-3'>
					<div className='flex items-center'>
						<Image
							className='w-auto h-12'
							src='/logo_hunterlab.png'
							alt='HunterLab Logo'
							width={280}
							height={88}
							priority={true}
						/>
					</div>
					<div className='flex items-center tablet:pl-2 tablet:border-l tablet:border-[#CDCDCD]'>
						<Image
							className='w-auto h-8'
							src='/logo_vietanh.png'
							alt='VietAnh Logo'
							width={253}
							height={62}
							priority={true}
						/>
					</div>
				</div>
				<nav className='flex gap-8 items-center text-base font-light text-[#0D0D0D]'>
					<div className='hidden desktop:flex gap-8'>
						<div>Sản phẩm</div>
						<div>Hỗ trợ</div>
						<div>Về chúng tôi</div>
						<div>Tin tức</div>
						<div>Liên hệ</div>
					</div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</div>
					<div className='flex desktop:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</div>
				</nav>
			</div>
		</header>
	)
}
