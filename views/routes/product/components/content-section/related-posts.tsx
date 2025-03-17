import PostCard from '@/components/common/posts/post-card'
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
]

function RelatedPosts() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
	)
}

export default RelatedPosts
