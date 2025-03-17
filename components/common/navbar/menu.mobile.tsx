import { SVGIcons } from '@/components/common/icons/svg-icons'
import LangSwitch from '@/components/common/navbar/lang-swicth'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import React from 'react'

interface IMenuMobile {
	className?: string
}

function MenuMobile({ className }: IMenuMobile) {
	return (
		<div className={className}>
			<Sheet>
				<SheetTrigger>
					<Menu className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Blog FOSO - Cập Nhật Tin Tức Mới Nhất</SheetTitle>
						<SheetDescription>
							Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
						</SheetDescription>
					</SheetHeader>

					<div className="flex gap-2 md:hidden">
						<LangSwitch />

						<div
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								'rounded-full bg-[#1AD598] text-[#052B1E] font-bold cursor-pointer hover:bg-[#1ad5979b]'
							)}
						>
							Trở thành khách hàng <SVGIcons.darkArrowUpRight className="size-6" />
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default MenuMobile
