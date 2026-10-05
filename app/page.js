import Header from './../components/Header/index'
import Footer from './../components/Footer/index'
import { PARTNERS, STANDARDS, PRODUCTS } from '@/consts/homepage'
import ProductCard, {
	IndustryCard,
	StandardCard,
} from '@/components/Card'
import { INDUSTRIES } from '@/consts/industries'
import { PartnersCarousel } from '@/components/Carousel'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'
import Image from 'next/image'


export default function Home() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<Image
						width={1400}
						height={486}
						src='/banners/banner.png'
						alt='Hunterlab'
						className='w-full h-auto rounded-md'
						priority={true}
					/>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Đáp ứng các tiêu chuẩn</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-3 justify-center gap-6'>
						{STANDARDS.map((standard, index) => (
							<StandardCard
								key={index}
								name={standard.name}
								image={standard.image}
								desc={standard.desc}
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
				<Section className='mb-16 sm:mb-20'>
					<Section.Heading>Lĩnh vực</Section.Heading>
					<Section.Subtext>
						Cung cấp giải pháp đo màu cho nhiều lĩnh vực
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-6 w-full'>
						{INDUSTRIES.map((industry, index) => {
							const industryPath = `/industries/${toLowerCaseNonAccentVietnamese(industry.name).replace(/\s+/g, '-')}-i.${industry.id}`;
							return (
								<IndustryCard
									key={index}
									name={industry.name}
									image={industry.icon}
									href={industryPath}
								/>
							)
						})}
					</div>
				</Section>
				<Section className='mb-16 sm:mb-20'>
					<Section.Heading>Đối tác của HunterLab</Section.Heading>
					<PartnersCarousel images={PARTNERS} />
				</Section>
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
