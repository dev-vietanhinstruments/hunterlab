import Link from 'next/link'
import { twMerge } from 'tailwind-merge'


export default function Button({ href, className, children, ...props }) {
	return (
		<Link
			className={twMerge(
				'mt-3 font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg lg:text-xl md:w-fit w-full text-center transition-all duration-300 ease-in-out block',
				className
			)}
			href={href}
			{...props}>
            {children}
        </Link>
	)
}

export function TagButton({ href, className, children, ...props }) {
	return (
		<Link
			className={twMerge(
				'text-secondary border-2 border-secodary border-secondary hover:bg-secondary hover:text-white rounded-md px-2 py-1 text-sm lg:text-base w-fit transition-all duration-300 ease-in-out',
				className
			)}
			href={href}
			{...props}>
            {children}
        </Link>
	)
}

export function FloatingButton({ href, className, children, ...props }) {
	return (
		<Link
			className={twMerge(
				'fixed bottom-6 left-6 rounded-full shadow-lg',
				className
			)}
			href={href}
			{...props}>
            {children}
        </Link>
	)
}