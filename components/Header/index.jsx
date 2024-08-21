'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Header() {
	const pathname = usePathname()

	const toggleMobileMenu = () => {
		const mobileMenu = document.getElementById('mobile-menu');
		mobileMenu.classList.toggle('!h-[236px]')
	}

	return (
		<header className='flex flex-col justify-center items-center w-full bg-white border-t-[8px] border-solid border-primary border-top py-4 px-8 sticky top-0 left-0 z-50 shadow-md'>
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
						<Link id='products' href='/products' className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${pathname === '/products' ? 'underline' : ''}`}>Sản phẩm</Link>
						<Link id='industries' href='/industries' className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${pathname === '/industries' ? 'underline' : ''}`}>Lĩnh vực</Link>
						<Link id='about' href='/about' className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${pathname === '/about' ? 'underline' : ''}`}>Về chúng tôi</Link>
						<Link id='news' href='/news' className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${pathname === '/news' ? 'underline' : ''}`}>Tin tức</Link>
						<Link id='cont' href='/contact' className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${pathname === '/contact' ? 'underline' : ''}`}>Liên hệ</Link>
					</div>
					{/* <div>
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
					</div> */}
					<div className='flex lg:hidden' onClick={toggleMobileMenu}>
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
			<div id="mobile-menu" className='flex lg:hidden absolute overflow-hidden top-[116px] sm:top-[80px] w-full h-0 z-40 bg-primary shadow-md transition-all duration-300 ease-in-out'>
				<div className='flex flex-col px-12 py-4 gap-4 text-lg text-white'>
					<Link id='products' href='/products' className={`decoration-white decoration-2 hover:underline underline-offset-8 ${pathname === '/products' ? 'underline' : ''}`}>Sản phẩm</Link>
					<Link id='industries' href='/industries' className={`decoration-white decoration-2 hover:underline underline-offset-8 ${pathname === '/industries' ? 'underline' : ''}`}>Lĩnh vực</Link>
					<Link id='about' href='/about' className={`decoration-white decoration-2 hover:underline underline-offset-8 ${pathname === '/about' ? 'underline' : ''}`}>Về chúng tôi</Link>
					<Link id='news' href='/news' className={`decoration-white decoration-2 hover:underline underline-offset-8 ${pathname === '/news' ? 'underline' : ''}`}>Tin tức</Link>
					<Link id='contact' href='/contact' className={`decoration-white decoration-2 hover:underline underline-offset-8 ${pathname === '/contact' ? 'underline' : ''}`}>Liên hệ</Link>
				</div>
			</div>
		</header>
	)
}
