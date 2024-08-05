'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 1000,
	}

	const images = ['/banner_1.png', '/banner_2.png', '/banner_3.png']

	return (
		<section className='w-full'>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<Image
								src={image}
								alt={`Banner ${index + 1}`}
								width={1920}
								height={680}
                                className="w-full h-auto"
							/>
						</div>
					))}
				</Slider>
		</section>
	)
}
