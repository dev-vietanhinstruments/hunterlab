'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		pauseOnFocus: true,
		autoplay: true,
		autoplaySpeed: 1000,
	}

	return (
		<section className='w-full overflow-hidden outline-none'>
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
