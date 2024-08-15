import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='flex flex-col justify-center items-center w-full bg-white border-t-[8px] border-solid border-primary border-top py-4 px-8 sticky top-0 left-0 z-50 shadow-sm'>
			<div className='flex flex-row w-full max-w-[80rem] justify-between'>
				<div className='flex flex-col sm:flex-row gap-1 sm:gap-3'>
					<div className='flex items-center'>
						<Link href="/">
							<Image
								className='w-auto h-12'
								src='/logo_hunterlab.png'
								alt='HunterLab Logo'
								width={280}
								height={88}
								priority={true}
							/>
						</Link>
					</div>
					<div className='flex items-center sm:pl-2 sm:border-l sm:border-gray'>
						<Link href="/">
							<Image
								className='w-auto h-8'
								src='/logo_vietanh.png'
								alt='VietAnh Logo'
								width={253}
								height={62}
								priority={true}
							/>
						</Link>
					</div>
				</div>
				<nav className='flex gap-8 items-center text-base'>
					<div className='hidden lg:flex gap-8'>
						<Link href='/products' className='hover:decoration-primary hover:decoration-2 hover:underline hover:underline-offset-8'>Sản phẩm</Link>
						<Link href='/' className='hover:decoration-primary hover:decoration-2 hover:underline hover:underline-offset-8'>Lĩnh vực</Link>
						<Link href='/' className='hover:decoration-primary hover:decoration-2 hover:underline hover:underline-offset-8'>Về chúng tôi</Link>
						<Link href='/' className='hover:decoration-primary hover:decoration-2 hover:underline hover:underline-offset-8'>Tin tức</Link>
						<Link href='/' className='hover:decoration-primary hover:decoration-2 hover:underline hover:underline-offset-8'>Liên hệ</Link>
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
