import Header from './../components/Header/index'
import Footer from './../components/Footer/index'
import { PARTNERS, STANDARDS, SUPPORTS, PRODUCTS } from '@/consts/homepage'
import ProductCard, {
	IndustryCard,
	StandardCard,
	SupportCard,
} from '@/components/Card'
import { INDUSTRIES } from '@/consts/industries'
import { PartnersCarousel } from '@/components/Carousel'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Button from '@/components/Button'

export default function Home() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='bg-homepage-intro h-[calc(100vh-124px)] sm:h-[560px] px-8'>
					<div className='flex flex-col w-full max-w-[1024px] justify-center items-center px-4'>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8'>
							HunterLab
						</h1>
						<p className='text-xl lg:text-2xl text-center text-white mb-5'>
							Với hơn 70 năm kinh nghiệm, HunterLab tự tin là nhà
							sản xuất hàng đầu trong việc sản xuất và cung cấp
							các thiết bị đo màu.
						</p>
						<Button
							className='text-white border-2 border-white hover:text-primary hover:bg-white'
							href='/about'>
							Tìm hiểu thêm
						</Button>
					</div>
				</Intro>
				<Section className='pt-16 sm:pt-20'>
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
				<Section className='mb-16 sm:mb-20'>
					<Section.Heading>Đối tác của HunterLab</Section.Heading>
					<PartnersCarousel images={PARTNERS} />
				</Section>
				<Section className='pb-16 sm:pb-20 lg:pb-24'>
					<Section.Heading>Liên hệ với chúng tôi</Section.Heading>
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
