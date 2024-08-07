import Header from './../components/Header/index'
import Carousel from '@/components/Carousel'
import Footer from './../components/Footer/index'
import ImageAndParaCard from '@/components/Card/ImageAndParaCard'

export default function Home() {
	const banners = [
		'/banners/banner_1.png',
		'/banners/banner_2.png',
		'/banners/banner_3.png',
	]

	const standards = [
		{
			name: 'tappi',
			image: '/standards/tappi.webp',
			info: 'Hiệp hội Giấy và Bột giấy Hoa Kỳ (TAPPI) đặt ra các tiêu chuẩn về chất lượng giấy, bạn có thể dễ dàng xác minh bằng máy quang phổ.',
		},
		{
			name: 'astm',
			image: '/standards/astm.webp',
			info: 'ASTM công bố các tiêu chuẩn cho nhiều ngành công nghiệp khác nhau, bao gồm dệt may, nhựa và sơn. Bằng cách xác nhận chất lượng thông qua máy quang phổ, bạn có thể đảm bảo sản phẩm của mình đạt tiêu chuẩn.',
		},
		{
			name: 'iso',
			image: '/standards/iso.webp',
			info: 'Từ việc kiểm tra an toàn thực phẩm đến thử nghiệm và hiệu chuẩn, phương pháp quang phổ có thể giúp tổ chức của bạn đáp ứng nhiều tiêu chuẩn kiểm soát chất lượng của Tổ chức Tiêu chuẩn hóa Quốc tế (ISO).',
		},
	]

	return (
		<div className='flex flex-col'>
			{/* <Header /> */}
			<Carousel images={banners} />
			<section
				id='intro'
				className='flex flex-col justify-center items-center w-full py-20 px-8'>
				<div className='flex flex-col w-full max-w-[1376px] justify-center items-center'>
					<h1 className='text-4xl tablet:text-5xl desktop:text-6xl font-medium text-[#242769]'>
						HunterLab
					</h1>
					<p className='mt-6 text-xl tablet:text-2xl desktop:text-3xl font-light text-center'>
						Với hơn 70 năm kinh nghiệm, HunterLab tự tin là nhà sản
						xuất hàng đầu trong trong việc sản xuất và cung cấp các
						thiết bị đo màu.
					</p>
					<h4 className='text-xl tablet:text-2xl desktop:text-3xl font-semibold mt-16'>
						Đáp ứng các tiêu chuẩn
					</h4>
					<div className='flex flex-row gap-6 flex-wrap justify-center mt-6'>
						{standards.map((standard, index) => (
              <div key={index}>
                <ImageAndParaCard
                  name={standard.name}
                  imagePath={standard.image}
                  text={standard.info}
                />
              </div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
