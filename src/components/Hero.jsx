import React from 'react'

const Hero = () => {
	return (
		<section className="relative md:py-60 py-36 items-center">
			<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
				<iframe src="https://www.youtube.com/embed/xhrNxU-4q1U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]" />
			</div>
			<div className="container">
				<div className="grid grid-cols-1 pb-8 text-center mt-10">
					<h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">Together today</h3>
					<p className="text-slate-300 text-lg max-w-2xl mx-auto">
						for a brighter future tomorrow
					</p>
					<div className="subcribe-form z-1 mt-8 mb-8">
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero