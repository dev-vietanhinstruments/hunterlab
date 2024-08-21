import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS, SUPPORTS, PRODUCTS } from '@/consts/homepage'
import { INDUSTRIES } from '@/consts/industries'
import ProductCard, { SupportCard, IndustryCard } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'

export default function Page() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<BannersCarousel images={BANNERS} />
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Lĩnh vực</Section.Heading>
					<Section.Subtext>
						Cung cấp giải pháp đo màu cho nhiều lĩnh vực
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-6 w-full'>
						{INDUSTRIES.map((industry, index) => (
							<IndustryCard
								key={index}
								name={industry.name}
								image={industry.icon}
								href={`/industries/${industry.id}`}
							/>
						))}
					</div>
				</Section>
                <Section>
					<Section.Heading>Thiết bị và giải pháp</Section.Heading>
					<Section.Subtext>
						Hiệu quả, tinh gọn và chính xác
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{PRODUCTS.map((product, index) => (
							<ProductCard
								key={index}
								name={product.name}
								image={product.image}
								href={product.href}
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
