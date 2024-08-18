import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { ProductCardWithDesc } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import { INDUSTRIES } from '@/consts/industries'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'

export async function generateStaticParams() {
	return INDUSTRIES.map((industry) => ({
		id: industry.id,
	}))
}

export default function Page({ params }) {
	const industry = INDUSTRIES.find((industry) => industry.id === params.id)
	const products = industry.products
	const application = industry.application

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro
					className='h-[300px] md:h-[320px] px-8 justify-end'
					style={{ backgroundImage: `url(${industry.cover})` }}>
					<div className='w-full max-w-[80rem] px-4'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl text-white mb-8'>
							Giải pháp đo màu cho ngành{' '}
							<span className='font-bold text-white'>
								{industry.name}
							</span>
						</h1>
					</div>
				</Intro>
				<Section className='pt-16 sm:pt-20 lg:pt-24'>
					<Section.Heading>Ứng dụng</Section.Heading>
					<Section.Subtext>{application.desc}</Section.Subtext>
					<Section.List>
						{application.items.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</Section.List>
				</Section>
				<Section className='pb-16 sm:pb-20 lg:pb-24'>
					<Section.Heading>
						Một số công cụ và giải pháp đo màu thực phẩm
					</Section.Heading>
					<div className='flex flex-col gap-8'>
						{products.map((product) => {
							const matchedProduct = PRODUCTS.find(
								(prod) => prod.id === product.id
							)
							return (
								matchedProduct && (
									<ProductCardWithDesc
										key={matchedProduct.id}
										name={matchedProduct.name}
										image={matchedProduct.image}
										desc={product.desc}
										href={`/products/${matchedProduct.id}`}
									/>
								)
							)
						})}
					</div>
				</Section>
			</main>
			<Footer />
		</div>
	)
}
