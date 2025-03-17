import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeadingRibbonProps {
	className?: string
	title: string | React.ReactNode
	buttonLabel: string
	buttonLink: string
	imageSrc: string
	imageAlt: string
	type?: 'vertical' | 'horizontal'
}

function HeadingRibbon({ className, title, buttonLabel, buttonLink, imageSrc, imageAlt, type }: HeadingRibbonProps) {
	return (
		<div
			className={cn(
				'relative w-full h-[318px] rounded-2xl bg-linear-to-r from-[#013DA0] to-[#0375F3] p-10 overflow-hidden',
				type === 'vertical' && '!p-5 h-[450px]',
				className
			)}
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				width={300}
				height={300}
				className={cn('absolute bottom-0 w-[472px] right-0 z-0', type === 'vertical' && '-top-20 z-0 -right-20 size-[372px] object-contain')}
			/>
			<div
				className={cn(
					'flex flex-col justify-between text-white md:w-[376px] sm:w-full',
					type === 'vertical' && '!w-full'
				)}
			>
				{title}
				<Link
					href={buttonLink}
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'flex justify-between font-bold rounded-full h-[50px] md:w-[216px] w-full cursor-pointer bg-transparent z-10 px-10',
						type === 'vertical' && '!w-full'
					)}
				>
					<span>{buttonLabel}</span>
					<ArrowUpRight className="size-5" />
				</Link>
			</div>
		</div>
	)
}

export default HeadingRibbon
