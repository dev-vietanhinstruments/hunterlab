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
import { DocCard } from '@/components/Card'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'
import RenderMarkdownBlock from '@/components/RenderBlock'


export async function generateMetadata({ params }) {
	const id = params.slug.split('-p.')[1]
   
	const product = PRODUCTS.find((product) => product.id === id)

	return {
	  title: product.name,
	}
}

export async function generateStaticParams() {
	return PRODUCTS.map((product) => ({
		slug: `${toLowerCaseNonAccentVietnamese(product.name).replace(/\s+/g, '-')}-p.${product.id}`,
	}))
}

export default function Page({ params }) {
	const id = params.slug.split('-p.')[1]

	const product = PRODUCTS.find((product) => product.id === id)
	const category = CATEGORIES.find(
		(category) => product.category === category.id
	)
	const industries = product.industries
	const specifications = product.specifications
	const assets = product.assets
	const documents = product.documents

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
				<Intro className='bg-card'>
					<div
						className={`grid grid-col md:grid-row md:grid-cols-10 w-full max-w-[80rem] h-full gap-12 px-4 items-center`}>
						<div className='md:col-span-4'>
							<Image
								width={0}
								height={0}
								src={product.image}
								alt={`${product.name}`}
								className='object-contain w-full h-[300px] md:h-[320px]'
								sizes='100vw, 100vw'
							/>
						</div>
						<div className='flex flex-col justify-center flex-wrap md:col-span-6'>
							<Link
								className='text-lg md:text-xl text-notation font-semibold mb-3'
								href={`/products#${category.tag}`}>
								{category.name}
							</Link>
							<h1 className='text-2xl md:text-3xl font-semibold mb-4 text-heading'>
								{product.name}
							</h1>
							<div className='flex flex-row gap-2 flex-wrap text-lg lg:text-xl mb-4'>
								{industryRecords.length ? (
									industryRecords.map((industry, index) => {
										const industryPath = `/industries/${toLowerCaseNonAccentVietnamese(
											industry.name
										).replace(/\s+/g, '-')}-i.${
											industry.id
										}`
										return (
											<TagButton
												key={index}
												href={industryPath}>
												{industry.name}
											</TagButton>
										)
									})
								) : (
									<TagButton href=''>Khác</TagButton>
								)}
							</div>
							{product.features.length > 1 ? (
							<Intro.List className='text-base lg:text-base'>
								{product.features.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</Intro.List>
							) : (
								<div>{product.features[0]}</div>
							)}
							{product.ctaButton ? (
								<Button
									href={product.ctaButton.href}
									className='w-full text-center'>
									{product.ctaButton.label}
								</Button>
							) : (
								<Button
									href='tel:0937998390'
									className='w-full text-center'>
									Liên hệ ngay: 0937998390
								</Button>
							)}
						</div>
					</div>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Mô tả</Section.Heading>
					<RenderMarkdownBlock className='mb-0' content={product.desc} />
				</Section>
				<Section>
					<Section.Heading>Các thông số</Section.Heading>
					{specifications.map((spec, index) => {
						return (
							<Section.Detail
								key={index}
								title={spec.title}>
								<RenderMarkdownBlock content={spec.desc} />
							</Section.Detail>
						)
					})}
				</Section>
				<Section>
					<Section.Heading>Tài liệu</Section.Heading>
					<div className='flex flex-col gap-2'>
						{documents.map((doc, index) => (
							<DocCard
								key={index}
								title={doc.title}
								href={doc.href}
							/>
						))}
					</div>
				</Section>
				{assets.length ? (
					<Section>
						<Section.Heading>Hình ảnh</Section.Heading>
						<div className='flex flex-col gap-2'>
							{assets.map((asset, index) => (
								<div key={index}>
									<Image
										width={0}
										height={0}
										src={asset}
										alt={`Image ${index}`}
										className='object-contain w-full h-auto rounded-md'
										sizes='100vw, 100vw'
									/>
								</div>
							))}
						</div>
					</Section>
				) : null}
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
