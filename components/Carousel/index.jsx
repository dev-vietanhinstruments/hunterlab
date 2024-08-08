'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NextArrow(props) {
	const { className, style, onClick, css } = props;
	return (
	  <div
		className={className + ' before:!text-[#242769] before:!text-4xl z-30'}
		style={{ ...style, display: "block", ...css }}
		onClick={onClick}
	  />
	);
  }
  
  function PrevArrow(props) {
	const { className, style, onClick, css } = props;
	return (
	  <div
		className={className + ' before:!text-[#242769] before:!text-4xl z-30'}
		style={{ ...style, display: "block", ...css }}
		onClick={onClick}
	  />
	);
  }

export default function BannersCarousel({ images }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		pauseOnFocus: true,
		autoplay: true,
		autoplaySpeed: 1000,
		prevArrow: <PrevArrow css={{ left: '10px' }} />,
		nextArrow: <NextArrow css={{ right: '25px' }} />,
	}

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={`Banner ${index + 1}`}
					width={1920}
					height={680}
					className='w-full h-auto'
				/>
			))}
		</Slider>
	)
}

export function PartnersCarousel({ images }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: false,
		pauseOnFocus: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	}

	return (
		<div className='w-full h-full justify-center items-center mt-10'>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className='relative h-[100px] tablet:h-[120px] desktop:h-[140px] focus:outline-none'>
						<Image
							fill
							src={image}
							alt={`Partner ${index + 1}`}
							sizes='30vw, 30vw'
							className='h-full w-auto object-contain'
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}
