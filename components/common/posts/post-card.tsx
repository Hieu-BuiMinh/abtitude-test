import { SVGIcons } from '@/components/common/icons/svg-icons'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostCardProps {
	className?: string
	imageSrc: string
	label: string
	title: string
	date: string
	readTime: string
	linkHref: string
}

function PostCard({ className, imageSrc, label, title, date, readTime, linkHref }: PostCardProps) {
	return (
		<div className={cn(className, 'h-[500px] md:h-[717px] rounded-3xl flex flex-col gap-4')}>
			<Image src={imageSrc} alt={title} width={500} height={717} className="w-full object-cover" />

			<div>
				<span className="bg-[#E2F0FE] text-[#0F4F9E] px-2 py-1 rounded-full">{label}</span>
			</div>

			<p className="font-extrabold text-2xl">{title}</p>

			<div className="flex gap-4 flex-wrap">
				<div className="flex gap-2">
					<SVGIcons.calendar />
					<span>{date}</span>
				</div>
				<div className="flex gap-2">
					<SVGIcons.clock />
					<span>{readTime}</span>
				</div>
			</div>

			<Link
				href={linkHref}
				className={cn(
					'flex justify-between items-center h-[50px] max-w-[200px] cursor-pointer bg-transparent z-10 text-[#667F93] text-lg'
				)}
			>
				Khám phá thêm
				<ArrowRight />
			</Link>
		</div>
	)
}

export default PostCard
