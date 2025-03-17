import Image from 'next/image'

function Reaction() {
	return (
		<div className="min-h-[239px] rounded-lg shadow">
			<p className="text-center text-xl font-bold">Bạn thấy bài viết như thế nào?</p>
			<p className="text-center">4 phản hồi</p>

			<div className="flex flex-wrap gap-5 justify-center">
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 border border-green-500 rounded-lg">
					<Image src="/assets/images/thumbs up.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span>Hữu ích</span>
				</div>
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 rounded-lg">
					<Image src="/assets/images/green heart.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span>Yêu thích</span>
				</div>
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 rounded-lg">
					<Image src="/assets/images/star-struck.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span>Thú vị</span>
				</div>
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 rounded-lg">
					<Image src="/assets/images/hushed face.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span>Bất ngờ</span>
				</div>
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 rounded-lg">
					<Image src="/assets/images/yawning face.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span className='truncate'>Nhàm chán</span>
				</div>
				<div className="flex flex-col items-center cursor-pointer w-[90px] h-[109px] justify-between p-2 rounded-lg">
					<Image src="/assets/images/pouting face.png" alt="..." className="size-12" width={50} height={50} />
					<span>1</span>
					<span>Tức giận</span>
				</div>
			</div>
		</div>
	)
}

export default Reaction
