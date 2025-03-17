import PostCard from '@/components/common/posts/post-card'
import HeadingRibbon from '@/views/routes/landing-page/components/content-section/heading-ribbon'
import React from 'react'

const posts = [
	{
		imageSrc: '/assets/images/image.png',
		label: 'Quản Lý Sản Xuất',
		title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
		date: '17/11/2022',
		readTime: '10 phút đọc',
		linkHref: '/products',
	},
	{
		imageSrc: '/assets/images/image.png',
		label: 'Tài Nguyên',
		title: 'Cách xây dựng chiến lược tài nguyên hiệu quả',
		date: '25/12/2022',
		readTime: '12 phút đọc',
		linkHref: '/products',
	},
	{
		imageSrc: '/assets/images/image.png',
		label: 'Sản Xuất',
		title: 'Làm thế nào để tối ưu hóa quy trình sản xuất?',
		date: '03/02/2023',
		readTime: '15 phút đọc',
		linkHref: '/products',
	},
	{
		imageSrc: '/assets/images/image.png',
		label: 'Quản Lý Sản Xuất',
		title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
		date: '17/11/2022',
		readTime: '10 phút đọc',
		linkHref: '/products',
	},
	{
		imageSrc: '/assets/images/image.png',
		label: 'Tài Nguyên',
		title: 'Cách xây dựng chiến lược tài nguyên hiệu quả',
		date: '25/12/2022',
		readTime: '12 phút đọc',
		linkHref: '/products',
	},
	{
		imageSrc: '/assets/images/image.png',
		label: 'Sản Xuất',
		title: 'Làm thế nào để tối ưu hóa quy trình sản xuất?',
		date: '03/02/2023',
		readTime: '15 phút đọc',
		linkHref: '/products',
	},
]

function LandingPageMainContent() {
	return (
		<div className="flex flex-col gap-4">
			<p className="font-extrabold text-4xl">Tất cả bài viết</p>

			<div className="grid grid-cols-2 gap-4">
				<HeadingRibbon
					className="col-span-2"
					title={
						<p className="font-bold text-4xl z-10 mb-10">
							Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
						</p>
					}
					buttonLabel="Tham Gia Ngay"
					buttonLink="/"
					imageSrc="/assets/images/Group_01.png"
					imageAlt="Community Image"
				/>

				{posts.map((post, index) => (
					<PostCard
						key={index}
						imageSrc={post.imageSrc}
						label={post.label}
						title={post.title}
						date={post.date}
						readTime={post.readTime}
						linkHref={post.linkHref}
					/>
				))}
			</div>
		</div>
	)
}

export default LandingPageMainContent
