import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const TweenImage = () => {
	const images = [
		{
			index: 0,
			name: 'react.png',
			alt: 'React'
		},
		{
			index: 1,
			name: 'next.png',
			alt: 'Next.JS'
		},
		{
			index: 2,
			name: 'nodejs.png',
			alt: 'Node.JS'
		},
		{
			index: 3,
			name: 'java.png',
			alt: 'Java'
		},
		{
			index: 4,
			name: 'springboot.png',
			alt: 'Spring Boot'
		}
	]
	const timer = useRef(null)
	const ref = useRef(0)
	const [index, setIndex] = useState(4)
	useEffect(() => {
		if (timer.current === null) {
			timer.current = setInterval(() => {
				if (ref.current + 1 > 5) {
					ref.current = 0
				}
				setIndex(ref.current++)
			}, 2400)
		}
		return () => {
			clearInterval(timer.current)
		}
	}, [])

	return (
		<>
			<Image
				src={`/${images[index].name}`}
				width={280}
				height={280}
				alt={`${images[index].alt}`}
			/>
		</>
	)
}

export default TweenImage
