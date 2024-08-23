import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Image from 'next/image'
import { PRODUCTS } from '@/consts/homepage'
import ProductCard from '@/components/Card'
import SupportSection from '@/components/SupportSection'

export default function Page() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro
					className='h-[300px] md:h-[320px] px-4 justify-end'
					style={{
						backgroundImage: `url(https://www.hunterlab.com/media/original_images/yellow-pieces.jpg)`,
					}}>
					<div className='w-full max-w-[80rem] px-4'>
						<p className='text-xl lg:text-2xl text-white mb-3'>
							HunterLab
						</p>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl text-white mb-8 font-bold'>
							Đổi mới. Tầm nhìn. Tiên phong.
						</h1>
					</div>
				</Intro>
				<Section className='mt-8 sm:mt-12'>
					<Section.Heading>Thành tựu</Section.Heading>
					<Section.Subtext>
						Trải qua hơn 70 năm hình thành và phát triển, HunterLab
						đã có một hành trình dài và đầy tự hào trong việc phát
						triển các công cụ đo màu hàng đầu thế giới. Chúng tôi
						không chỉ là người tiên phong mà còn là người dẫn đầu
						trong việc định hình tương lai của ngành công nghiệp đo
						màu.
					</Section.Subtext>
					<div className='flex justify-center items-center'>
						<Image
							width={0}
							height={0}
							src='https://www.hunterlab.com/media/original_images/image5.jpg'
							alt='Richard Hunter goal'
							className='object-contain w-full h-auto rounded-md'
							sizes='100vw, 100vw'
							priority={true}
						/>
					</div>
				</Section>
				<Section>
					<Section.Heading>Sứ mệnh</Section.Heading>
					<Section.Subtext>
						Sứ mệnh của chúng tôi không chỉ dừng lại ở việc cung cấp
						các thiết bị đo màu, mà còn là việc đồng hành cùng khách
						hàng, giúp họ đạt được sự hoàn hảo về màu sắc, từ đó
						nâng cao chất lượng sản phẩm và đáp ứng những yêu cầu
						ngày càng khắt khe của thị trường.
					</Section.Subtext>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/nQGarIbqeKU?si=fLIjjHSL2dHnceW3'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						className='rounded-md w-full h-[315px] md:h-[450px] lg:h-[650px]'
						allowfullscreen></iframe>
				</Section>
				<Section>
					<Section.Heading>Câu chuyện của chúng tôi</Section.Heading>
					<div className='lg:grid lg:grid-flow-row lg:grid-cols-5 gap-8'>
						<div className='lg:col-span-3'>
							<Section.Subtext className='font-bold'>
								HunterLab được thành lập bởi Richard Hunter vào
								năm 1952.
							</Section.Subtext>
							<Section.Subtext>
								Hơn 70 năm trước, nhà khoa học Richard Hunter đã
								nhen nhóm một ước mơ táo bạo: ứng dụng khoa học
								màu sắc để thay đổi thế giới. Từ những ngày đầu
								làm thực tập sinh tại Cục Tiêu Chuẩn Quốc Gia
								vào năm 1927, ông đã bị cuốn hút bởi cách mắt
								người nhận thức màu sắc và cách điều này ảnh
								hưởng đến quyết định của con người.
							</Section.Subtext>
							<Section.Subtext>
								Sản phẩm đầu tiên của công ty, máy đo độ chênh
								lệch màu, nhanh chóng được các tập đoàn lớn như
								Proctor & Gamble và Dow Chemical đón nhận. Nhờ
								có những công cụ đo lường chính xác này, các
								doanh nghiệp đã có thể đảm bảo sự đồng nhất và
								chất lượng cao cho sản phẩm của mình. Không chỉ
								đáp ứng nhu cầu của khách hàng, các giải pháp
								của HunterLab còn mở ra những chân trời mới
								trong lĩnh vực kiểm soát màu sắc.
							</Section.Subtext>
							<Section.Subtext>
								Richard Hunter không chỉ phát triển công nghệ mà
								còn xây dựng nền tảng cho khoa học màu sắc hiện
								đại. Ông là người tiên phong tạo ra thang màu
								Hunter L.a.b và các công thức đo lường mới, biến
								kiểm soát màu sắc thành hiện thực cho nhiều
								ngành công nghiệp. Cuốn sách{' '}
								<strong>"The Measurement of Appearance"</strong>{' '}
								của ông vẫn là tài liệu tham khảo quan trọng
								trong ngành khoa học màu sắc.
							</Section.Subtext>
						</div>
						<div className='flex flex-col lg:col-span-2 gap-4'>
							<Image
								width={0}
								height={0}
								src='https://www.hunterlab.com/media/original_images/image4.jpg'
								alt='Richard Hunter'
								className='object-contain w-full h-auto rounded-md'
								sizes='100vw, 100vw'
								priority={true}
							/>
							<Image
								width={0}
								height={0}
								src='https://www.hunterlab.com/media/original_images/unnamed.jpg'
								alt='Richard Hunter factory'
								className='object-contain w-full h-auto rounded-md'
								sizes='100vw, 100vw'
								priority={true}
							/>
						</div>
					</div>
				</Section>
				<Section className='pb-16 sm:pb-20 lg:pb-24'>
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
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
