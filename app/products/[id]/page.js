import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { PRODUCTS } from '@/consts/products'
import { INDUSTRIES } from '@/consts/industries'
import { CATEGORIES } from '@/consts/categories'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'
import Image from 'next/image'
import Button, { TagButton } from '@/components/Button'
import Link from 'next/link'


export async function generateStaticParams() {
	return PRODUCTS.map((product) => ({
		id: product.id,
	}))
}

export default function Page({ params }) {
	const product = PRODUCTS.find((product) => product.id === params.id)
	const category = CATEGORIES.find(
		(category) => product.category === category.id
	)
	const industries = product.industries

	const industryRecords = industries.map((industry, index) => {
		const matchedIndustry = INDUSTRIES.find(
			(indus) => indus.id === industry
		)
		return matchedIndustry
	})

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='bg-card pt-16 sm:pt-20 lg:pt-24'>
					<div
						className={`grid grid-col md:grid-row md:grid-cols-[40%_60%] w-full max-w-[1024px] h-full gap-6 px-4`}>
						<div className='relative w-full h-[300px]'>
							<Image
								fill
								src={product.image}
								alt={`${product.name}`}
								className='object-contain'
								sizes='100vw, 100vw'
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<Link className='text-lg md:text-xl text-notation font-semibold mb-3' href={`/products#${category.tag}`}>
								{category.name}
							</Link>
							<h4 className='text-2xl md:text-3xl font-semibold mb-4 text-heading'>
								{product.name}
							</h4>
							<div className='flex flex-row gap-2 flex-wrap text-lg lg:text-xl mb-4'>
								{industryRecords.map((industry, index) => (
									<TagButton key={index} href={`/industries/${industry.id}`}>{industry.name}</TagButton>
								))}
							</div>
							<p className='text-lg lg:text-xl'>Model: {product.model}</p>
							<p className='text-lg lg:text-xl'>Nhà sản xuất: {product.supplier}</p>
							<p className='text-lg lg:text-xl'>Nơi sản xuất: {product.country}</p>
							<Button href="/" className='w-full text-center'>Liên hệ ngay</Button>
						</div>
					</div>
				</Intro>
				<Section>
					<Section.Heading>Mô tả</Section.Heading>
					<Section.Subtext className='mb-0'>{product.desc}</Section.Subtext>
				</Section>
				<Section>
					<Section.Heading>Tính năng nổi bật</Section.Heading>
					<Section.List className='mb-0'>
						{product.features.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</Section.List>
				</Section>
				<Section>
					<Section.Heading>Các thông số</Section.Heading>
				</Section>
				{/* <section
					id='application'
					className='flex flex-col justify-center items-center w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8'>
                    <p>{product.name}</p>
                    <p>Loại máy: {category.name}</p>
                    {industries.map((industry, index) => {
							const matchedIndustry = INDUSTRIES.find((indus) => indus.id === industry);
							return matchedIndustry && (
								<p key={index}>{matchedIndustry.name}</p>
							);
						})}
				</section> */}
			</main>
			<Footer />
		</div>
	)
}
