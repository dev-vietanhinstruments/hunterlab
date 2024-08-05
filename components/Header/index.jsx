import React from 'react'
import Image from 'next/image'

export default function Header() {
	return (
		<header className="flex flex-col justify-center items-center w-full bg-white border-t-[8px] border-solid border-[#242769] border-top py-4 px-8">
			<div className='flex flex-row w-full max-w-[1376px] justify-between'>
				<div className="flex items-center gap-3 text-2xl font-medium text-[#242769]">
						<Image
							className='w-auto h-auto'
							src='/logo_vietanh.png'
							alt='VietAnh Logo'
							width={64}
							height={64}
							priority={true}
						/>
						<h1>Việt Anh</h1>
				</div>
				<nav className="flex gap-8 items-center text-base font-light text-[#0D0D0D]">
					<div href='/'>Sản phẩm</div>
					<div href='/'>Hỗ trợ</div>
					<div href='/'>Về chúng tôi</div>
					<div href='/'>Tin tức</div>
					<div href='/'>Liên hệ</div>
					<div
						href='/'
						aria-label='Search'>
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
				</nav>
			</div>
		</header>
	)
}
