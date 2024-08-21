import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Intro({ children, className, ...props }) {
	return (
		<section
			className={twMerge(
				'flex flex-col justify-center items-center w-full py-8 sm:py-10 lg:py-12 px-4 bg-no-repeat bg-cover',
				className
			)}
			{...props}>
			{children}
		</section>
	)
}

Intro.List = function List({ children, className, ...props }) {
	return (
		<ul className={twMerge('text-lg lg:text-xl list-disc list-inside', className)} {...props}>
			{children}
		</ul>
	)
}
