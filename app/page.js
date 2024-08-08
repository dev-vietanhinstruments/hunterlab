import Header from './../components/Header/index'
import Carousel from '@/components/Carousel'
import Footer from './../components/Footer/index'
import { BANNERS, STANDARDS } from '@/consts/homepage'
import { PRODUCTS } from '@/consts/products'
import ProductCard, { IndustryCard, StandardCard } from '@/components/Card'
import { INDUSTRIES } from '@/consts/industries'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Header />
			<Carousel images={BANNERS} />
			<section
				id='intro'
				className='flex flex-col justify-center items-center w-full py-20 px-8'>
				<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
					<h1 className='text-4xl tablet:text-5xl desktop:text-6xl font-medium text-[#242769]'>
						HunterLab
					</h1>
					<p className='mt-6 text-xl tablet:text-2xl desktop:text-3xl font-light text-center'>
						Với hơn 70 năm kinh nghiệm, HunterLab tự tin là nhà sản
						xuất hàng đầu trong trong việc sản xuất và cung cấp các
						thiết bị đo màu.
					</p>
					<h4 className='text-xl tablet:text-2xl desktop:text-3xl font-semibold mt-16 text-center'>
						Đáp ứng các tiêu chuẩn
					</h4>
					<div className='flex flex-row gap-6 flex-wrap justify-center mt-6'>
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
				className='flex flex-col justify-center items-center w-full desktop:py-20 px-8'>
				<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
					<h2 className='text-3xl tablet:text-4xl desktop:text-5xl font-medium text-[#242769] text-center'>
						Thiết bị và giải pháp
					</h2>
					<p className='mt-6 text-xl tablet:text-2xl desktop:text-3xl font-light text-center'>
						Hiệu quả, tinh gọn và chính xác
					</p>
					<div className='grid grid-flow-row grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-5 mt-10 gap-6'>
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
			<Footer />
		</div>
	)
}
