import Header from './../components/Header/index'
import Footer from './../components/Footer/index'
import { BANNERS, PARTNERS, STANDARDS, SUPPORTS } from '@/consts/homepage'
import { PRODUCTS } from '@/consts/products'
import ProductCard, { IndustryCard, StandardCard, SupportCard } from '@/components/Card'
import { INDUSTRIES } from '@/consts/industries'
import BannersCarousel, { PartnersCarousel } from '@/components/Carousel'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<section
					id='banner'
					className='w-full overflow-hidden'>
					<BannersCarousel images={BANNERS} />
				</section>
				<section
					id='intro'
					className='flex flex-col justify-center items-center w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242769]'>
							HunterLab
						</h1>
						<p className='md:w-[75%] mt-8 text-lg sm:text-xl lg:text-2xl font-light text-center text-'>
							Với hơn 70 năm kinh nghiệm, HunterLab tự tin là nhà sản
							xuất hàng đầu trong việc sản xuất và cung cấp các
							thiết bị đo màu.
						</p>
						<h4 className='text-lg sm:text-xl lg:text-2xl font-semibold text-[#242769] mt-8 text-center'>
							Đáp ứng các tiêu chuẩn
						</h4>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-3 justify-center mt-6 gap-6'>
							{STANDARDS.map((standard, index) => (
								<div key={index}>
									<StandardCard
										name={standard.name}
										imagePath={standard.image}
										text={standard.info}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
				<section
					id='product'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8 bg-[#EBEBF3]'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
							Thiết bị và giải pháp
						</h2>
						<p className='mt-2 text-lg sm:text-xl lg:text-2xl font-light text-center'>
							Hiệu quả, tinh gọn và chính xác
						</p>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6'>
							{PRODUCTS.map((product, index) => (
								<div key={index}>
									<ProductCard
										name={product.name}
										imagePath={product.image}
									/>
								</div>
							))}
							<ProductCard
								name='Tất cả sản phẩm'
								imagePath='/products/all-products.png'
							/>
						</div>
					</div>
				</section>
				<section
					id='industry'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8 bg-[#EBEBF3]'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
							Cung cấp giải pháp đo màu cho nhiều ngành
						</h2>
						<div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6 w-full'>
							{INDUSTRIES.map((industry, index) => (
								<div key={index}>
									<IndustryCard
										name={industry.name}
										imagePath={industry.icon}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
				<section
					id='partners'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
						<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
								Đối tác của HunterLab
							</h2>
							<PartnersCarousel images={PARTNERS} />
						</div>
				</section>
				<section
					id='support'
					className='flex flex-col justify-center items-center w-full pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 px-8'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h4 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-1 text-center'>
							Bạn cần hỗ trợ?
						</h4>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
							Liên hệ với chúng tôi.
						</h2>
						<div className='grid grid-flow-row gap-6 grid-cols-1 sm:grid-cols-3 w-full mt-6'>
							{SUPPORTS.map((support, index) => (
								<div key={index}>
									<SupportCard
										name={support.name}
										imagePath={support.icon}
										info={support.info}
										url={support.url}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
