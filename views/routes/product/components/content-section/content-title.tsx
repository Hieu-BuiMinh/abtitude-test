import { SVGIcons } from '@/components/common/icons/svg-icons'
import Image from 'next/image'
import React from 'react'

interface ContentTitleProps {
	category: string
	title: string
	authorName: string
	authorAvatar: string
	updateDate: string
	readTime: string
}

function ContentTitle({ category, title, authorName, authorAvatar, updateDate, readTime }: ContentTitleProps) {
	return (
		<div className="flex gap-3 flex-col flex-wrap">
			<div>
				<span className="bg-[#E2F0FE] text-[#0F4F9E] px-2 py-1 rounded-full">{category}</span>
			</div>
			<p className="font-extrabold text-4xl">{title}</p>

			<div className="min-h-[72px] flex gap-3 items-center justify-between md:flex-row flex-col">
				<div className="flex gap-2 items-center">
					<Image
						className="size-16 border rounded-full"
						src={authorAvatar}
						alt={authorName}
						width={64}
						height={64}
					/>
					<div className="flex gap-2 flex-col h-[45px] justify-between">
						<span className="text-[#667F93] text-sm">Tác giả</span>
						<span className="text-base text-[#33404A] font-bold">{authorName}</span>
					</div>
				</div>
				<div className="flex flex-wrap gap-6 items-center">
					<div className="flex flex-wrap gap-2 h-6 justify-between">
						<SVGIcons.calendar className="size-6" />
						<span className="text-base text-[#667F93]">Cập nhật vào: {updateDate}</span>
					</div>
					<div className="flex flex-wrap gap-2 h-6 justify-between">
						<SVGIcons.clock className="size-6" />
						<span className="text-base text-[#667F93]">{readTime} phút đọc</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContentTitle
