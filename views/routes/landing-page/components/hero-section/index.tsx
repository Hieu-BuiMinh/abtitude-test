import Breadcrumb from '@/components/common/breadcrumb'
import Image from 'next/image'
import React from 'react'

const breadcrumbItems = [
	{ label: 'Trang chủ', href: '/' },
	{ label: 'Tài nguyên', href: '/' },
	{ label: 'Blog', href: '/' },
]

function HeroSection() {
	return (
		<div className="relative flex items-center justify-center text-[#050505] text-center max-w-7xl m-auto">
			<div className="flex flex-col gap-3 items-center justify-center py-24">
				<div className="w-full h-5 md:h-20 flex justify-start md:justify-center">
					<Breadcrumb items={breadcrumbItems} />
				</div>
				<div className="flex flex-col items-center justify-center gap-6 text-3xl md:text-5xl lg:text-6xl h-32 md:h-[200px]">
					<div>
						Blog{' '}
						<span className="font-extrabold bg-gradient-to-r from-[#53B086] via-[#85EEB3B5] to-[#54ABB1] bg-clip-text text-transparent transition-colors">
							FOSO
						</span>
					</div>
					<div className="relative">
						<span className="absolute bottom-0 right-0 w-40 md:w-64 h-7 rounded-full bg-[#A3EED6] -z-1" />
						Cập Nhật Tin Tức <span className="font-extrabold">Mới Nhất</span>
					</div>
				</div>

				<p>Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</p>
			</div>

			<Image
				alt="saly"
				width={300}
				height={300}
				src="/assets/images/Saly-42.png"
				className="absolute size-[200px] left-0 top-1/2 -translate-y-1/2 md:block hidden -z-10"
			/>
			<Image
				alt="saly1"
				width={300}
				height={300}
				src="/assets/images/Saly-1.png"
				className="absolute size-[300px] right-0 top-1/2 -translate-y-1/2 md:block hidden -z-10"
			/>
		</div>
	)
}

export default HeroSection
