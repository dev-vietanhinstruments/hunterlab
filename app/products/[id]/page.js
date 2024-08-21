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
import { DocCard, SupportCard } from '@/components/Card'
import { SUPPORTS } from '@/consts/homepage'


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
							<Link className='text-lg md:text-xl text-notation font-semibold mb-3' href={`/products#${category.tag}`}>
								{category.name}
							</Link>
							<h1 className='text-2xl md:text-3xl font-semibold mb-4 text-heading'>
								{product.name}
							</h1>
							<div className='flex flex-row gap-2 flex-wrap text-lg lg:text-xl mb-4'>
								{industryRecords.length ? industryRecords.map((industry, index) => (
									<TagButton key={index} href={`/industries/${industry.id}`}>{industry.name}</TagButton>
								)) : <TagButton href="">Khác</TagButton>}
							</div>
							<Intro.List>
								{product.features.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</Intro.List>
							<Button href="tel:0916424731" className='w-full text-center'>Liên hệ ngay</Button>
						</div>
					</div>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Mô tả</Section.Heading>
					<Section.Subtext className='mb-0'>{product.desc}</Section.Subtext>
				</Section>
				<Section>
					<Section.Heading>Các thông số</Section.Heading>
					{specifications.map((spec, index) => {
						const descLines = spec.desc;
						return (
							<Section.Detail key={index} title={spec.title}>
								{descLines.map((line, i) => (
									<p key={i}>{line}</p>
								))}
							</Section.Detail>
						)})}
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
										className='object-contain w-full h-auto'
										sizes='100vw, 100vw'
									/>
								</div>
							))}
						</div>
					</Section>
				) : null}
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
				<Section className='bg-card mb-0 sm:mb-0'>
					<div className='grid grid-flow-row gap-6 grid-cols-1 lg:grid-cols-3 w-full'>
						{SUPPORTS.map((support, index) => (
							<SupportCard
								key={index}
								name={support.name}
								image={support.icon}
								desc={support.desc}
								href={String(support.url)}
							/>
						))}
					</div>
				</Section>
			</main>
			<Footer />
		</div>
	)
}
