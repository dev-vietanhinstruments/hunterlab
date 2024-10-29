'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev)
	}

	return (
		<>
			<div
				id='sticky-nav'
				className='sticky top-0 left-0 z-50'>
				<header className='flex justify-center items-center w-full h-8 py-2 px-8 bg-primary'>
					<div className='flex flex-row w-full h-full max-w-[80rem] mx-auto justify-between'>
						<div className='flex flex-row gap-3 h-full'>
							<Link
								href='https://www.facebook.com/ThietBiVietAnh'
								aria-label='Visit VietAnh Facebook'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
									className='h-full w-auto fill-white'>
									<path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' />
								</svg>
							</Link>
							<Link
								href='https://www.linkedin.com/in/viet-anh-instruments-5b0b609a/'
								aria-label='Visit VietAnh Linkedin'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
									className='h-full w-auto fill-white'>
									<path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
								</svg>
							</Link>
							<Link
								href='https://www.youtube.com/@thietbivietanh545'
								aria-label='Visit VietAnh Youtube'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 576 512'
									className='h-full w-auto fill-white'>
									<path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
								</svg>
							</Link>
						</div>
						<Link
							className='text-sm text-white hidden xs:block'
							href='tel:0916424731'>
							Hotline: 0916-424-731
						</Link>
					</div>
				</header>
				<nav className='flex justify-center items-center w-full bg-white py-4 px-8 shadow-md'>
					<div className='flex flex-row w-full max-w-[80rem] justify-between'>
						<div className='flex flex-col xs:flex-row gap-1 xs:gap-3'>
							<div className='flex items-center'>
								<Link href='/'>
									<Image
										className='w-auto h-6 sm:h-9'
										src='/logo_hunterlab.png'
										alt='HunterLab Logo'
										width={280}
										height={88}
										priority={true}
									/>
								</Link>
							</div>
							<div className='flex items-center xs:pl-2 xs:border-l xs:border-gray'>
								<Link href='/'>
									<Image
										className='w-auto h-6 sm:h-9'
										src='/logo_vietanh.webp'
										alt='VietAnh Logo'
										width={452}
										height={78}
										priority={true}
									/>
								</Link>
							</div>
						</div>
						<div className='flex gap-8 items-center text-base'>
							<div className='hidden lg:flex gap-8'>
								<Link
									href='/products'
									className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
										pathname === '/products'
											? 'underline'
											: ''
									}`}>
									Sản phẩm
								</Link>
								<Link
									href='/industries'
									className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
										pathname === '/industries'
											? 'underline'
											: ''
									}`}>
									Lĩnh vực
								</Link>
								<Link
									href='/about'
									className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
										pathname === '/about' ? 'underline' : ''
									}`}>
									Về chúng tôi
								</Link>
								<Link
									href='/contact'
									className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
										pathname === '/contact'
											? 'underline'
											: ''
									}`}>
									Liên hệ
								</Link>
							</div>
							<div
								className='flex lg:hidden'
								onClick={toggleMobileMenu}>
								{isMobileMenuOpen ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										class='size-6'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18 18 6M6 6l12 12'
										/>
									</svg>
								) : (
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
								)}
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div
				id='mobile-menu'
				className={`fixed overflow-scroll w-full h-full z-40 bg-white shadow-md transition-all duration-300 ease-in-out pt-[116px] xs:pt-[88px] sm:pt-[100px] ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
				}`}>
				<div className='flex flex-col px-8 py-8 gap-4 text-lg'>
					<Link
						href='/products'
						className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
							pathname === '/products' ? 'underline' : ''
						}`}>
						Sản phẩm
					</Link>
					<Link
						href='/industries'
						className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
							pathname === '/industries' ? 'underline' : ''
						}`}>
						Lĩnh vực
					</Link>
					<Link
						href='/about'
						className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
							pathname === '/about' ? 'underline' : ''
						}`}>
						Về chúng tôi
					</Link>
					<Link
						href='/contact'
						className={`decoration-primary decoration-2 hover:underline underline-offset-8 ${
							pathname === '/contact' ? 'underline' : ''
						}`}>
						Liên hệ
					</Link>
				</div>
			</div>
		</>
	)
}
