import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { DocCard } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'


export const metadata = {
	title: "Sản phẩm",
};

export default function Products() {
	const productsOfCat1 = PRODUCTS.filter(
		(product) => product.category === '1'
	)
	const productsOfCat2 = PRODUCTS.filter(
		(product) => product.category === '2'
	)
	const productsOfCat3 = PRODUCTS.filter(
		(product) => product.category === '3'
	)
	const productsOfCat4 = PRODUCTS.filter(
		(product) => product.category === '4'
	)

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<BannersCarousel images={BANNERS} />
				</Intro>
				<Section
					id='benchtop'
					className='pt-16 sm:pt-20 lg:pt-24'>
					<Section.Heading>Máy Đo Màu Quang Phổ Để Bàn</Section.Heading>
					<Section.Subtext>
						Máy đo màu và quang phổ để bàn của HunterLab mang lại độ
						chính xác và linh hoạt tối ưu cho việc đo mẫu, bất kể
						kích thước, hình dạng, hay kết cấu. Với khả năng đo màu
						dưới các điều kiện ánh sáng khác nhau, thiết bị này
						không chỉ phù hợp cho kiểm soát chất lượng mà còn cho
						nghiên cứu và kiểm soát quy trình.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{productsOfCat1.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<div key={index}>
									<ProductCard
										name={product.name}
										image={product.image}
										href={productPath}
									/>
								</div>
							)
						})}
					</div>
				</Section>
				<Section id='portable'>
					<Section.Heading>Máy Đo Màu Quang Phổ Di Động</Section.Heading>
					<Section.Subtext>
						Máy đo màu/quang phổ cầm tay HunterLab là công cụ lý
						tưởng để đo màu mẫu di động, đáp ứng nhu cầu kiểm tra
						chất lượng nhanh chóng và hiệu quả.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{productsOfCat2.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<div key={index}>
									<ProductCard
										name={product.name}
										image={product.image}
										href={productPath}
									/>
								</div>
							)
						})}
					</div>
				</Section>
				<Section id='control'>
					<Section.Heading>
						Thiết Bị và Phần Mềm Kiểm Soát Chất Lượng Màu
					</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{productsOfCat3.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<div key={index}>
									<ProductCard
										name={product.name}
										image={product.image}
										href={productPath}
									/>
								</div>
							)
						})}
					</div>
				</Section>
				<Section id='discontinued'>
					<Section.Heading>Dòng Máy Đã Ngừng Sản Xuất</Section.Heading>
					<Section.Subtext>
						HunterLab đã ngừng sản xuất các dòng máy dưới đây. Tuy nhiên, thiết bị vẫn được hỗ trợ bảo trì và sửa chữa thông qua hệ thống dịch vụ của HunterLab. Đối với khách hàng có nhu cầu nâng cấp hệ thống đo màu, HunterLab hiện cung cấp thế hệ thiết bị L2 mới với công nghệ được cải tiến, khả năng đo màu chính xác, hiệu suất ổn định và nhiều tính năng hỗ trợ kiểm soát chất lượng hiện đại hơn.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{productsOfCat4.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<div key={index}>
									<ProductCard
										name={product.name}
										image={product.image}
										href={productPath}
									/>
								</div>
							)
						})}
					</div>
				</Section>
				<Section>
					<Section.Heading>Tài Liệu</Section.Heading>
					<div className='flex flex-col gap-2'>
						<DocCard
							title='Màu sắc và hình thức'
							href='https://www.hunterlab.com/media/documents/an-1033-00-color-versus-appearance.pdf'
						/>
						<DocCard
							title='Nhận thức và ý nghĩa màu sắc'
							href='https://www.hunterlab.com/blog/spectrophotometers-facilitate-color-communication-across-languages-and-cultures/'
						/>
						<DocCard
							title='Đo lường các thuộc tính hình học của sản phẩm'
							href='https://support.hunterlab.com/hc/en-us/articles/203420399-Measuring-the-Geometric-Attributes-of-Your-Products-AN-1007b'
						/>
						<DocCard
							title='Các tài liệu ứng dụng'
							href='https://www.hunterlab.com/en/learn/application-notes/'
						/>
						<DocCard
							title='Các phương pháp đo lường'
							href='https://www.hunterlab.com/en/learn/measurement-methods/'
						/>
					</div>
				</Section>
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
