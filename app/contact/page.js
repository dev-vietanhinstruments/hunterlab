import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Image from 'next/image'
import SupportSection from '@/components/SupportSection'
import Link from 'next/link'

export const metadata = {
	title: "Liên hệ",
};

export default function Page() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro
					className='h-[300px] md:h-[320px] px-4 justify-end'
					style={{
						backgroundImage: `url(https://www.hunterlab.com/media/original_images/colored-windows.jpg)`,
					}}>
					<div className='w-full max-w-[80rem] px-4'>
						<p className='text-xl lg:text-2xl text-white mb-3'>
							Bạn cần hỗ trợ?
						</p>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl text-white mb-8 font-bold'>
							Liên hệ với chúng tôi
						</h1>
					</div>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
                    <Section.Heading>Thông tin liên hệ</Section.Heading>
					<Section.Subtext>Thành lập từ năm 1997, Công ty cổ phần thiết bị Việt Anh tự hào là một trong những đơn vị hàng đầu Việt Nam chuyên cung cấp cho thị thường trong và ngoài nước các giải pháp về thiết bị và dịch vụ kỹ thuật trong lĩnh vực kiểm nghiệm, nghiên cứu, ứng dụng, thí nghiệm và kiểm định… của các ngành: thực phẩm, nước giải khát, dược phẩm, môi trường, dệt sợi, giáo dục...</Section.Subtext>
					<div className='mb-8'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.480463717765!2d106.7500246757933!3d10.774465489374188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525c3593cf4d1%3A0xce6bf57685888988!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gVEhJ4bq-VCBC4buKIFZJ4buGVCBBTkg!5e0!3m2!1sen!2s!4v1724387171936!5m2!1sen!2s'
							width='600'
							height='450'
							style={{ border: 0 }}
							className='rounded-md w-full h-[300px] md:h-[450px]'
							allowFullScreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'></iframe>
					</div>
					<div className='text-lg lg:text-xl text-heading'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'>
							<div className='flex flex-col col-span-1 h-full justify-center'>
								<div className='mb-6'>
									<h4 className='font-semibold mb-2'>
										Chi nhánh Hồ Chí Minh
									</h4>
									<p>
										<Link href='https://maps.app.goo.gl/iDS3PyH7ipczgTDs6'>11A Nguyễn An, P. Thạnh Mỹ Lợi, Tp. Thủ Đức, Tp.HCM</Link>
									</p>
									<p>Hotline: <Link href='tel:0916424731'>0916 424 731</Link></p>
									<p>Email: <Link href='mailto:va@vietanh.vn'>va@vietanh.vn</Link></p>
								</div>
								<div>
									<h4 className='font-semibold mb-2'>
										Chi nhánh Hà Nội
									</h4>
									<p>
										<Link href='https://maps.app.goo.gl/Qr7NrhRN1EY9bEeU7'>P808, 8/F, Viwaseen Building 48 Tố Hữu, P. Trung
										Văn, Q. Nam Từ Liêm, Hà Nội</Link>
									</p>
									<p>Hotline: <Link href='tel:0916424731'>0916 424 731</Link></p>
									<p>Email: <Link href='mailto:va@vietanh.vn'>va@vietanh.vn</Link></p>
								</div>
							</div>
							<div className='flex flex-col col-span-1 h-auto rounded-md'>
								<Image
									width={600}
									height={400}
									src='/vietanh-contact.jpg'
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
