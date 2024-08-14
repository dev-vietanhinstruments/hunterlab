import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { ProductCardWithDesc } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import { INDUSTRIES } from '@/consts/industries'

export async function generateStaticParams() {
	return INDUSTRIES.map((industry) => ({
	  id: industry.id,
	}))
  }

export default function Page({ params }) {
	const industry = INDUSTRIES.filter((industry) => industry.id === params.id)[0]
	const products = industry.products

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
					id='application'
					className='flex flex-col justify-center items-center w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
							Ứng dụng
						</h2>
						<p className='mt-4 text-lg sm:text-xl lg:text-2xl font-light'>
							HunterLab cung cấp các giải pháp đo màu cho protein thực vật, sữa thực vật, thịt thực vật và nhiều loại thực phẩm có nguồn gốc thực vật khác.
						</p>
					</div>
				</section>
				<section
					id='related-products'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
							Một số công cụ và giải pháp đo màu thực phẩm
						</h2>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6'>
						{products.map((product) => {
							const matchedProduct = PRODUCTS.find((prod) => prod.id === product.id);
							return matchedProduct && (
								<ProductCardWithDesc key={matchedProduct.id} name={matchedProduct.name} imagePath={matchedProduct.image} desc={product.desc} href={(`/products/${matchedProduct.id}`)} />
							);
						})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
