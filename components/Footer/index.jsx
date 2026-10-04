import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='flex flex-col justify-center items-center w-full bg-primary py-12 px-8'>
			<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-12 w-full max-w-[80rem] gap-8 sm:gap-12 justify-between text-[#a5a7c1]'>
				<div className='sm:col-span-4 flex flex-col gap-6'>
					<h3 className='text-xl md:text-2xl font-semibold uppercase text-white'>
						Công ty CP Thiết Bị Việt Anh
					</h3>

					<div className='flex flex-col gap-4 text-base'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-5 inline-block text-white'>
								<path
									fillRule='evenodd'
									d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
									clipRule='evenodd'
								/>
							</svg>
							<span className='font-medium ml-1 text-white'>
								Hồ Chí Minh:{' '}
							</span>
							11A Nguyễn An, Khu phố 4, P. Cát Lái, Tp. HCM
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-5 inline-block text-white'>
								<path
									fillRule='evenodd'
									d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
									clipRule='evenodd'
								/>
							</svg>
							<span className='font-medium ml-1 text-white'>Hà Nội: </span>
							P808, 8/F, Viwaseen Building 48 Tố Hữu, P. Đại Mỗ, Tp. Hà Nội
						</div>
						<Link href='mailto:loan.ht@hunterlab.vn'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-5 inline-block text-white'>
								<path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
								<path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
							</svg>
							<span className='font-medium ml-1 text-white'>Email: </span>
							loan.ht@hunterlab.vn
						</Link>
						<Link href='tel:0937998390'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-5 inline-block text-white'>
								<path
									fillRule='evenodd'
									d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
									clipRule='evenodd'
								/>
							</svg>
							<span className='font-medium ml-1 text-white'>Hotline: </span>
							0937998390
						</Link>
					</div>
				</div>

				<div className='sm:col-start-6 sm:col-span-7 flex flex-col gap-6'>
					<div className='sm:grid grid-cols-2 gap-12 hidden'>
						<div className='flex flex-col gap-2'>
							<Link href="/products" className='text-lg lg:text-xl text-white'>
								Sản phẩm
							</Link>
							<Link href="/industries" className='text-lg lg:text-xl text-white'>
								Lĩnh vực
							</Link>
							<Link href="/about" className='text-lg lg:text-xl text-white'>
								Về chúng tôi
							</Link>
							<Link href="/contact" className='text-lg lg:text-xl text-white'>
								Liên hệ
							</Link>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<div>Chính sách bảo mật</div>
								<div>Điều khoản sử dụng</div>
								<div>Đăng ký bảo hành</div>
							</div>
						</div>
					</div>
					<div className='flex flex-row gap-3 py-4 border-t border-[#8F92C1] text-white'>
						<Link href='https://www.facebook.com/ThietBiVietAnh'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								fill='currentColor'
								className='size-8'>
								<path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' />
							</svg>
						</Link>
						<Link href='https://www.linkedin.com/in/viet-anh-instruments-5b0b609a/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								fill='currentColor'
								className='size-8'>
								<path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
							</svg>
						</Link>
						<Link href='https://www.youtube.com/@thietbivietanh545'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'
								fill='currentColor'
								className='size-8'>
								<path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
