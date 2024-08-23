import { SUPPORTS } from '@/consts/homepage'
import { SupportCard } from '@/components/Card'
import Section from '@/components/Layout/Section'

export default function SupportSection() {
	return (
		<Section className='bg-card mb-0 sm:mb-0'>
			<div className='grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-3 w-full'>
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
	)
}
