import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Image from 'next/image'
import SupportSection from '@/components/SupportSection'
import Link from 'next/link'

export const metadata = {
	title: 'Liên hệ',
}

export default function Page() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<Image
						width={1400}
						height={486}
						src='/vietanh-contact.png'
						alt='VietAnh'
						className='w-full h-auto rounded-md'
						priority={true}
					/>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Thông tin liên hệ</Section.Heading>
					<div className='text-lg lg:text-xl text-heading mb-8'>
						<h4 className='font-semibold mb-2'>
							Chi nhánh Hồ Chí Minh
						</h4>
						<p>
							<Link href='https://maps.app.goo.gl/iDS3PyH7ipczgTDs6'>
								11A Nguyễn An, P. Thạnh Mỹ Lợi, Tp. Thủ Đức,
								Tp.HCM
							</Link>
						</p>
						<p>
							Hotline:{' '}
							<Link href='tel:0916424731'>0916 424 731</Link>
						</p>
						<p>
							Email:{' '}
							<Link href='mailto:va@vietanh.vn'>
								va@vietanh.vn
							</Link>
						</p>
					</div>
					<div className='text-lg lg:text-xl text-heading'>
						<h4 className='font-semibold mb-2'>Chi nhánh Hà Nội</h4>
						<p>
							<Link href='https://maps.app.goo.gl/Qr7NrhRN1EY9bEeU7'>
								P808, 8/F, Viwaseen Building 48 Tố Hữu, P. Trung
								Văn, Q. Nam Từ Liêm, Hà Nội
							</Link>
						</p>
						<p>
							Hotline:{' '}
							<Link href='tel:0916424731'>0916 424 731</Link>
						</p>
						<p>
							Email:{' '}
							<Link href='mailto:va@vietanh.vn'>
								va@vietanh.vn
							</Link>
						</p>
					</div>
				</Section>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>
						Về Công ty cổ phần thiết bị Việt Anh
					</Section.Heading>
					<div className='text-lg lg:text-xl text-heading'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'>
							<div className='flex flex-col col-span-1 h-full justify-start'>
								<div className='mb-6'>
									Thành lập từ năm 1997, Việt Anh Instruments
									tự hào là một trong những đơn vị hàng đầu
									Việt Nam chuyên cung cấp cho thị thường
									trong và ngoài nước các giải pháp về thiết
									bị và dịch vụ kỹ thuật trong lĩnh vực kiểm
									nghiệm, nghiên cứu, ứng dụng, thí nghiệm và
									kiểm định… của các ngành: thực phẩm, nước
									giải khát, dược phẩm, môi trường, dệt sợi và
									giáo dục,...
								</div>
								<div className='flex flex-row gap-3 h-8'>
									<Link
										href='https://vietanh.vn'
										aria-label='Visit VietAnh Website'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='h-full w-auto fill-primary'>
											<path d='M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z' />
											<path
												fillRule='evenodd'
												d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z'
												clipRule='evenodd'
											/>
										</svg>
									</Link>
									<Link
										href='https://www.facebook.com/ThietBiVietAnh'
										aria-label='Visit VietAnh Facebook'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 448 512'
											className='h-full w-auto fill-primary'>
											<path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' />
										</svg>
									</Link>
									<Link
										href='https://www.linkedin.com/in/viet-anh-instruments-5b0b609a/'
										aria-label='Visit VietAnh Linkedin'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 448 512'
											className='h-full w-auto fill-primary'>
											<path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
										</svg>
									</Link>
									<Link
										href='https://www.youtube.com/@thietbivietanh545'
										aria-label='Visit VietAnh Youtube'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 576 512'
											className='h-full w-auto fill-primary'>
											<path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
										</svg>
									</Link>
								</div>
							</div>
							<div className='flex flex-col col-span-1 h-auto rounded-md'>
								<Image
									width={1047}
									height={800}
									src='/vietanh-contact2.png'
									alt='VietAnh'
									className='w-full h-auto rounded-md'
									priority={true}
								/>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<SupportSection />
			<Footer />
		</div>
	)
}
