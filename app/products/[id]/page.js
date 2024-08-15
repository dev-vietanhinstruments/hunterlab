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
								{industryRecords.length ? industryRecords.map((industry, index) => (
									<TagButton key={index} href={`/industries/${industry.id}`}>{industry.name}</TagButton>
								)) : <TagButton href="">Khác</TagButton>}
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
					{specifications.map((spec, index) => {
						const descLines = spec.desc;
						return (
							<Section.Detail key={index} title={spec.title}>
								{descLines.map((line, i) => (
									<p index={i}>{line}</p>
								))}
							</Section.Detail>
						)})}
				</Section>
				{assets.length && (
					<Section>
						<Section.Heading>Hình ảnh</Section.Heading>
						<div className='flex flex-col gap-2'>
							{assets.map((asset, index) => (
								<div key={index} className='relative w-full h-[40vh] md:h-[60vh]'>
									<Image
										fill
										src={asset}
										alt={`Image ${index}`}
										className='object-cover'
										sizes='100vw, 100vw'
									/>
								</div>
							))}
						</div>
					</Section>
				)}
				<Section className='pb-16 sm:pb-20 lg:pb-24'>
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
			</main>
			<Footer />
		</div>
	)
}
