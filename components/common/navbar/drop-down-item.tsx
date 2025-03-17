import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface IDropDownItem {
	triggerLabel: string
	urls?: {
		label: string
		href: string
	}[]
	active?: boolean
}

function DropDownItem({ triggerLabel, active, urls }: IDropDownItem) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex gap-2 outline-none">
				<div
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'relative cursor-pointer',
						active && 'font-bold'
					)}
				>
					{triggerLabel} <ChevronDown />
					{active && (
						<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#1AD598]" />
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{urls?.map((item, i) => {
					return (
						<DropdownMenuItem key={i}>
							<Link href={item.href}>{item.label}</Link>
						</DropdownMenuItem>
					)
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropDownItem
