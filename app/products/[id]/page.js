import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { ProductCardWithDesc } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import { INDUSTRIES } from '@/consts/industries'
import { CATEGORIES } from '@/consts/categories'

export async function generateStaticParams() {
	return PRODUCTS.map((product) => ({
	  id: product.id,
	}))
  }

export default function Page({ params }) {
	const product = PRODUCTS.find((product) => product.id === params.id)
    const category = CATEGORIES.find((category) => product.category === category.id);
    const industries = product.industries;

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
					id='application'
					className='flex flex-col justify-center items-center w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8'>
                    <p>{product.name}</p>
                    <p>Loại máy: {category.name}</p>
                    {industries.map((industry, index) => {
							const matchedIndustry = INDUSTRIES.find((indus) => indus.id === industry);
							return matchedIndustry && (
								<p key={index}>{matchedIndustry.name}</p>
							);
						})}
				</section>
			</main>
			<Footer />
		</div>
	)
}
