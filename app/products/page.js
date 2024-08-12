import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { DocCard } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'

export default function Products() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<section
					id='banner'
					className='w-full overflow-hidden'>
					<BannersCarousel images={BANNERS} />
				</section>
				<section
					id='benchtop'
					className='flex flex-col justify-center items-center w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
							Máy đo quang phổ để bàn
						</h2>
						<p className='mt-4 text-lg sm:text-xl lg:text-2xl font-light'>
							HunterLab cung cấp các giải pháp đo màu cho protein
							thực vật, sữa thực vật, thịt thực vật và nhiều loại
							thực phẩm có nguồn gốc thực vật khác.
						</p>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6'>
							{PRODUCTS.map(
								(product, index) =>
									product.category === 1 && (
										<div key={index}>
											<ProductCard
												name={product.name}
												imagePath={product.image}
												href={`/products/${product.id}`}
											/>
										</div>
									)
							)}
						</div>
					</div>
				</section>
				<section
					id='portable'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
                            Máy Đo Màu Di Động MiniScan EZ
						</h2>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6'>
							{PRODUCTS.map(
								(product, index) =>
									product.category === 2 && (
										<div key={index}>
											<ProductCard
												name={product.name}
												imagePath={product.image}
												href={`/products/${product.id}`}
											/>
										</div>
									)
							)}
						</div>
					</div>
				</section>
				<section
					id='control'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
                            Thiết Bị và Phần Mềm Kiểm Soát Chất Lượng Màu
						</h2>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6'>
							{PRODUCTS.map(
								(product, index) =>
									product.category === 3 && (
										<div key={index}>
											<ProductCard
												name={product.name}
												imagePath={product.image}
												href={`/products/${product.id}`}
											/>
										</div>
									)
							)}
						</div>
					</div>
				</section>
				<section
					id='docs'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px]'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769]'>
                            Tài liệu
						</h2>
						<div className='grid grid-flow-col mt-6 gap-6'>
							<div>
                                <DocCard title="Màu sắc và hình thức" url="https://www.hunterlab.com/media/documents/an-1033-00-color-versus-appearance.pdf" />
                                <DocCard title="Nhận thức và ý nghĩa màu sắc" url="https://www.hunterlab.com/blog/spectrophotometers-facilitate-color-communication-across-languages-and-cultures/" />
                                <DocCard title="Đo lường các thuộc tính hình học của sản phẩm" url="https://support.hunterlab.com/hc/en-us/articles/203420399-Measuring-the-Geometric-Attributes-of-Your-Products-AN-1007b" />
                                <DocCard title="Các tài liệu ứng dụng" url="https://www.hunterlab.com/en/learn/application-notes/" />
                                <DocCard title="Các phương pháp đo lường" url="https://www.hunterlab.com/en/learn/measurement-methods/" />
                            </div>
						</div>
					</div>
				</section>
				{/* <section
					id='industry'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
							Cung cấp giải pháp đo màu cho nhiều ngành
						</h2>
						<div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-6 w-full'>
							{INDUSTRIES.map((industry, index) => (
								<div key={index}>
									<IndustryCard
										name={industry.name}
										imagePath={industry.icon}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
				<section
					id='partners'
					className='flex flex-col justify-center items-center w-full p-8 sm:p-10 lg:p-12 px-8'>
						<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
								Đối tác của HunterLab
							</h2>
							<PartnersCarousel images={PARTNERS} />
						</div>
				</section>
				<section
					id='support'
					className='flex flex-col justify-center items-center w-full pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 px-8'>
					<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
						<h4 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-1 text-center'>
							Bạn cần hỗ trợ?
						</h4>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242769] text-center'>
							Liên hệ với chúng tôi.
						</h2>
						<div className='grid grid-flow-row gap-6 grid-cols-1 sm:grid-cols-3 w-full mt-6'>
							{SUPPORTS.map((support, index) => (
								<div key={index}>
									<SupportCard
										name={support.name}
										imagePath={support.icon}
										info={support.info}
										url={support.url}
									/>
								</div>
							))}
						</div>
					</div>
				</section> */}
			</main>
			<Footer />
		</div>
	)
}
