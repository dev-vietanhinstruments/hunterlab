import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Intro({ children, className, ...props }) {
	return (
		<section
			className={twMerge(
				'flex flex-col justify-center items-center w-full py-8 sm:py-10 lg:py-12 px-8',
				className
			)}
			{...props}>
			{children}
		</section>
	)
}
