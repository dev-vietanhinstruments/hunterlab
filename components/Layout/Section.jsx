import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Section({ children, className, ...props }) {
	return (
		<section
			className={twMerge(
				'flex flex-col justify-center items-center w-full py-8 sm:py-10 lg:py-12 px-8',
				className
			)}
			{...props}>
			<div className='flex flex-col w-full max-w-[80rem] justify-center px-4'>
				{children}
			</div>
		</section>
	)
}

Section.Heading = function Heading({ children, className, ...props }) {
	return (
		<h4
			className={twMerge(
				'text-2xl md:text-3xl font-semibold text-notation pl-4 border-l-4 border-primary mb-8',
				className
			)}
			{...props}>
			{children}
		</h4>
	)
}

Section.Subtext = function Subtext({ children, className, ...props }) {
	return (
		<h2
			className={twMerge(
				'text-lg lg:text-xl text-heading mb-8',
				className
			)}
			{...props}>
			{children}
		</h2>
	)
}
