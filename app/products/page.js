import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { DocCard } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'

export default function Products() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0'>
					<BannersCarousel images={BANNERS} />
				</Intro>
				<Section
					id='benchtop'
					className='pt-16 sm:pt-20 lg:pt-24'>
					<Section.Heading>Máy đo quang phổ để bàn</Section.Heading>
					<Section.Subtext>
						HunterLab cung cấp các giải pháp đo màu cho protein thực
						vật, sữa thực vật, thịt thực vật và nhiều loại thực phẩm
						có nguồn gốc thực vật khác.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{PRODUCTS.map(
							(product, index) =>
								product.category === '1' && (
									<div key={index}>
										<ProductCard
											name={product.name}
											image={product.image}
											href={`/products/${product.id}`}
										/>
									</div>
								)
						)}
					</div>
				</Section>
				<Section id='portable'>
					<Section.Heading>Máy Đo Màu Di Động</Section.Heading>
					<Section.Subtext>
						Máy quang phổ cầm tay của chúng tôi cho phép bạn đo khi
						đang di chuyển để có sự tiện lợi tối đa khi thử nghiệm.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{PRODUCTS.map(
							(product, index) =>
								product.category === '2' && (
									<div key={index}>
										<ProductCard
											name={product.name}
											image={product.image}
											href={`/products/${product.id}`}
										/>
									</div>
								)
						)}
					</div>
				</Section>
				<Section id='control'>
					<Section.Heading>
						Thiết Bị và Phần Mềm Kiểm Soát Chất Lượng Màu
					</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{PRODUCTS.map(
							(product, index) =>
								product.category === '3' && (
									<div key={index}>
										<ProductCard
											name={product.name}
											image={product.image}
											href={`/products/${product.id}`}
										/>
									</div>
								)
						)}
					</div>
				</Section>
				<Section className='pb-16 sm:pb-20 lg:pb-24'>
					<Section.Heading>Tài liệu</Section.Heading>
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
			</main>
			<Footer />
		</div>
	)
}
