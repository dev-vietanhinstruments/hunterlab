import React from 'react'
import Image from 'next/image'

export function StandardCard({
	name,
	imagePath,
	text,
}) {
	return (
		<div className={`flex flex-col max-w-[400px] px-6 py-6 gap-4`}>
			<div className='relative w-full h-[180px]'>
				<Image
					fill
					src={imagePath}
					alt={`Standard ${name}`}
					className='object-contain'
					sizes='50vw, 50vw'
				/>
			</div>
			<div className='text-base tablet:text-lg desktop:text-xl font-light text-justify'>
				{text}
			</div>
		</div>
	)
}

export default function ProductCard({
	name,
	imagePath,
}) {
	return (
		<div className={`flex flex-col col-span-1 h-full px-6 py-6 gap-4 bg-white rounded-lg shadow-md`}>
			<div className='relative w-full h-[100px] tablet:h-[160px]'>
				<Image
					fill
					src={imagePath}
					alt={`${name}`}
					className='object-contain'
					sizes='10vw, 10vw'
				/>
			</div>
			<div className='text-base tablet:text-lg desktop:text-xl font-light text-center'>
				{name}
			</div>
		</div>
	)
}

export function IndustryCard({
	name,
	imagePath,
}) {
	return (
		<div className={`flex flex-row col-span-1 w-full h-full px-6 py-6 gap-4 bg-white rounded-lg shadow-md`}>
			<div>
				<Image
					src={imagePath}
					alt={`${name}`}
					width={64}
					height={64}
					className="h-8 w-8"
				/>
			</div>
			<div className='text-base tablet:text-lg desktop:text-xl font-light text-center'>
				{name}
			</div>
		</div>
	)
}
