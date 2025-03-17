import {
	Breadcrumb as ShadcnBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import React from 'react'

interface IBreadcrumb {
	items?: { label: string; href?: string }[]
}

function Breadcrumb({ items }: IBreadcrumb) {
	return (
		<ShadcnBreadcrumb>
			<BreadcrumbList>
				{items?.map((item, i) => {
					return (
						<React.Fragment key={i}>
							<BreadcrumbSeparator className="first:hidden" />
							<BreadcrumbItem className="last:font-bold last:text-[#050505]">
								<BreadcrumbLink href={item.href || ''}>{item.label}</BreadcrumbLink>
							</BreadcrumbItem>
						</React.Fragment>
					)
				})}
			</BreadcrumbList>
		</ShadcnBreadcrumb>
	)
}

export default Breadcrumb
