import { cn } from '@/lib/utils'

interface ListItem {
	id: string
	title: string
	children?: ListItem[]
}

interface ArticleContentProps {
	items: ListItem[]
	activeItem: string
}

function ArticleContent({ items, activeItem }: ArticleContentProps) {
	const renderList = (items: ListItem[]) => {
		return items.map((item) => (
			<div key={item.id} className="mb-3">
				<div className="flex items-center">
					<span
						className={cn(
							'text-lg font-semibold text-[#33404A]',
							activeItem === item.id ? 'text-[#15AA7A] font-bold' : ''
						)}
					>
						{item.id}. {item.title}
					</span>
				</div>
				{item.children && item.children.length > 0 && (
					<div className="ml-4 mt-2">{renderList(item.children)}</div>
				)}
			</div>
		))
	}

	return <div>{renderList(items)}</div>
}

export default ArticleContent
