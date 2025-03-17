import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function BlockQuote({ type, text }: { type: 'primary' | 'secondary'; text: string }) {
	return (
		<div
			className={cn(
				'text-base relative p-5 italic',
				type === 'primary' && 'text-center',
				type === 'secondary' && 'text-start border-l-[3px] border-[#15AA7A]'
			)}
		>
			{type === 'primary' && (
				<Image
					src="/assets/images/quote-mark.png"
					alt="..."
					width={50}
					height={50}
					className="size-[50px] object-contain rounded-lg absolute -top-3 -left-3"
				/>
			)}
			{text}
		</div>
	)
}

export default BlockQuote
