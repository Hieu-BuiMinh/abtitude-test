import HeadingRibbon from '@/views/routes/landing-page/components/content-section/heading-ribbon'
import ArticleContent from '@/views/routes/product/components/content-section/artical-content'
import Image from 'next/image'

const contentData = [
	{
		id: '1',
		title: 'Quy trình 5S là gì?',
	},
	{
		id: '2',
		title: 'Lợi ích quy trình 5S đem lại',
	},
	{
		id: '3',
		title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
		children: [
			{ id: '3.1', title: 'Cải thiện rõ nét môi trường làm việc' },
			{ id: '3.2', title: 'Tiết kiệm thời gian đáng kể' },
			{ id: '3.3', title: 'Tăng năng suất làm việc' },
			{ id: '3.4', title: 'Tiết kiệm chi phí' },
			{ id: '3.5', title: 'Tăng chất lượng sản phẩm' },
		],
	},
	{
		id: '4',
		title: 'Quy trình 5S gồm các bước:',
		children: [
			{ id: '4.1', title: 'Seiri (Ngăn nắp)' },
			{ id: '4.2', title: 'Seiton (Sắp xếp)' },
			{ id: '4.3', title: 'Seiso (Vệ sinh)' },
			{ id: '4.4', title: 'Seiketsu (Tiêu chuẩn hóa)' },
			{ id: '4.5', title: 'Shitsuke (Kỷ luật)' },
		],
	},
	{
		id: '5',
		title: 'Quy trình được thực hiện như sau:',
		children: [
			{ id: '5.1', title: 'Giai đoạn chuẩn bị' },
			{ id: '5.2', title: 'Triển khai rộng rãi' },
			{ id: '5.3', title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp' },
			{ id: '5.4', title: 'Sàng lọc, sắp xếp và đánh giá' },
			{ id: '5.5', title: 'Đánh giá' },
		],
	},
	{ id: '6', title: 'Quy trình 5S có giống với Kaizen?' },
	{ id: '7', title: 'Đối tượng nào nên áp dụng 5S?' },
	{ id: '8', title: 'Các yếu tố tạo nên thành công cho quy trình 5S' },
]

function AsideContent() {
	return (
		<div className="flex flex-col gap-5">
			<p className="font-extrabold text-2xl">Nội dung bài viết</p>

			<ArticleContent activeItem='1' items={contentData} />

			<HeadingRibbon
				className="col-span-2"
				title={
					<Image
						src="/assets/images/Group 21.png"
						alt={'imageAlt'}
						width={300}
						height={300}
						className="mt-45 mb-5"
					/>
				}
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
