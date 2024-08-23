import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Image from 'next/image'
import SupportSection from '@/components/SupportSection'


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
				<Section className='mt-8 sm:mt-12 pb-16 sm:pb-20 lg:pb-24'>
                    <Section.Heading>Thông tin liên hệ</Section.Heading>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
						<div className='group flex flex-col col-span-1 w-full h-full p-6 bg-card rounded-md'>
							<h4 className='text-lg lg:text-xl font-semibold mb-2'>
								Chi nhánh Hồ Chí Minh
							</h4>
							<p>
								11A Nguyễn An, P. Thạnh Mỹ Lợi, Tp. Thủ Đức, Tp.
								HCM
							</p>
							<p>Hotline: 0916 424 731</p>
							<p>Email: va@vietanh.vn</p>
						</div>
						<div className='group flex flex-col col-span-1 w-full h-full p-6 bg-card rounded-md'>
							<h4 className='text-lg lg:text-xl font-semibold mb-2'>
								Chi nhánh Hà Nội
							</h4>
							<p>
								P808, 8/F, Viwaseen Building 48 Tố Hữu, P. Trung
								Văn, Q. Nam Từ Liêm, Hà Nội
							</p>
							<p>Hotline: 0916 424 731</p>
							<p>Email: va@vietanh.vn</p>
						</div>
					</div>
                    <div className='mb-4'>
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
                    <Image
                    width={0}
                    height={0}
                    src="https://vietanh.vn/wp-content/uploads/2020/08/VietAnh46-600x400.jpg"
                    alt="VietAnh building"
                    className='object-contain w-full h-auto rounded-md'
                    sizes='100vw, 100vw'
                    priority={true}
                />
				</Section>
			</main>
            <SupportSection />
			<Footer />
		</div>
	)
}
