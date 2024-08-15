import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function StandardCard({ name, image, desc, ...props }) {
	return (
		<div className={`flex flex-col col-span-1 h-full p-3 gap-4`} {...props}>
			<div className='relative w-full h-[120px] sm:h-[160px] lg:h-[180px]'>
				<Image
					fill
					src={image}
					alt={`${name}`}
					className='object-contain'
					sizes='100vw, 100vw'
				/>
			</div>
			<div className='text-base text-justify'>{desc}</div>
		</div>
	)
}

export default function ProductCard({ name, image, href, ...props }) {
	return (
		<Link href={String(href)} {...props}>
			<div
				className={`flex flex-col col-span-1 h-full p-3 gap-4`}>
				<div className='relative w-full h-[180px] sm:h-[180px]'>
					<Image
						fill
						src={image}
						alt={`${name}`}
						className='object-contain hover:scale-110 transition-all duration-300 ease-in-out'
						sizes='100vw, 100vw'
					/>
				</div>
				<p className='text-lg lg:text-xl font-semibold text-center'>{name}</p>
			</div>
		</Link>
	)
}

export function IndustryCard({ name, image, href, ...props }) {
	return (
		<Link href={String(href)} {...props}>
			<div
				className={`group flex flex-col col-span-1 w-full h-full p-6 gap-4 bg-card rounded-md items-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out`}>
				<div>
					<Image
						src={image}
						alt={`${name}`}
						width={64}
						height={64}
						className='size-6 lg:size-8 group-hover:invert'
					/>
				</div>
				<p className='text-lg lg:text-xl font-semibold text-center'>{name}</p>
			</div>
		</Link>
	)
}

export function SupportCard({ name, image, href, desc, ...props }) {
	return (
		<div className='flex flex-col col-span-1 h-full p-3 justify-between gap-8' {...props}>
			<div>
				<div className='flex flex-row justify-between items-center mb-3'>
					<h4 className='text-xl md:text-2xl font-semibold'>
						{name}
					</h4>
					<Image
						src={image}
						alt={`${name}`}
						width={64}
						height={64}
						className='size-8'
					/>
				</div>
				<p className='text-lg lg:text-xl'>{desc}</p>
			</div>
			<button className='font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-5 rounded-full text-lg lg:text-xl w-fit transition-all duration-300 ease-in-out'>
			Tìm hiểu thêm
			</button>
		</div>
	)
}

export function DocCard({ title, url }) {
	return (
		<Link href={String(url)}>
			<div
				className={`flex flex-row w-full p-1 border-b-2 border-[#CDCDCD] items-center`}>
					<div className='flex flex-row w-full items-center justify-between p-4 hover:bg-white rounded-lg font-light hover:font-semibold gap-4'>
						<div className='text-base sm:text-lg lg:text-xl flex-wrap'>{title}</div>
					</div>
			</div>
		</Link>
	)
}

export function ProductCardWithDesc({ name, imagePath, href, desc }) {
	return (
		<Link href={String(href)}>
			<div
				className={`flex flex-col col-span-1 h-full p-6 gap-4 bg-white rounded-lg shadow-md border-2 border-white hover:border-[#242769]`}>
				<div className='relative w-full h-[100px] sm:h-[160px]'>
					<Image
						fill
						src={imagePath}
						alt={`${name}`}
						className='object-contain'
						sizes='10vw, 10vw'
					/>
				</div>
				<p className='text-base font-bold text-center'>{name}</p>
				<p className='text-base font-light text-center'>{desc}</p>
			</div>
		</Link>
	)
}

