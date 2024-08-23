import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import ProductCard from '@/components/Card'
import { PRODUCTS } from '@/consts/products'
import { INDUSTRIES } from '@/consts/industries'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'


export async function generateMetadata({ params }) {
	const id = params.slug.split('-i.')[1]
   
	const industry = INDUSTRIES.find((industry) => industry.id === id)

	return {
	  title: industry.name,
	}
}

export async function generateStaticParams() {
	return INDUSTRIES.map((industry) => ({
		slug: `${toLowerCaseNonAccentVietnamese(industry.name).replace(/\s+/g, '-')}-i.${industry.id}`,
	}))
}

export default function Page({ params }) {
	const id = params.slug.split('-i.')[1]

	const industry = INDUSTRIES.find((industry) => industry.id === id)
	const products = industry.products
	const application = industry.application

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro
					className='h-[300px] md:h-[320px] px-4 justify-end'
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
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Ứng dụng</Section.Heading>
					<Section.Subtext>{application.desc}</Section.Subtext>
					<Section.List>
						{application.items.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</Section.List>
				</Section>
				<Section>
					<Section.Heading>
						Một số công cụ và giải pháp đo màu
					</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{products.map((product) => {
							const matchedProduct = PRODUCTS.find(
								(prod) => prod.id === product
							)

							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								matchedProduct.name
							).replace(/\s+/g, '-')}-p.${matchedProduct.id}`
							return (
								matchedProduct && (
									<ProductCard
										key={matchedProduct.id}
										name={matchedProduct.name}
										image={matchedProduct.image}
										href={productPath}
									/>
								)
							)
						})}
					</div>
				</Section>
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
