import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AsideCategory from '@/views/routes/landing-page/components/content-section/category'
import HeadingRibbon from '@/views/routes/landing-page/components/content-section/heading-ribbon'
import { Search } from 'lucide-react'
import React from 'react'

const categories = [
	{ label: 'Tất cả', count: 108 },
	{ label: 'Thiết Kế Website', count: 36 },
	{ label: 'Thiết Kế App Mobile', count: 13 },
	{ label: 'Quản Lý Sản Xuất', count: 25 },
	{ label: 'Quản Lý Bán Hàng', count: 22 },
	{ label: 'Báo Chí Nói Về FOSO', count: 7 },
	{ label: 'Tin Tức FOSO', count: 5 },
]

function AsideContent() {
	return (
		<div className="flex flex-col gap-5">
			<p className="font-extrabold text-2xl">Tìm Kiếm</p>

			<div className="rounded-2xl border h-16 flex gap-3 items-center justify-between px-2">
				<Input className="size-full border-none outline-none shadow-none focus-visible:ring-0" />
				<Button size="icon" className="size-12 bg-[#15AA7A]">
					<Search size={20} className="size-5" />
				</Button>
			</div>

			<p className="font-extrabold text-2xl">Danh Mục</p>
			<AsideCategory categories={categories} />

			<HeadingRibbon
				className="col-span-2"
				title={<p className="mt-48 mb-10 z-10">Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!</p>}
				buttonLabel="Tham Gia Ngay"
				buttonLink="/"
				imageSrc="/assets/images/1425926236.png"
				imageAlt="Community Image"
				type="vertical"
			/>
			<HeadingRibbon
				className="col-span-2"
				title={
					<p className="mt-48 mb-10 z-10">
						Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!
					</p>
				}
				buttonLabel="Tham Gia Ngay"
				buttonLink="/"
				imageSrc="/assets/images/Group.png"
				imageAlt="Community Image"
				type="vertical"
			/>
		</div>
	)
}

export default AsideContent
