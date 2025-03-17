import { SVGIcons } from '@/components/common/icons/svg-icons'
import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

function LangSwitch() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex gap-2 flex-1">
				<div
					className={cn(buttonVariants({ variant: 'ghost' }), 'relative cursor-pointer rounded-full border flex-1')}
				>
					<SVGIcons.vi className="size-6" />
					VI <ChevronDown />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>vi</DropdownMenuItem>
				<DropdownMenuItem>en</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LangSwitch
