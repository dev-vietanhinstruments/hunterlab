import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'

export function StandardCard({ name, image, desc, ...props }) {
	return (
		<div
			className={`flex flex-col col-span-1 h-full p-3 gap-4`}
			{...props}>
			<div>
				<Image
					width={0}
					height={0}
					src={image}
					alt={`${name}`}
					className='object-contain w-full h-[120px] sm:h-[160px] lg:h-[180px]'
					sizes='100vw, 100vw'
				/>
			</div>
			<div className='text-base text-justify'>{desc}</div>
		</div>
	)
}

export default function ProductCard({ name, image, href, ...props }) {
	return (
		<Link
			href={String(href)}
			{...props}>
			<div className={`flex flex-col col-span-1 h-full p-3 gap-4`}>
				<div>
					<Image
						width={0}
						height={0}
						src={image}
						alt={`${name}`}
						className='object-contain hover:scale-110 transition-all duration-300 ease-in-out w-full h-[180px]'
						sizes='100vw, 100vw'
					/>
				</div>
				<p className='text-lg lg:text-xl font-semibold text-center'>
					{name}
				</p>
			</div>
		</Link>
	)
}

export function IndustryCard({ name, image, href, ...props }) {
	return (
		<Link
			href={String(href)}
			{...props}>
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
				<p className='text-lg lg:text-xl font-semibold text-center'>
					{name}
				</p>
			</div>
		</Link>
	)
}

export function SupportCard({ name, image, href, desc, ...props }) {
	return (
		<div
			className='flex flex-col col-span-1 h-full p-3 justify-between'
			{...props}>
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
			<Button href={href}>Tìm hiểu thêm</Button>
		</div>
	)
}

export function DocCard({ title, href }) {
	return (
		<Link href={String(href)}>
			<div className='bg-card py-4 px-6 rounded-md group hover:bg-primary transition-all duration-300 ease-in-out'>
				<div className='flex flex-row items-center gap-3 text-lg lg:text-xl group-hover:text-white'>
					{title}
					<Image
						src='/arrow-right.svg'
						alt='Right arrow'
						width={64}
						height={64}
						className='size-6 group-hover:invert group-hover:translate-x-6 transition-all duration-300 ease-in-out'
					/>
				</div>
			</div>
		</Link>
	)
}

export function ProductCardWithDesc({ name, image, href, desc, ...props }) {
	return (
			<div
				className={`grid grid-col md:grid-row md:grid-cols-[30%_70%] w-full h-full p-3 gap-6 relative`} {...props}>
				<div>
					<Image
						width={0}
						height={0}
						src={image}
						alt={`${name}`}
						className='object-contain w-full h-[200px]'
						sizes='100vw, 100vw'
					/>
				</div>
				<div className='flex flex-col'>
					<h4 className='text-xl md:text-2xl font-semibold mb-2'>
						{name}
					</h4>
					<p className='text-base md:text-lg'>{desc}</p>
					<Button href={href}>Tìm hiểu thêm</Button>
				</div>
			</div>
	)
}
