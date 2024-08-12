import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function StandardCard({ name, imagePath, text }) {
	return (
		<div className={`flex flex-col col-span-1 h-full p-3 gap-4`}>
			<div className='relative w-full h-[120px] sm:h-[160px] lg:h-[180px]'>
				<Image
					fill
					src={imagePath}
					alt={`Standard ${name}`}
					className='object-contain'
					sizes='30vw, 30vw'
				/>
			</div>
			<div className='text-base font-light text-justify'>{text}</div>
		</div>
	)
}

export default function ProductCard({ name, imagePath, href }) {
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
				<p className='text-base font-light text-center'>{name}</p>
			</div>
		</Link>
	)
}

export function IndustryCard({ name, imagePath }) {
	return (
		<div
			className={`flex flex-row col-span-1 w-full h-full p-6 gap-4 bg-white rounded-lg shadow-md items-center`}>
			<div>
				<Image
					src={imagePath}
					alt={`${name}`}
					width={64}
					height={64}
					className='h-8 w-8'
				/>
			</div>
			<p className='text-base font-light text-center'>{name}</p>
		</div>
	)
}

export function SupportCard({ name, imagePath, url, info }) {
	return (
		<div className='flex flex-col col-span-1 h-full p-6 bg-white rounded-lg shadow-md justify-between gap-8'>
			<div>
				<div className='flex flex-row justify-between items-center mb-2'>
					<h4 className='text-lg sm:text-xl lg:text-2xl font-semibold'>
						{name}
					</h4>
					<Image
						src={imagePath}
						alt={`${name}`}
						width={64}
						height={64}
						className='h-8 w-8'
					/>
				</div>
				<p className='text-base font-light'>{info}</p>
			</div>
			<div className='flex flex-row items-center gap-3'>
				<div className='text-base font-light'>Tìm hiểu thêm</div>
				<div>
					<Image
						src='/arrow-right.svg'
						alt='Right arrow'
						width={64}
						height={64}
						className='h-5 w-5'
					/>
				</div>
			</div>
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
