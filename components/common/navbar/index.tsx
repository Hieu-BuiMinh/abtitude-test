import { SVGIcons } from '@/components/common/icons/svg-icons'
import DropDownItem from '@/components/common/navbar/drop-down-item'
import LangSwitch from '@/components/common/navbar/lang-swicth'
import MenuMobile from '@/components/common/navbar/menu.mobile'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
	return (
		<div className="max-w-7xl h-20 m-auto rounded-full flex items-center justify-between gap-10 shadow-[0px_2px_84px_0px_rgba(0,0,0,0.2)] mt-4 md:justify-center px-9">
			<Link className="cursor-pointer" href="/">
				<Image src="/assets/images/logo.svg" alt="logo" width={134} height={55} />
			</Link>

			<div className="items-center justify-center gap-3 text-[#25272A] hidden lg:flex">
				<Link className="cursor-pointer" href="/">
					Về chúng tôi
				</Link>

				<DropDownItem
					triggerLabel="Giải pháp"
					urls={[
						{ label: 'About us', href: '/' },
						{ label: 'Billing', href: '/' },
						{ label: 'Team', href: '/' },
						{ label: 'Subscription', href: '/' },
					]}
				/>
				<DropDownItem
					triggerLabel="Tài nguyên"
					urls={[
						{ label: 'Document', href: '/' },
						{ label: 'Billing', href: '/' },
						{ label: 'Team', href: '/' },
						{ label: 'Subscription', href: '/' },
					]}
					active
				/>

				<Link className="cursor-pointer" href="/">
					Liên hệ
				</Link>
			</div>

			<div className="hidden gap-2 md:flex">
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

			<MenuMobile className="block lg:hidden" />
		</div>
	)
}

export default Navbar
