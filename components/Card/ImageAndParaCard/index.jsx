import React from 'react'
import Image from 'next/image'

export default function ImageAndParaCard({ name, imagePath, text }) {
	return (
        <div className='flex flex-col w-[300px] px-6 py-6 gap-4'>
            <div className='relative w-full h-[180px]'>
                <Image
                    fill
                    src={imagePath}
                    alt={`Standard ${name}`}
                    className="object-contain"
                    sizes="50vw, 50vw"
                />
            </div>
            <div className="text-base tablet:text-lg desktop:text-xl font-light text-justify">{text}</div>
        </div>
	)
}
